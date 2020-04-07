import { Component, ChangeDetectorRef, OnInit, AfterViewInit } from '@angular/core';
import { DashboardCardContainerComponent } from '../dashboard-card/dashboard-card.container';
import { LineChartService } from '../services/line-chart.service';
import { tap } from 'rxjs/operators';

@Component({
  template: `<app-pie-chart></app-pie-chart>`,
})
export class PieChartContainerComponent extends DashboardCardContainerComponent implements OnInit {

  constructor() {
    super();
  }



  ngOnInit() {

  }
}
