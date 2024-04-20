import FlightDto from "./FlightDto";
import PassengerDto from "./PassengerDto";

export default interface LuggageResponse{
    id:number,
    weight:number,
    state:string,
    luggageName:string,
    passenger: PassengerDto,
    flight:FlightDto
}