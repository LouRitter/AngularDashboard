import { Component, OnInit } from '@angular/core';
import { single } from '../services/data';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.sass']
})
export class PieChartComponent implements OnInit {
  single: any[];

  // options
  view = [600, 300];
  gradient = true;
  showLegend = true;
  showLabels = false;
  isDoughnut = true;
  legendPosition = 'right';
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { single });
  }

  ngOnInit(): void {
  }

}
