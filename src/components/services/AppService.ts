import http from '../http-commons';
import AddPassengerResponse from '../types/AddPassengerResponse';
import CreateAddressRequest from '../types/CreateAddressRequest';
import CreateFlightRequest from '../types/CreateFlightRequest';
import CreatePassengerRequest from '../types/CreatePassengerRequest';
import FlightResponse from '../types/FlightResponse';
import LoginRequest from '../types/LoginRequest';
import LuggageResponse from '../types/LuggageResponse';
import PassengerResponse from '../types/PassengerResponse';
import RegisterRequest from '../types/RegisterRequest';

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

const getPassengerById = (flightId:any,passengerId:any) => {
    return  http.get<PassengerResponse []>(`/flights/${flightId}/passengers/${passengerId}`) 
   }
   

const getAllLuggagesByPassengerAndFlight = (flightId:any,passengerId:any) =>{
    return http.get<LuggageResponse []>(`/flights/${flightId}/passengers/${passengerId}/luggages`)
}

const createFlight = (request:CreateFlightRequest) => {
    return http.post<any> ("/flights",request)
} 

const updateLuggage = (flightId:any,passengerId:any,luggageId:any, state : any ) => {
    return http.put<any>(`/flights/${flightId}/passengers/${passengerId}/luggages/${luggageId}`,state)
}

const findByPnrCode = (pnrCode:string) => {
    return http.get<any>(`/flights/pnr-code?pnrCode=${pnrCode}`)
}

const addPassenger = (createPassengerRequest:CreatePassengerRequest,flightId:any) => {
    return http.post<AddPassengerResponse>(`/flights/${flightId}/passengers`,createPassengerRequest)
}

const registerUser = (request:RegisterRequest) => {
      return http.post<any>('/auth/register',request)

}

const logInUser = (request:LoginRequest) => {
    return http.post<any>('/auth/login',request)
}

const createAddress = (request:CreateAddressRequest,passengerId:any) => {
    return http.post<any>(`/passengers/${passengerId}/addresses`,request)
}


const getAddresses = (passengerId:any,addressId:any) => {
    return http.get<any>(`/passengers/${passengerId}/addresses/${addressId}`)
}

export default {getAllFlights,getAllPassengers,getFlightById,
    getAllLuggagesByPassengerAndFlight,createFlight,updateLuggage,
    findByPnrCode,
    addPassenger,
    registerUser,
    logInUser,
    createAddress,
    getAddresses,
    getPassengerById
}