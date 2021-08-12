import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }

  oldPassword : String ="";
  newPassword : String ="";
  email : String ="";

  passwordMatch : boolean = true;
  check()
  {
    if(this.oldPassword == this.newPassword)
    {
      this.passwordMatch=false;
    }else{
      this.passwordMatch=true;
    }
  }
  ngOnInit(): void {
  }

}
