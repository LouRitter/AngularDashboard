import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.sass'],
})
export class HelloWorldComponent implements OnInit {
  @Input() name;

  constructor() {}

  ngOnInit() {}
}
