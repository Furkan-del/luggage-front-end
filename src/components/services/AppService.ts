import http from '../http-commons';
import CreateFlightRequest from '../types/CreateFlightRequest';
import FlightResponse from '../types/FlightResponse';
import LuggageResponse from '../types/LuggageResponse';
import PassengerResponse from '../types/PassengerResponse';


//burası clienttır client backende istek atar.client eğer pathi ve requesti düzgün atarsa backendden cevap alacak bu pathler sayesinde.
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

const createFlight = (request:CreateFlightRequest) => {
    return http.post<FlightResponse> ("/flights",request)
} 

export default {getAllFlights,getAllPassengers,getFlightById,getAllLuggagesByPassengerAndFlight,createFlight}