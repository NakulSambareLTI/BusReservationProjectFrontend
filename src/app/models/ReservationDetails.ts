export class ReservationDetails
{

 reservation_id : number;


	 registered_email : string;

//	@JoinColumn(name="REGISTERED_EMAIL")
//	@OneToOne(fetch=FetchType.EAGER)
//	private UserProfile registered_email;

 unregistered_email : string;

	 seats_Booked : number;

   journey_Id : number;

	 departure_Date : Date;

  reservation_Date : Date;

	 reservation_Time : string;

	 driver_less : string;

}
