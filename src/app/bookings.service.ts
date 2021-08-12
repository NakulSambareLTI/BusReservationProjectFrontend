import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusJourneyDetails } from './models/BusJourneyDetails';
import { BusSeatDetails } from './seat-reservation/BusSeatDetails';
import { BusDetails } from './models/BusDetails';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  baseURL : string = 'http://localhost:8085/busDetails/';
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
  // getBusSeatDetailsByJourneyId(jid : number)
  // {
  //   return this.myHttp.get(this.baseURL+"getBusSeatesDetails/"+jid);
  // }

}
