import FlightDto from "./FlightDto";
import LuggageDto from "./LuggageDto";

export default interface PassengerResponse{
    id?:any | null,
    passengerName:string,
    email:string,
    phoneNumber:string,
    luggages:LuggageDto[],
    isCheckedIn:boolean,
    flight:FlightDto[]
}