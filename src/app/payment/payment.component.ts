import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sys } from 'typescript';
import { BookingsService } from '../bookings.service';
import { PaymentDetails } from '../models/PaymentDetails';
import { ReservationDetails } from '../models/ReservationDetails';
import { TransactionDetails } from '../models/TransactionDetails';
import { User } from '../models/User';
import { DatePipe } from '@angular/common';
import { WalletService } from '../wallet.service';
import { Wallet } from '../wallet/wallet';
import { concat } from 'rxjs';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { CancelReservationService } from '../cancel-reservation.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [
    DatePipe
  ]
})
export class PaymentComponent implements OnInit {
  myUser1 : User = new User();
  temp3 : any;
  walletOption : boolean=false;
  temp : any;
  temp1 : any;
  temp2 : any;
  temp4 : any;
  departureDate : Date;
  amountToBePayed : number;
  cardname:String="";
  cardnumber:String="";
  expmonth:String="";
  expyear:String="";
  cvv:String="";
  journey_id : number;
  seates1 = new Set();
  userEmail : string;
  reservationDetails:ReservationDetails = new ReservationDetails();
  paymentDetails : PaymentDetails = new PaymentDetails();
  transactionDetails : TransactionDetails = new TransactionDetails();
  date : Date;
  wallet : Wallet = new Wallet();
  userPin : string;
  myDto2 :MyDto2=new MyDto2();
//Reservation Details
reservation_id : number;

//Payment Details

payment_id : number;
  datePipe: any;


now : any;

  constructor(private router  : Router,private bookingsService :BookingsService ,private datepipe : DatePipe,private custWalletservice: WalletService, private cancelReservationService :CancelReservationService) {
    // this.date=new Date();
    // let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
    this.temp=sessionStorage.getItem("amountToPay");
    this.amountToBePayed=JSON.parse(this.temp);
    this.temp1=sessionStorage.getItem("journeyIdForPayment");
    this.journey_id=JSON.parse(this.temp1);

    this.temp2=sessionStorage.getItem("seatesSelectedByUser");
    this.seates1=JSON.parse(this.temp2) ;
   this.seates1=bookingsService.seatesSet;
    console.log("Payment amount :",this.amountToBePayed);

    console.log("Journey id",this.journey_id);
    console.log("Seates selected",this.seates1.size);
    this.temp3= sessionStorage.getItem("userKey");

    this.userEmail = sessionStorage.getItem('userKey');
    console.log("User email",this.userEmail);
    this.temp4=sessionStorage.getItem("DepartureDate");
    this.departureDate=JSON.parse(this.temp4) ;
    console.log("Departure date ",this.departureDate);

    this.jstoday = formatDate(this.today, 'yyyy-MM-dd ', 'en-US', '+0530');
    this.jstime=  formatDate(this.today, 'hh:mm:ss ', 'en-US', '+0530');
      console.log(bookingsService.seatesSet)

   //

  }


  today= new Date();
  jstoday = '';
   jstime='';


  //fixedTimezone = this.today;
  ngOnInit(): void {
    console.log(this.bookingsService.myUser.username);
   console.log("system date", (this.reservationDetails.reservation_Date= new Date()).getUTCDate()) ;
  // this.today = this.datepipe.transform(this.today, 'yyyy-MM-dd');
  console.log(this.bookingsService.seatesSet);
   console.log(this.jstoday);
   console.log(this.jstime);
   //console.log(this.system_date);
  }

 // systemDate =Date(this.jstoday)
  payWithCard()
  {

  }

  selectWalletPaymentOption()
  {
    this.walletOption=true;
  }

 // system_date =new Date();
 //system_date= moment(this.jstoday,"YYYY-MM-DD");
 myDto :  MyDto = new MyDto();

  currentDate : Date = new Date();

  deductAmt()
  {
     this.wallet.registeredEmail=this.userEmail;
     this.wallet.walletPin=this.userPin;
  this.wallet.walletAmount=this.amountToBePayed;

  // this.wallet.registeredEmail="jack123@gmail.com";
  // this.wallet.walletPin="1234";
  // this.wallet.walletAmount=500;

   this.custWalletservice.procesWalletPayment(this.wallet).subscribe(
    (data : any)=>
    {
     console.log(data);
    },
    (err)=>
    {
      console.log(err);

    }
  );
  this.router.navigate(['/home']);
  }
insertDetails()
{
  // this.wallet.registeredEmail=this.userEmail;
  // this.wallet.walletAmount=this.amountToBePayed;
  // this.wallet.walletPin=this.userPin;
  // this.wallet.registeredEmail="jack123@gmail.com";
  //  this.wallet.walletAmount=500;
  //  this.wallet.walletPin="1234";
  //   this.custWalletservice.procesWalletPayment(this.wallet);
 this.seatReservation();
  console.log("Reservation Id",this.reservation_id);


//  this.payment_id=  this.paymentInsertion(this.reservation_id);
//  console.log("Payment Id",this.payment_id);
//  this.transactionInsertion(this.reservation_id,this.payment_id)
//  this.UpdateBusJourney(this.reservation_id);
//  this.UpdateBusSeat(this.reservation_id);

 console.log("Completed...");

 //this.router.navigate(['/home']);
}


complex : ComplexCalss = new ComplexCalss();

