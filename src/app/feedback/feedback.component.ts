import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  userEmail : string;
  constructor() { this.userEmail = sessionStorage.getItem('userKey');
  console.log("User email",this.userEmail);}

  ngOnInit(): void {
  }

}
