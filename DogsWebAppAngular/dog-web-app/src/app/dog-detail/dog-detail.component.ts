import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Dog } from '../dogs';
import { DogsService } from '../dogs.service';
import { DogAdoptService } from '../dog-adopt.service';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css'],
})
export class DogDetailComponent implements OnInit {
  dog!: Dog;

  constructor(
    private route: ActivatedRoute,
    private dogsService: DogsService,
    private dogAdoptService: DogAdoptService,
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const dogNameFromRoute = String(routeParams.get('name'));
    this.dogsService.getDogs().subscribe(dogs => {
      this.dog = dogs.find(dog => dog.name == dogNameFromRoute)!
    });
  }
  @Input('list') dogList: Dog[] = [];

  adopting: number = 0;
  adoptDog() {
    this.adopting++;
    let confirm = window.confirm(`I'm 18 or above`);
    this.dogList.push(this.dog);

    if (this.adopting > this.dog.stock && confirm === true) {

      alert('Is unique');
    } else {

      this.dogAdoptService.adoptDog(this.dog);
    }
  }
}
