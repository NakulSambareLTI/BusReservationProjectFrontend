import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingsService } from '../bookings.service';
import { BusJourneyDetails } from '../models/BusJourneyDetails';
import { UserSelections } from '../models/UserSelections';
import { BusDetails } from '../models/BusDetails';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  busJourneyDetails1 : BusJourneyDetails[];
listForUsers : BusJourneyDetails[]=[];
  usersChoices : UserSelections;
  busDetails : BusDetails;
  userEmail : string;
  temp : any;
  username : string ="User";
  constructor(private router  : Router,private bookingsService :BookingsService) {
    this.temp=sessionStorage.getItem("userSelections");
    this.usersChoices=JSON.parse(this.temp);
    this.userEmail = sessionStorage.getItem('userKey');
    console.log("User email",this.userEmail);

  }

  // Travels</th>
  // <th scope="col">Depart</th>
  // <th scope="col">Arival</th>
  // <th scope="col">Fare
  ngOnInit(): void {
    this.loadAllBusJourneyDetails();

  }


loadAllBusJourneyDetails()
{
  console.log("In method1");
  this.bookingsService.getAllBusJourneyDetails().subscribe(
    (data : BusJourneyDetails[])=>
    {
      this.listForUsers=data;
          this.busJourneyDetails1=this.listForUsers;
          // for(let i=0;i< data.length-1;i++){
          //  // console.log(this.busJourneyDetails1[i].source_loc);
          //   if(this.listForUsers[i].source_loc==this.usersChoices.source && this.listForUsers[i].destination_loc==this.usersChoices.destination)
          //   {
          //     this.busJourneyDetails1[i]=this.listForUsers[i];
          //   }
          // }

          //this.listForUsers=data;
           console.log("In method2");
           console.log(this.usersChoices.source);
           console.log(this.busJourneyDetails1);
           this.sortResults();
           //this.sortResults();
    },
    (err)=>
    {
      console.log(err);
    }
  );

}

sortResults()
  {
    console.log(this.usersChoices.source);
    console.log(this.usersChoices.destination);
    // for(let i=0;i<=this.busJourneyDetails1.length-1;i++){
    //   console.log(this.busJourneyDetails1[i].source_loc);
    //   if(this.busJourneyDetails1[i].source_loc==this.usersChoices.source && this.busJourneyDetails1[i].destination_loc==this.usersChoices.destination  )
    //   {
    //     this.listForUsers[i]=this.busJourneyDetails1[i];
    //   }
    // }
    console.log(this.usersChoices.date_of_journey);
 //this.busJourneyDetails1=this.listForUsers.filter(e=>(e.source_loc == this.usersChoices.source && e.destination_loc == this.usersChoices.destination && e.departure_date == this.usersChoices.date_of_journey));
 this.busJourneyDetails1=this.listForUsers.filter(e=>(e.source_loc == this.usersChoices.source && e.destination_loc == this.usersChoices.destination  &&this.usersChoices.date_of_journey.getUTCFullYear==e.departure_date.getUTCFullYear && this.usersChoices.date_of_journey.getMonth ==e.departure_date.getMonth && this.usersChoices.date_of_journey.getDay == e.departure_date.getDay));

 console.log("User specified date",this.usersChoices.date_of_journey);



 console.log(this.listForUsers);
    console.log(this.listForUsers.length);


  }
// buses : AvailableBuses[]=[
//   {travels : "Divya Travels",depart : "8:10 PM",arival : "6:10 AM",seates : "5 Seates",fare  : 500},
//   {travels : "Luxuary Travels",depart : "7:10 PM",arival : "9:10 AM",seates : "8 Seates",fare : 600},
//   {travels : "ABc Travels",depart : "9:10 PM",arival : "2:10 AM",seates : "10 Seates",fare : 5000}
// ];
bus_no : String;
journey_id : number;
bookSeates(bus : BusJourneyDetails)
  {

   this.bus_no=bus.bus_no;
   this.journey_id=bus.journeyID;
   // sessionStorage.setItem("busno_selected",JSON.stringify(this.bus_no));
    sessionStorage.setItem("busjourneyDetails",JSON.stringify(bus.journeyID));
    sessionStorage.setItem("DepartureDate",JSON.stringify(bus.departure_date));
    sessionStorage.setItem("busNoDetails",JSON.stringify(bus.bus_no));

    this.router.navigate(['/seat-reservation']);
  }

 costPerSeat : number;
 busType : string;
  selectBusDetails(bus : BusJourneyDetails)
   {
    console.log(bus.bus_no);
    this.bookingsService.getBusDetails(bus.bus_no).subscribe(
      (data : BusDetails)=>
      {

          this.busDetails=data;
      },
      (err)=>
      {
        console.log(err);
      }
    );
    this.costPerSeat=this.busDetails.cost_per_seat;
    this.busType=this.busDetails.bus_type;
    console.log(this.busDetails);
  }
  logout()
  {
    console.log("logging out the user");
    this.router.navigate(['/home']);
  }
}


