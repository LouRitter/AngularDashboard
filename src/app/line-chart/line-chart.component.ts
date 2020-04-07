import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { multi } from '../services/data';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.sass']
})
export class LineChartComponent implements OnInit, AfterViewInit {

  @Input() data;
  @ViewChild('chart1') chart;

  multi: any[];
  view: any[] = [500, 300];

  // options
  legend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Year';
  yAxisLabel = 'Population';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
    
  };

  constructor() {
    Object.assign(this, { multi });

   }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

}
