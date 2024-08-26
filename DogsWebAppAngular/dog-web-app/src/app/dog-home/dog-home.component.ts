import { Component, OnInit } from '@angular/core';

import { Dog } from '../dogs';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-dog-home',
  templateUrl: './dog-home.component.html',
  styleUrls: ['./dog-home.component.css'],
})
export class DogHomeComponent implements OnInit {
  dogs: Dog[] = [];

  constructor(private dogsService: DogsService) { }

  getDog(): void {
    this.dogsService.getDogs().subscribe((dogs) => (this.dogs = dogs));
  }

  ngOnInit(): void {
    this.getDog();
  }

}
