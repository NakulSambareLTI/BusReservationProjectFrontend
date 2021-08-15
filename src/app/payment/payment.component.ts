import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingsService } from '../bookings.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  walletOption : boolean=false;
  temp : any;
  temp1 : any;
  temp2 : any;
  amountToBePayed : number;
  cardname:String="";
  cardnumber:String="";
  expmonth:String="";
  expyear:String="";
  cvv:String="";
  journey_id : number;
  seates1 = new Set();
  constructor(private router  : Router,private bookingsService :BookingsService) {
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


  }

  ngOnInit(): void {

  }

  payWithCard()
  {

  }

  selectWalletPaymentOption()
  {
    this.walletOption=true;
  }
}
