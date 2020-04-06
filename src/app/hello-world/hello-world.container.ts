import { Component } from '@angular/core';
import { DashboardCardContainerComponent } from '../dashboard-card/dashboard-card.container';
import { HelloService } from '../services/hello-world.service';
@Component({
  template: `<app-hello-world [name]="name"></app-hello-world>
  `,
})
export class HelloWorldContainerComponent extends DashboardCardContainerComponent {
  name;

  constructor(private helloWorldService: HelloService) {
    super();
    this.name = helloWorldService.names[0];
  }
}
