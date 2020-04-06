import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LineChartService {

  data =  [3, 4, 5, 5, 6, 7, 5, 3, 8];
  constructor() {

  }
}
