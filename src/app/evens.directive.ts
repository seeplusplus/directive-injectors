import { Directive, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EvenNumberGenerator } from './evens.service';
import { NUMBER_GENERATOR } from './number-generator';

@Directive({
  selector: '[evenNumbers]',
  providers: [
    {
      provide: NUMBER_GENERATOR,
      useClass: EvenNumberGenerator,
    },
  ],
})
export class EvenNumberDirective implements OnChanges {
  @Input('withMax')
  _withMax;
  constructor(@Inject(NUMBER_GENERATOR) private evenNumberGenerator: EvenNumberGenerator) {

  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes._withMax && changes._withMax.previousValue !== changes._withMax.currentValue) {
      this.evenNumberGenerator.setMaxValue(this._withMax ?? Infinity);
    }
  }
}
