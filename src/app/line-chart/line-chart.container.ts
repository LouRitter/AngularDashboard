import { Component, ChangeDetectorRef, OnInit, AfterViewInit } from '@angular/core';
import { DashboardCardContainerComponent } from '../dashboard-card/dashboard-card.container';
import { LineChartService } from '../services/line-chart.service';
import { tap } from 'rxjs/operators';

@Component({
  template: `<app-line-chart [data]="data"></app-line-chart>`,
})
export class LineChartContainerComponent extends DashboardCardContainerComponent implements OnInit, AfterViewInit {
  data;

  constructor(private chartService: LineChartService, private cd: ChangeDetectorRef) {
    super();
  }



  ngOnInit() {
    this.data = this.chartService.data;

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
