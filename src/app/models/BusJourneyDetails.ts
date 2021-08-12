export class BusJourneyDetails
{

   journeyID : number;

//	 @ManyToOne
//     @JoinColumn(name="BUS_NO")

   bus_no : string;
    departure_time : string;
    arrival_time : string;
     source_loc : string;
     destination_loc :string;
     departure_date : Date;
     available_seates : number;


}
