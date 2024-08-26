import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger,
} from '@angular/animations';

import { Dog } from '../dogs';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-dog-aside',
  templateUrl: './dog-aside.component.html',
  styleUrls: ['./dog-aside.component.css'],
  animations: [
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(':enter', [
          style({ opacity: 0, width: 0 }),
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 1, width: '100%' })),
          ]),
        ], { optional: true })
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(30, [
            animate('300ms ease-out', style({ opacity: 0, width: 0 })),
          ]),
        ])
      ]),
    ]),
  ],
})
export class DogAsideComponent implements OnInit {
  dogsList: Dog[] = [];
  dogsTotal = -1;

  get dogs() { return this._dogs; }
  private _dogs: Dog[] = [];

  constructor(private dogsService: DogsService) { }

  getDog(): void {
    this.dogsService.getDogs().subscribe((dogs) => (this.dogsList = dogs));
  }

  ngOnInit(): void {
    this.getDog();

    this._dogs = this.dogsList;
  }

  updateCriteria(criteria: string) {
    criteria = criteria ? criteria.trim() : '';

    this._dogs = this.dogsList.filter(dog => dog.race.toLowerCase().includes(criteria.toLowerCase()));
    const newTotal = this.dogs.length;

    if (this.dogsTotal !== newTotal) {
      this.dogsTotal = newTotal;
    } else if (!criteria) {
      this.dogsTotal = -1;
    }
  }
}
