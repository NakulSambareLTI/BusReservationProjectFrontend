import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusJourneyDetails } from './models/BusJourneyDetails';
import { BusSeatDetails } from './seat-reservation/BusSeatDetails';
import { BusDetails } from './models/BusDetails';
import { ReservationDetails } from './models/ReservationDetails';
import { User } from './models/User';
import { PaymentDetails } from './models/PaymentDetails';
import { TransactionDetails } from './models/TransactionDetails';
import { MyDto } from './payment/payment.component';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  baseURL : string = 'http://localhost:8085/busDetails/';
  baseURL2 : string ='http://localhost:8085/reserv/';
  constructor(private myHttp : HttpClient) { }

  getAllBusJourneyDetails() : Observable<BusJourneyDetails[]>
  {
      return this.myHttp.get<BusJourneyDetails[]>(this.baseURL+"getAllBusJourneyDetails/");
  }

  getCostPerSeat( busno: string ) {
           return this.myHttp.get(this.baseURL+"getCostPerSeat/"+busno);
  }

  getTotalNoOfSeates(busno: string ) :Observable<any>
  {
    return this.myHttp.get<any>(this.baseURL+"getTotalNoOfSeates/"+busno);
  }

  getBusSeatDetailsByJourneyId(jid : number) : Observable<BusSeatDetails[]>
  {
    return this.myHttp.get<BusSeatDetails[]>(this.baseURL+"getBusSeatesDetails/"+jid);
  }

  getBusDetails(busno: string) : Observable<any>
  {
     return this.myHttp.get<any>(this.baseURL+"getBusDetails/"+busno);
  }

  getUsersReservationDetails(email : string) : Observable<ReservationDetails[]>
  {

    return this.myHttp.get<ReservationDetails[]>(this.baseURL+"getReservationDetails/"+email);


  }


  getBusJourneyDetails(jid : number) : Observable<BusJourneyDetails>
  {
      return this.myHttp.get<BusJourneyDetails>(this.baseURL+"getBusJourneyDetails/"+jid);
  }

  updateBusSeatDetails(rid : number ,jid : number)
  {
          return this.myHttp.get(this.baseURL2+"updateBusSeatesDetailsListSeat/"+rid+"/"+jid+"/"+this.seatesSet);
  }

  upDateBusJourneyDetails(myDto : MyDto)
  {
    return this.myHttp.post(this.baseURL2+"seatCountDecrease/",myDto);
  }

  insertReservationDetails(reservationDetails : ReservationDetails) : Observable<number>
  {
       return this.myHttp.post<number>(this.baseURL2+"addReserve/",reservationDetails);
  }

  insertPaymentDetails( paymentDetails : PaymentDetails) : Observable<number>
  {
    return this.myHttp.post<number>(this.baseURL2+"addPayment/",paymentDetails);
  }

  insertTransactionDetails(transactionDetails : TransactionDetails)
  {
    return this.myHttp.post(this.baseURL2+"addTransaction/",transactionDetails);
  }



  // getBusSeatDetailsByJourneyId(jid : number)
  // {
  //   return this.myHttp.get(this.baseURL+"getBusSeatesDetails/"+jid);
  // }
   seatesSet  = new Set;
   myUser : User= new User();

}

