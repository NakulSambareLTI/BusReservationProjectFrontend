import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusDetails } from './admin-operations/BusDetails';
import { BusJoueneyDetails } from './admin-operations/BusJourneyDetails';
import { UserProfile } from './register/UserProfile';

@Injectable({
  providedIn: 'root'
})
export class BusServiceService {

  BaseUrl: string="http://localhost:8085/user/";
  AdminUrl:string="http://localhost:8085/admin/";
  BusUrl:string="http://localhost:8085/bus/";
  BusDetailsUrl:string="http://localhost:8085/busDetails/";
  //http://localhost:8086/bus/changeRoute?journeyId=12345&source=Mumbai&destination=Kolkata
  //http://localhost:8086/bus/addBus
  constructor(private http:HttpClient) {   }

  checkLogin(email: string,password:string){
    return this.http.get(this.BaseUrl+"/login?email="+email+"&password="+password);
  }
  updateRoute(journeyId:number,source:string,destination:string)
  {

    return this.http.get(this.BusUrl+"/changeRoute?journeyId="+journeyId+"&source="+source+"&destination="+destination);
  }
  addBus(busDetails:BusDetails)
  {
    return this.http.post(this.BusDetailsUrl+"addBus",busDetails);
  }

  checkAdminLogin(adminEmail: string,adminPassword:string){
    return this.http.get(this.AdminUrl+"/checkAdminLogin?email="+adminEmail+"&password="+adminPassword);
  }

   registerUser(user:UserProfile):Observable<any>
  {

    console.log("Inside service");
    // console.log('registerUser');
    // console.log(user.userName);
    // console.log(user.registeredEmail);
    // console.log(user.phoneNumber);
    // console.log(user.password);
    // console.log(user.gender);
    // console.log(user.dateOfBirth);
    console.log(user);
    // return this.http.post(this.BaseUrl,user);


    return this.http.post<any>(this.BaseUrl+"register",user);
  }
}
// deleteEmployeeService(empNo : number) : Observable<any> {//eno is copied here to empNo

//   return this.myHttp.delete<any>(this.baseURL+"deleteEmp/"+empNo);

// }

