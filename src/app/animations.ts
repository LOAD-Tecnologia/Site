import {animate, AnimationTriggerMetadata, group, state, style, transition, trigger} from '@angular/animations';

export const SlideInOutAnimation: Array<AnimationTriggerMetadata> = [
  trigger('slideInOut', [
    state('in', style({
      'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
    })),
    state('out', style({
      'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
    })),
    transition('in => out', [group([
        animate('400ms ease-in-out', style({
          'opacity': '0'
        })),
        animate('600ms ease-in-out', style({
          'max-height': '0px'
        })),
        animate('700ms ease-in-out', style({
          'visibility': 'hidden'
        }))
      ]
    )]),
    transition('out => in', [group([
        animate('1ms ease-in-out', style({
          'visibility': 'visible'
        })),
        animate('600ms ease-in-out', style({
          'max-height': '500px'
        })),
        animate('800ms ease-in-out', style({
          'opacity': '1'
        }))
      ]
    )])
  ])
];

export const RotateAnimation: Array<AnimationTriggerMetadata> = [
  trigger('rotatedState', [
    state('default', style({transform: 'rotate(0)'})),
    state('rotated', style({transform: 'rotate(-180deg)'})),
    transition('rotated => default', animate('400ms ease-out')),
    transition('default => rotated', animate('300ms ease-in'))
  ])
];
