import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BusServiceService } from '../bus-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  registeredEmailId:string;
  password:string;
  constructor(private service:BusServiceService) { }

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
          }
          else{
            alert("Invalid Credentials");
          }
        });

      }

}
