import LuggageDto from "./LuggageDto";
import LuggageResponse from "./LuggageResponse";
import PassengerDto from "./PassengerDto";
import PassengerResponse from "./PassengerResponse";

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