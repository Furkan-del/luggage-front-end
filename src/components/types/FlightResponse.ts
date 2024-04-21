import LuggageDto from "./LuggageDto";
import PassengerDto from "./PassengerDto";

export default interface FlightResponse{
    id?:any | null,
    pnrCode:string,
    departureDate:string,
    departureLocation:string,
    arrivalLocation:string,
    returnDate:string,
    passengerType:string,
    passengers:PassengerDto [],
    luggages:LuggageDto []
}