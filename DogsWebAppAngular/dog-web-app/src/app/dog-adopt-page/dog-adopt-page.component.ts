import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { DogsService } from '../dogs.service';
import { DogAdoptService } from "../dog-adopt.service";

@Component({
  selector: 'app-dog-adopt-page',
  templateUrl: './dog-adopt-page.component.html',
  styleUrls: ['./dog-adopt-page.component.css'],
  animations: [trigger('showError', [
    state('show', style({ opaciry: 1 })),
    state('hidden', style({ opacity: 0 })),
    transition('* => show', animate('500ms', style({ opacity: 1 }))),
    transition('* => hidden', animate('500ms', style({ opacity: 0 }))),
  ])]
})
export class DogAdoptPageComponent implements OnInit {
  dogs = this.dogsService.getDogs();

  checkoutForm!: FormGroup;

  createForm() {
    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  constructor(private dogsService: DogsService,
    private formBuilder: FormBuilder,
    private dogAdoptService: DogAdoptService) {
    this.createForm();
  }

  ngOnInit(): void { }

  dog = this.dogAdoptService.getCart();

  submit() {

    this.dog = this.dogAdoptService.clearCart();
    const fb = this.checkoutForm.value.name;
    alert(`Your new dog is excited ${fb}`);
    this.checkoutForm.reset();
  }

  showHidden = true;

  showOrHidden() {
    this.showHidden = !this.showHidden;
  }
}
