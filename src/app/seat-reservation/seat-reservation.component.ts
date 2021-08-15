import { Component, OnInit } from '@angular/core';
import { Seat } from '../models/seat.model';
import { Router } from '@angular/router';
import { BookingsService } from '../bookings.service';
import { BusSeatDetails } from './BusSeatDetails';
import { BusJourneyDetails } from '../models/BusJourneyDetails';
import { BusDetails } from '../models/BusDetails';
@Component({
  selector: 'app-seat-reservation',
  templateUrl: './seat-reservation.component.html',
  styleUrls: ['./seat-reservation.component.css']
})
export class SeatReservationComponent implements OnInit {
  showSeatList:Seat[]=[];
  busSeatDetail : BusSeatDetails[]=[];
  total=0;
  fillupSeat=[];
  alert=false;
  busJourneyDetails : BusJourneyDetails;
  temp : any;
  temp1 : any;
  busno : BusJourneyDetails;
  journeyId : number;
  totalSeates : number;
  cost_per_seat : number=200;
  busNo :string;
  busDetails : BusDetails;
  seates = new Set();
  constructor(private router  : Router,private bookingsService :BookingsService)  {
    this.temp1=sessionStorage.getItem("busjourneyDetails");
    this.journeyId=JSON.parse(this.temp1);
    this.temp=sessionStorage.getItem("busNoDetails");
    this.busNo=JSON.parse(this.temp);

    console.log("Busjourney details",this.busJourneyDetails);
    //console.log("Bus journey id",this.busJourneyDetails.journeyID);
    console.log("Bus no",this.busNo);
    //this.busNo=this.busNo;
    //this.journeyId=this.busJourneyDetails.journeyID;
    console.log("Bus journey id", this.journeyId);
  }

  ngOnInit(): void {

    this.bookingsService.getTotalNoOfSeates(this.busNo).subscribe(
      (data : any)=>
      {
       this.totalSeates=data;
       console.log("Total no of seates",this.totalSeates);
      },
      (err)=>
      {
        console.log(err);
      }
    );
    this.bookingsService.getBusSeatDetailsByJourneyId(  this.journeyId).subscribe(
      (data : BusSeatDetails[])=>
      {
        this.busSeatDetail=data;
        console.log("BusSeatDetail ",this.busSeatDetail);
      },
      (err)=>
      {
        console.log(err);
      }
    );


    this.bookingsService.getCostPerSeat(this.busNo).subscribe(
      (data : any)=>
      {
        this.cost_per_seat=data;
       console.log("Cost per deates = ",this.cost_per_seat);
      },
      (err)=>
      {
        console.log(err);
      }
    )
      this.createSeates(this.totalSeates);



      console.log("BusSeatDetail ",this.busSeatDetail);
      console.log(this.journeyId);





    // this.bookingsService.getBusDetails(this.busNo).subscribe(
    //   (data : BusDetails)=>
    //   {

    //       this.busDetails=data;
    //   },
    //   (err)=>
    //   {
    //     console.log(err);
    //   }
    // );
    // this.cost_per_seat=this.busDetails.cost_per_seat;
    // console.log(this.cost_per_seat);

    // console.log(this.busDetails);
    }


    createSeates(totalSeates : number)
    {
       for (let index = 0; index < 10; index++) {

       let s1=new Seat;
       s1.seatNo="S"+(index+1);
       s1.fare=this.cost_per_seat;
       s1.seatClass="AC";
       this.showSeatList.push(s1);


       }
       console.log("BusSeatDetail ",this.busSeatDetail);
       console.log("Total seates",totalSeates);
       console.log("List length",this.showList.length);
    }

    Seat(e) {
      let seats=[];
      seats= this.showSeatList.map(iteam=>{
        return iteam.seatNo
      })
       let id = document.getElementById(e);

       if((this.fillupSeat.indexOf(String(e))<0) && (seats.indexOf(e)<0)){
         if((this.showSeatList.length!=4)) {
           id.innerHTML = `<img src="./assets/img/bookseat.png">`
           let seat={
            seatNo:e
          }
           this.showList(seat);
         }
         else{
           this.alert=true;
         }
       }

     }

     showList(seat){
         this.showSeatList.push(seat)
     }

     confirmJourney(){
      this.router.navigate(['/dashboard']);
       let seats=[];
     seats= this.showSeatList.map(iteam=>{
       return iteam.seatNo
     });

     }

    // seates : string[]=[];

     buttonststus : string="unselected";
     reservedbuttonStatus : string="selected";


     changeButtonStatus(seatno : string)
     {
        this.seates.add(seatno);
      // if(this.buttonststus=="unselected")
      // {
      //   this.buttonststus="selected";
      // }else{
      //   this.buttonststus=="unselected"
      // }

     this.total= this. cost_per_seat*this.seates.size;


     }

     costPerSeat : number;
 busType : string;
  selectBusDetails()
   {

  }

  gotoPaymentSection()
  {
    sessionStorage.setItem("amountToPay",JSON.stringify(this.total));
    sessionStorage.setItem("journeyIdForPayment",JSON.stringify(this.journeyId));
    sessionStorage.setItem("seatesSelectedByUser",JSON.stringify(this.seates));
    this.bookingsService.seatesSet=this.seates;
    this.router.navigate(['/payment']);
  }
  }
