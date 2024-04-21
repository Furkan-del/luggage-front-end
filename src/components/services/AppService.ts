import http from '../http-commons';
import FlightResponse from '../types/FlightResponse';
import LuggageResponse from '../types/LuggageResponse';
import PassengerResponse from '../types/PassengerResponse';

const getAllFlights = () => {
    return http.get<FlightResponse []>("/flights")
}

const getFlightById = (flightId:any) => {
return http.get<FlightResponse>(`/flights/${flightId}`) 
}

const getAllPassengers = (flightId:any) => {
 return  http.get<PassengerResponse []>(`/flights/${flightId}/passengers`) 
}

const getAllLuggagesByPassengerAndFlight = (flightId:any,passengerId:any) =>{
    return http.get<LuggageResponse []>(`/flights/${flightId}/passengers/${passengerId}/luggages`)
}



export default {getAllFlights,getAllPassengers,getFlightById,getAllLuggagesByPassengerAndFlight}