import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Dog } from './dogs';
import { Race } from './races';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const dogs: Dog[] = [
      {
        name: 'Nacho',
        age: 10,
        id: 1,
        img: [
          './assets/Nacho/20180903_182522_optimized_optimized.jpg',
          './assets/Nacho/20180816_182205_optimized_optimized.jpg',
          './assets/Nacho/20201022_105104_optimized_optimized.jpg',
        ],
        description:
          'The Blanquito descended from the also now-extinct Bichón Tenerife. It is believed that the Blanquito was eventually cross-bred with other bichon types, including the poodle, to create what is now known as the Havanese. Sometimes referred to as "Havana Silk Dogs", this was originally another name for the Blanquito de la Habana.',
        stock: 1,
        price: 10,

        race: 'Havanese dog',
        size: 4,
        fur: 'furry',
        raceImg: './assets/Races/bichon-havanese.jpeg',
      },
      {
        name: 'Nico',
        age: 1,
        id: 2,
        img: [
          './assets/Nico/IMG-20221022-WA0003.jpg',
          './assets/Nico/61d6708a-8c71-46cf-88fc-a91201d9c19c.jpg',
          './assets/Nico/eb57c070-20f1-40a9-8413-87fd7d216859.jpg',
        ],
        description:
          'Satos are like snowflakes — from their distinctive ears to their signature tails to their unique personalities — no two are alike. Yet they all have something in common. Each dog has the potential to become the most loyal and loving companion you have ever known.',
        stock: 1,
        price: 10,

        race: 'Sato',
        size: 3,
        fur: 'hairless',
        raceImg: './assets/Races/sato.jpeg',
      },
      {
        name: 'Nicho',
        age: 4,
        id: 3,
        img: [
          './assets/Nicho/download(1).jpg',
          './assets/Nicho/download(2).jpg',
          './assets/Nicho/download(3).jpg',
        ],
        description: 'A nice dog I created with my girlfriend :)',
        stock: 2,
        price: 20,

        race: 'Havanese Sato',
        size: 2,
        fur: 'less furry',
        raceImg: './assets/Races/havanese-sato.jpeg',
      },

      {
        name: '',
        age: 0,
        id: 4,
        img: [],
        description: '',
        stock: 1,
        price: 40,

        race: 'Golden Retriever',
        size: 1,
        fur: 'furry',
        raceImg: './assets/Races/golden-retriever.jpeg',
      },

      {
        name: '',
        age: 0,
        id: 5,
        img: [],
        description: '',
        stock: 1,
        price: 30,

        race: 'German Shepard',
        size: 8,
        fur: 'less furry',
        raceImg: './assets/Races/german-sheperd.jpeg',
      },
    ];
    return { dogs };

    const races: Race[] = [
      {
        type: 'bichon habaner',
        size: 10,
        fur: 'furry',
        img: '',
      },
      {
        type: 'bichon habaner',
        size: 10,
        fur: 'furry',
        img: '',
      },
      {
        type: 'bichon habaner',
        size: 10,
        fur: 'furry',
        img: '',
      },
      {
        type: 'bichon habaner',
        size: 10,
        fur: 'furry',
        img: '',
      },
      {
        type: 'bichon habaner',
        size: 10,
        fur: 'furry',
        img: '',
      },
      {
        type: 'bichon habaner',
        size: 10,
        fur: 'furry',
        img: '',
      },
    ];
    return { races };
  }
}
