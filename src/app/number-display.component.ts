import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  NumberGeneratorService,
  NUMBER_GENERATOR,
} from './number-generator';

@Component({
  selector: 'number-display',
  template: `<div>{{numbers$ | async}}</div>`,
  styles: [`div { 
    text-align: right;
    font-family: 'Segment7Standard'; 
    color: yellow;
    font-size: 72pt;
  } `],
})
export class HelloComponent {
  numbers$: Observable<number>;

  constructor(
    @Inject(NUMBER_GENERATOR)
    private numberGenerator: NumberGeneratorService
  ) {
    this.numbers$ = this.numberGenerator.getNumbers();
  }
}
