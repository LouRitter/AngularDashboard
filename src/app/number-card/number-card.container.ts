import { Component, ChangeDetectorRef, OnInit, AfterViewInit } from '@angular/core';
import { DashboardCardContainerComponent } from '../dashboard-card/dashboard-card.container';
import { LineChartService } from '../services/line-chart.service';
import { tap } from 'rxjs/operators';

@Component({
  template: `<app-number-card></app-number-card>`,
})
export class NumberCardContainerComponent extends DashboardCardContainerComponent implements OnInit, AfterViewInit {
  data;

  constructor(private cd: ChangeDetectorRef) {
    super();
  }



  ngOnInit() {

  }

  ngAfterViewInit() {

  //   this.chartService.data$
  //   .pipe(
  //     tap(values => (this.data = values))
  // ).subscribe(() => {
  //   this.cd.detectChanges();

  //   });'

  }

}
