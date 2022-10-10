import { Injectable } from '@angular/core';
import { filter, interval, map, Observable, of } from 'rxjs';
import { NumberGeneratorService } from './number-generator';

@Injectable()
export class EvenNumberGenerator implements NumberGeneratorService {
  private max: number = Infinity;
  
  getNumbers(): Observable<number> {
    return interval(1000)
      .pipe(
        map(i => 2*i),
        filter(i => i < this.max)
      );
  }

  setMaxValue(max: number) {
    this.max = max;
  }
}
