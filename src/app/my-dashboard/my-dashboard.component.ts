import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit {
  title = 'BusReservationFrontend';

  buttonStatus = false;
  bookingObj: Bookings = new Bookings;
  username : string ="User";
  constructor() {

}

MyBookings : Bookings[]=[
  { Destination : "MUMBAI",
  Source : "HYDERABAD"},
  { Destination : "Nagpur",
  Source : "Chennai"},
  { Destination : "MUMBAI",
  Source : "Kochi"},
];
myBookings()
{
  this.buttonStatus = true;
}


  ngOnInit(): void {


  }

}
class Bookings {
  Source: String | undefined;
  Destination: String | undefined;
}
