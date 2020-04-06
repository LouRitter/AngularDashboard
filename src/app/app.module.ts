import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorldContainerComponent } from './hello-world/hello-world.container';
import { HelloWorldTwoContainerComponent } from './hello-world/hello-world-two.container';
import { LineChartContainerComponent } from './line-chart/line-chart.container';
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DragulaModule } from 'ng2-dragula';
import { LineChartComponent } from './line-chart/line-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent, HelloWorldContainerComponent,
    HelloWorldTwoContainerComponent, LineChartComponent, LineChartContainerComponent],
  imports: [BrowserModule, BrowserAnimationsModule, DashboardModule, DragulaModule.forRoot(), NgxChartsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HelloWorldContainerComponent, HelloWorldTwoContainerComponent, LineChartContainerComponent],
})
export class AppModule { }
