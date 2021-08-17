import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CancelReservationService } from '../cancel-reservation.service';

@Component({
  selector: 'app-cancel-reservation',
  templateUrl: './cancel-reservation.component.html',
  styleUrls: ['./cancel-reservation.component.css']
})
export class CancelReservationComponent implements OnInit {
  email:any;
  rID:number;
  jID:number;
  errorMessage: any;
  response: any;
  userEmail : string;
  loading: boolean = false;
  constructor(private router  : Router,private cancelReservationService :CancelReservationService) {this.userEmail = sessionStorage.getItem('userKey');
  console.log("User email",this.userEmail);}

  ngOnInit(): void {
  }
  cancelreservationcomponent(){
    console.log(this.email,this.rID,this.jID);
    this.cancelReservationService.cancelReservation(this.email,this.jID,this.rID).subscribe(
      (response) => {                           //next() callback
        console.log('response received')
        console.log(response)
        this.response = response;

      },
      (error) => {                              //error() callback
        console.error('Request failed with error')
        this.errorMessage = error;
        this.loading = false;
      },
      () => {                                   //complete() callback
        console.log('Request completed')      //This is actually not needed
        this.loading = false;
      })


  }
  logout()
  {
    console.log("logging out the user");
    this.router.navigate(['/home']);
  }

}

