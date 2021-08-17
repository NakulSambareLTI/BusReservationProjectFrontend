import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  userEmail : string;
  constructor() { this.userEmail = sessionStorage.getItem('userKey');
  console.log("User email",this.userEmail);}

  ngOnInit(): void {
  }

}
