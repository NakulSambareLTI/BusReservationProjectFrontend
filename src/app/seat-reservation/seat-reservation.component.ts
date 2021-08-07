import { Component, OnInit } from '@angular/core';
import { Seat } from '../models/seat.model';

@Component({
  selector: 'app-seat-reservation',
  templateUrl: './seat-reservation.component.html',
  styleUrls: ['./seat-reservation.component.css']
})
export class SeatReservationComponent implements OnInit {
  showSeatList:Seat[]=[];
  total=0;
  fillupSeat=[];
  alert=false;
  
  constructor() { }

  ngOnInit(): void {
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
     let seats=[];
   seats= this.showSeatList.map(iteam=>{
     return iteam.seatNo
   });
   }  
}
