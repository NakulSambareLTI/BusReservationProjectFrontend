import { Component, OnInit } from '@angular/core';
import { BusServiceService } from '../bus-service.service';
import { BusDetails } from './BusDetails';
import { BusJoueneyDetails } from './BusJourneyDetails';

@Component({
  selector: 'app-admin-operations',
  templateUrl: './admin-operations.component.html',
  styleUrls: ['./admin-operations.component.css']
})
export class AdminOperationsComponent implements OnInit {

  home:boolean=true;
  ur:boolean=false;
  ab:boolean=false;
  journeyNo:number;
  newSource:string;
  newDestination:string;

  busJourneyDetails:BusJoueneyDetails=new BusJoueneyDetails(0,"","","","","",new Date(),0);
  busDetails:BusDetails=new BusDetails("","",0,0,"",0);

  constructor(private service:BusServiceService) { }

  ngOnInit(): void {
  }

  toogleHome()
  {
    this.ur=false;
    this.ab=false;
    this.home=true;


  }
  toogleUr()
  {
    this.ur=true;
    this.ab=false;
    this.home=false;
  }
  toogleAdd()
  {

    this.ur=false;
    this.ab=true;
    this.home=false;
  }


  updateRoute()
  {
    this.service.updateRoute(this.journeyNo,this.newSource,this.newDestination).subscribe();
    alert("Bus route updated successfully");
  }

  addBus()
  {
    this.service.addBus(this.busDetails).subscribe();
    alert("Bus Added successfully");

  }

}

