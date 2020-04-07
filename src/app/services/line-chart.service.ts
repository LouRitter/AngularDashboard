import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LineChartService {

  data =  [
    {
      name: 'Germany',
      series: [
        {
          name: '2010',
          value: 7300000
        },
        {
          name: '2011',
          value: 8940000
        }
      ]
    },

    {
      name: 'USA',
      series: [
        {
          name: '2010',
          value: 7870000
        },
        {
          name: '2011',
          value: 8270000
        }
      ]
    }
  ];
  constructor() {

  }
}
