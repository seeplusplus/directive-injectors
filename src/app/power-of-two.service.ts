import { Injectable, Input } from '@angular/core';
import { filter, interval, Observable, of, pipe, scan, startWith, tap } from 'rxjs';
import { NumberGeneratorService } from './number-generator';
import { default as isPrime } from 'is-prime';

@Injectable()
export class PowerOfTwoNumberGenerator implements NumberGeneratorService {
  private onlyMersenne: boolean;

  getNumbers(): Observable<number> {

    const getOnlyMersenne = () => this.onlyMersenne;
    return interval(1000)
      .pipe(
        scan((acc, _) => acc*2, 1),
        filter(v => !this.onlyMersenne || (this.onlyMersenne && isPrime(v - 1)))
      );
  }

  setOnlyMersenne(onlyMersenne: boolean) {
    this.onlyMersenne = onlyMersenne;
  }
}
