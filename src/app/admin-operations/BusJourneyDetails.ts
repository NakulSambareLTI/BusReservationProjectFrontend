export class BusJoueneyDetails
{
    journeyID:number;
    bus_no:string;
    departure_time:string;
    arrival_time:string;
    source_loc:string;
    destination_loc:string;
    departure_date:Date;
    available_seates:number;

    constructor(
        journeyID:number,
        bus_no:string,
        departure_time:string,
        arrival_time:string,
        source_loc:string,
        destination_loc:string,
        departure_date:Date,
        available_seates:number
    )
    {

    }


}
