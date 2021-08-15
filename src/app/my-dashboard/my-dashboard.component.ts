import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../bookings.service';
import { BusJourneyDetails } from '../models/BusJourneyDetails';
import { ReservationDetails } from '../models/ReservationDetails';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit {
  title = 'BusReservationFrontend';
  reservationDetails : ReservationDetails []=[];
  busJourneyDetails : BusJourneyDetails[]=[];
  journeyID : number =23456;
  buttonStatus = false;
  bookingObj: Bookings = new Bookings;
  username : string ="User";
  constructor(private bookingsService :BookingsService) {

}

email : string ="jack@gmail.com"
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



  for (let index = 0; index < this.reservationDetails.length; index++) {
    //const element = array[index];

  }
//this.journeyID=this.reservationDetails[0].journey_Id;
  console.log(this.journeyID)
  this.bookingsService.getBusJourneyDetails(this.journeyID).subscribe(
    (data : BusJourneyDetails)=>
    {

           this.busJourneyDetails[0]=data;
           console.log(this.busJourneyDetails[0]);


    },
    (err)=>
    {
      console.log(err);
    }
  );



}


  ngOnInit(): void {
    this.bookingsService.getUsersReservationDetails(this.email).subscribe(
      (data : ReservationDetails[])=>
      {
    this.reservationDetails = data;
    console.log(this.reservationDetails)
    console.log(this.reservationDetails[0].journey_Id);


      },
      (err)=>
      {
        console.log(err);
      }
    );

  }

}
class Bookings {
  Source: String | undefined;
  Destination: String | undefined;
}
