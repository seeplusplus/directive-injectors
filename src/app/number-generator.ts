import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface NumberGeneratorService {
  getNumbers(): Observable<number>;
}

export const NUMBER_GENERATOR =
  new InjectionToken<NumberGeneratorService>('NUMBER_GENERATOR');
