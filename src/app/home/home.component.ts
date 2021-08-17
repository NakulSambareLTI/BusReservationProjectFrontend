// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {

//   constructor(private router  : Router) { }
//   locations = [
//     { name: "Nagpur", value: 1 },
//     { name: "Banglore", value: 2 },
//     { name: "Mumbai", value: 3 }
//   ]
//   //locations : String []=["Nagpur","Mumbai","Delhi","Banglore","Chennai","Hydrabad"]
//   sameDestination : boolean = false;
//   sourceChose : string;
//   destinationChosen : string ;

//   checkData()
//   {
//     if(this.sourceChose == this.destinationChosen)
//     {
//       this.sameDestination=true;
//     }
//     else
//     {
//       this.sameDestination=false;
//       console.log("ok");
//       this.router.navigate(['/bookings']);
//     }
//   }

//  openLogin()
//  {
//   this.router.navigate(['/login']);
//  }

//  openRegister()
//  {
//   this.router.navigate(['/register']);
//  }



//   ngOnInit(): void {
//   }

// }
import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSelections } from '../models/UserSelections';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router  : Router) { }
  locations = [
    { name: "Nagpur", value: 1 },
    { name: "Bangalore", value: 2 },
    { name: "Mumbai", value: 3 },
    { name: "Chennai", value: 4 },
    { name: "Delhi", value: 5 },
    {name : "Kolkata",Value : 6}
  ]
  //locations : String []=["Nagpur","Mumbai","Delhi","Banglore","Chennai","Hydrabad"]
  sameDestination : boolean = false;
  sourceChose : string;
  destinationChosen : string ;
  startDate:Date;
  endDate:Date;
  compareDate :boolean=false;
  startTime:Time;
  endTime:Time;
  compareTime :boolean=false;
  checkAllRequiredFields:boolean=false;
  userEmail : string;


  checkData()
  {

    this.sourceChose == this.destinationChosen ? this.sameDestination=true :this.sameDestination=false;

    this.startDate>this.endDate ? this.compareDate=true : this.compareDate=false;

    (this.startTime>this.endTime && this.startDate==this.endDate) ? this.compareTime=true : this.compareTime=false;
    if( this.sourceChose==null || this.destinationChosen==null || this.startDate==null || this.endDate==null || this.startTime==null || this.endTime==null)
    {
      this.checkAllRequiredFields=true;
    }
    if(this.sourceChose!=null && this.destinationChosen!=null && this.startDate!=null && this.endDate!=null && this.startTime!=null && this.endTime!=null )
    {
      this.checkAllRequiredFields=false;
    }

    if(!this.sameDestination && !this.compareDate && !this.compareTime )
    {
     let userSelection = <UserSelections>{};
       userSelection.source=this.sourceChose;
       userSelection.destination=this.destinationChosen;
       userSelection.date_of_journey=this.startDate;
       sessionStorage.setItem("userSelections",JSON.stringify(userSelection));

      console.log("ok");
      this.router.navigate(['/bookings']);
    }
  }

  ngOnInit(): void {
    this.userEmail = sessionStorage.getItem('userKey');
    console.log("User email",this.userEmail);
  }

}
