import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BusReservationFrontend';
  username = "VASAVI";
  buttonStatus = true;
  bookingObj: Bookings = new Bookings;

  constructor() {
    this.bookingObj.Destination = "MUMBAI";
    this.bookingObj.Source = "HYDERABAD";
  }
}
class Bookings {
  Source: String | undefined;
  Destination: String | undefined;
}
