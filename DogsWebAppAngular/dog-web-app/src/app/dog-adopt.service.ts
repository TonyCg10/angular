import { Injectable } from '@angular/core';

import { Dog } from './dogs';

@Injectable({
  providedIn: 'root'
})
export class DogAdoptService {
  dogs: Dog[] = [];

  getCart() {
    return this.dogs;
  }

  clearCart() {
    this.dogs = [];
    return this.dogs;
  }

  adoptDog(dog: Dog) {
    this.dogs.push(dog);
  }

  constructor() { }
}
