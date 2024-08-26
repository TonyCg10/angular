import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';

import { Dog } from '../dogs';

@Component({
  selector: 'app-dog-img',
  templateUrl: './dog-img.component.html',
  styleUrls: ['./dog-img.component.css'],
  animations: [
    trigger('slider', [
      state(
        'next', style({
          opacity: 1,
        })
      ),
      state('prev', style({
        opacity: 1,
      })),
      transition('* => next', animate('500ms', style({
        opacity: 0.5,
      }))),
      transition('* => prev', animate('500ms', style({
        opacity: 0.5,
      }))),
    ])
  ],
})
export class DogImgComponent implements OnInit {
  @Input('dog') dog!: Dog;

  constructor() {
  }

  ngOnInit(): void {
  }

  num: number = 0;

  next() {
    this.num++;
    if (this.num >= this.dog.img.length) {
      this.num = 0;
    }
  }

  prev() {
    this.num--;
    if (this.num < 0) {
      this.num = this.dog.img.length - 1;
    }
  }
}
