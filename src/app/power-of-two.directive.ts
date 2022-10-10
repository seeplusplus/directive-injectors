import { Directive, Inject, Input } from '@angular/core';
import { NUMBER_GENERATOR } from './number-generator';
import { PowerOfTwoNumberGenerator } from './power-of-two.service';

@Directive({
  selector: '[powersOfTwo]',
  providers: [
    {
      provide: NUMBER_GENERATOR,
      useClass: PowerOfTwoNumberGenerator,
    },
  ],
})
export class PowerOfTwoDirective {
  @Input('onlyMersenne')
  set _onlyMersenne(v: boolean) {
    this.powerOfTwoNumberService.setOnlyMersenne(v ?? false);
  }

  constructor(@Inject(NUMBER_GENERATOR) private powerOfTwoNumberService: PowerOfTwoNumberGenerator) {}
}
