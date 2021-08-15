import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CancelReservationService {
  baseURL:string='http://localhost:8085/bus/'
  constructor(private myhttp: HttpClient) { }
  cancelReservation(email:any, jID:number, rID:number):Observable<any>{
    console.log("Cancel Reservation Working");
    console.log(this.baseURL +"cancelReservation/"+email+"/"+jID+"/"+rID);
    return this.myhttp.get(this.baseURL +"cancelReservation/"+email+"/"+jID+"/"+rID);
  }
}
