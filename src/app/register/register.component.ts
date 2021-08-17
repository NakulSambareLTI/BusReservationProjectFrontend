import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusServiceService } from '../bus-service.service';
import { UserProfile } from './UserProfile';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  //userName:string="";

  userProfile : UserProfile=new UserProfile("","","","","",new Date());
  constructor(private service:BusServiceService,private router  : Router ) { }

  ngOnInit(): void {
    this.registerForm=new FormGroup({
      firstname:new FormControl(''),
      lastname:new FormControl(''),
      email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      pwd:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      cpwd:new FormControl('',[Validators.required,Validators.minLength(8)]),
      contactno:new FormControl('')
    })

      }

      registerUser(){
        console.log('registerUser');
        console.log(this.userProfile.userName);
        console.log(this.userProfile.registeredEmail);
        console.log(this.userProfile.phoneNumber);
        console.log(this.userProfile.password);
        console.log(this.userProfile.gender);
        console.log(this.userProfile.dateOfBirth);
        this.service.registerUser(this.userProfile).subscribe();
        this.router.navigate(['/login']);
      }
}

