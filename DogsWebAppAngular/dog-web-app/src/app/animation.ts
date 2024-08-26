import {
  trigger,
  style,
  animate,
  transition,
  query,
  animateChild,
  group,
} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ opacity: 1 }),
      query(':enter', [
        style({ opacity: 0 })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('500ms', style({ opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('500ms', style({ opacity: 1 }))
        ], { optional: true }),
        query('@*', animateChild(), { optional: true })
      ]),
    ])
  ]);
