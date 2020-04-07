import { Component, OnInit } from '@angular/core';
import { single } from '../services/data';
@Component({
  selector: 'app-number-card',
  templateUrl: './number-card.component.html',
  styleUrls: ['./number-card.component.sass']
})
export class NumberCardComponent implements OnInit {
  single: any[];
  view: any[] = [500, 300];

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor = '#232837';
  constructor() {
    Object.assign(this, { single });
  }
  ngOnInit(): void {
  }

}
