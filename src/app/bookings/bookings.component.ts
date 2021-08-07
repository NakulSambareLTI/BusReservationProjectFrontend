import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  username : string ="User";
  constructor() { }
  // Travels</th>
  // <th scope="col">Depart</th>
  // <th scope="col">Arival</th>
  // <th scope="col">Fare
  ngOnInit(): void {
  }
buses : AvailableBuses[]=[
  {travels : "Divya Travels",depart : "8:10 PM",arival : "6:10 AM",seates : "5 Seates"},
  {travels : "Luxuary Travels",depart : "7:10 PM",arival : "9:10 AM",seates : "8 Seates"},
  {travels : "ABc Travels",depart : "9:10 PM",arival : "2:10 AM",seates : "10 Seates"}
];
}
class AvailableBuses
{
  travels : String|undefined;
  depart : String | undefined;
  arival : String | undefined;
  seates : String | undefined;
}
