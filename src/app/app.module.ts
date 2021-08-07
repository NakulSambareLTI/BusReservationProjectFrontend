import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';


import { FormsModule } from '@angular/forms';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { SeatReservationComponent } from './seat-reservation/seat-reservation.component';

=======
import { BookingsComponent } from './bookings/bookings.component';
>>>>>>> 1efd571f1b47f6677b6b72619263fb5ba3f71c4f
@NgModule({
  declarations: [
    AppComponent,
    MyDashboardComponent,
<<<<<<< HEAD
    SeatReservationComponent,
=======
    BookingsComponent
>>>>>>> 1efd571f1b47f6677b6b72619263fb5ba3f71c4f
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
