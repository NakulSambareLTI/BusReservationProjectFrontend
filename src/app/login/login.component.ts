import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingsService } from '../bookings.service';
import { BusServiceService } from '../bus-service.service';
import { User } from '../models/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  registeredEmailId:string;
  password:string;
  myUser : User = new User();

  constructor(private service:BusServiceService,private router  : Router,private bookingsService :BookingsService) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$")]),
      pwd:new FormControl('',[Validators.required,Validators.minLength(8)])
    })

      }


      checkValidLogin(){
        let result=this.service.checkLogin(this.registeredEmailId,this.password);
        result.subscribe(data=>{

          if (data){
            alert("Login detail matched");
            this.myUser.username=this.registeredEmailId;
            this.myUser.isLogeedIn=true;
            console.log(this.myUser.username);
            // sessionStorage.setItem("userKey",JSON.stringify( this.myUser));
            // this.bookingsService.myUser.username=this.registeredEmailId;
            sessionStorage.setItem('userKey',String(this.myUser.username));
        console.log(this.myUser.username);
            this.router.navigate(['/home']);
          }
          else{
            alert("Invalid Credentials");
          }
        });

      }

}