  seatReservation()
  {
    console.log("Seat reservation")
    this.reservationDetails.departure_Date=this.departureDate;
    this.reservationDetails.driver_less="yes";
    this.reservationDetails.journey_Id=this.journey_id;
    this.reservationDetails.registered_email=this.userEmail;
    console.log(this.userEmail);
    this.reservationDetails.reservation_Date= this.currentDate ;
    this.reservationDetails.reservation_Time="08:02:20";
    // this.reservationDetails.seats_Booked=this.seates1.size;
    this.reservationDetails.seats_Booked=this.bookingsService.seatesSet.size;
    this.reservationDetails.unregistered_email=null;



    this.paymentDetails.reservationId=0;
    this.paymentDetails.registeredEmail=this.userEmail;
    this.paymentDetails.unregisteredEmail=null;
    this.paymentDetails.paymentDate=this.currentDate;
    this.paymentDetails.totalAmountPaid=this.amountToBePayed;


    this.transactionDetails.payment_id=0;
  this.transactionDetails.reservation_id=0;
  this.transactionDetails.registered_email=this.userEmail;
  this.transactionDetails.unregistered_email=null;
  this.transactionDetails.transaction_date=this.departureDate;


  this.complex.reservationDetails=this.reservationDetails;
  this.complex.paymentDetails=this.paymentDetails;
  this.complex.transactionDetails=this.transactionDetails;


  this.cancelReservationService.insertReservation(this.complex).subscribe(
      (data : any)=>
      {
             console.log(data);
      },
      (err)=>
      {
        console.log(err);
        return 0 ;
      }
    );






    // this.bookingsService.insertReservationDetails(this.reservationDetails).subscribe(
    //   (data : number)=>
    //   {
    //    alert("data"+data);
    //    console.log(data);

    //     this.reservation_id=data;
    //     return this.reservation_id;
    //     //this.paymentInsertion(this.reservation_id);
    //   },
    //   (err)=>
    //   {
    //     console.log(err);
    //     return 0 ;
    //   }
    // );
    // return 0;

    // console.log(this.reservation_id);

    }














paymentInsertion(rid : number) : number
{
  console.log("Completed...1")
  this.paymentDetails.reservationId=123;
  this.paymentDetails.registeredEmail=this.userEmail;
  this.paymentDetails.unregisteredEmail=null;
  this.paymentDetails.paymentDate=this.currentDate;
  this.paymentDetails.totalAmountPaid=this.amountToBePayed;

  this.bookingsService.insertPaymentDetails(this.paymentDetails).subscribe(
    (data : number)=>
    {

     this.payment_id=data;
     //this.transactionInsertion(rid,this.payment_id);
     return this.payment_id;
    },
    (err)=>
    {
      console.log(err);
    }
  );
  return 0;




}

transactionInsertion(rid : number,pid : number)
{
  console.log("Completed...2")
  // this.myDto2.jid=this.journey_id;
  // this.myDto2.rid=this.reservation_id;
 // this.myDto2.seates=this.bookingsService.seatesSet;
   console.log(this.myDto2);
  this.transactionDetails.payment_id=1234;
  this.transactionDetails.reservation_id=123;
  this.transactionDetails.registered_email=this.userEmail;
  this.transactionDetails.unregistered_email=null;
  this.transactionDetails.transaction_date=this.departureDate;

  console.log(this.myDto);
  this.bookingsService.insertTransactionDetails(this.transactionDetails);

}

UpdateBusJourney(rid : number)
{
  console.log("Completed...3")
  this.myDto.jid=this.journey_id;
  this.myDto.rid=rid;
  this.bookingsService.upDateBusJourneyDetails(this.myDto);

}

UpdateBusSeat(rid : number)
{
  console.log("Completed...4")
  this.bookingsService.updateBusSeatDetails(rid,this.journey_id);
  alert("Reservation completed..");
}

  logout()
  {
    console.log("logging out the user");
    this.router.navigate(['/home']);
  }
}

 export class MyDto
{
  rid : number;
  jid : number;
}

export class MyDto2
{
  rid : number;
  jid : number;
  seates : Set<string>;
}



export class ComplexCalss
{
  reservationDetails:ReservationDetails;
  paymentDetails : PaymentDetails ;
  transactionDetails : TransactionDetails ;
}

