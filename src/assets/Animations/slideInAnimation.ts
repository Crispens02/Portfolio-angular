import { trigger, transition, style, animate } from '@angular/animations';

export const slideInAnimation = trigger('slideInAnimation', [
  transition(':enter', [
    style({ opacity: 1, transform: 'translateY(150%)' }),
    animate('150ms', style({ opacity: 1, transform: 'translateY(1px)' }))
  ]),
]);


