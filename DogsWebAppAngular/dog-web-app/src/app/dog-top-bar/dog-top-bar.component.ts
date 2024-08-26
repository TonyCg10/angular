import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';

import { Dog } from '../dogs';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-dog-top-bar',
  templateUrl: './dog-top-bar.component.html',
  styleUrls: ['./dog-top-bar.component.css'],
  animations: [
    trigger('searchBar', [
      state('hidden',
        style({
          opacity: 0,
        })),
      state('show',
        style({
          opacity: 1,
          backgroundColor: 'white',
          borderRadius: '20px',
        })),
      transition('hidden <=> show', [animate('300ms')]),
    ]),
  ]
})
export class DogTopBarComponent implements OnInit {
  dogs: Dog[] = [];
  dogs$!: Observable<Dog[]>;
  private searchTerms = new Subject<string>();

  constructor(private dogsService: DogsService) { }

  getDog(): void {
    this.dogsService.getDogs().subscribe((dogs) => (this.dogs = dogs));
  }

  bln: 'hidden' | 'show' = 'hidden';

  search(term: string): void {
    if (term !== '') {
      this.searchTerms.next(term);
      this.bln = 'show'
    } else {
      this.bln = 'hidden'
    }
  }

  ngOnInit(): void {
    this.getDog();

    this.dogs$ = this.searchTerms.pipe(
      distinctUntilChanged(),

      switchMap((term: string) => this.dogsService.dogsNameSearch(term))
    );
  }

  closeNav() {
    document.getElementById('mySidebar')!.style.width = '0';
    document.getElementById('main')!.style.opacity = '1';
  }

  openNav() {
    document.getElementById('mySidebar')!.style.width = '100%';
    document.getElementById('main')!.style.opacity = '0';
  }
}
