import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusServiceService } from '../bus-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLoginForm:FormGroup;
  registeredAdminEmailId:string;
  adminPassword:string;

  constructor(private service:BusServiceService,private router  : Router) { }

  ngOnInit(): void {
    this.adminLoginForm=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$")]),
      pwd:new FormControl('',[Validators.required,Validators.minLength(8)])
    })
  }

  checkValidAdminLogin(){
    let result=this.service.checkAdminLogin(this.registeredAdminEmailId,this.adminPassword);
    result.subscribe(data=>{

      if (data){
        alert("Login detail matched");
        this.router.navigate(['/admin-operations']);
      }
      else{
        alert("Invalid Credentials");
      }
    });

  }

}

