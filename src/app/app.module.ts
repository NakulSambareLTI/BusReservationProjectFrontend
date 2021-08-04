import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';


import { FormsModule } from '@angular/forms';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    MyDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbAlertModule,
    FormsModule,
     NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
