import axios from 'axios';
import AddPassengerResponse from '../types/AddPassengerResponse';
import CreateAddressRequest from '../types/CreateAddressRequest';
import CreateFlightRequest from '../types/CreateFlightRequest';
import CreatePassengerRequest from '../types/CreatePassengerRequest';
import FlightResponse from '../types/FlightResponse';
import LoginRequest from '../types/LoginRequest';
import LuggageResponse from '../types/LuggageResponse';
import PassengerResponse from '../types/PassengerResponse';
import RegisterRequest from '../types/RegisterRequest';

const API_URL = 'http://localhost:8080'

//burası clienttır client backende istek atar.client eğer pathi ve requesti düzgün atarsa backendden cevap alacak bu pathler sayesinde.
const getAllFlights = () => {
    return axios.get<FlightResponse []>(`${API_URL}/flights`, { headers: {
        "Access-Control-Allow-Headers":"Content-type,Authorization",
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }})
}

const getFlightById = (flightId:any) => {
    return axios.get<FlightResponse>(`${API_URL}/flights/${flightId}`,{ headers: {
        "Access-Control-Allow-Headers":"Content-type,Authorization",
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }}) 
}

const getAllPassengers = (flightId:any) => {
    return axios.get<PassengerResponse []>(`${API_URL}/flights/${flightId}/passengers`,{ headers: {
        "Access-Control-Allow-Headers":"Content-type,Authorization",
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }}) 
}

const getPassengerById = (flightId:any,passengerId:any) => {
    return  axios.get<PassengerResponse []>(`/flights/${flightId}/passengers/${passengerId}`,{ headers: {
        "Access-Control-Allow-Headers":"Content-type,Authorization",
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }}) 
   }
   

const getAllLuggagesByPassengerAndFlight = (flightId:any,passengerId:any) =>{
    return axios.get<LuggageResponse []>(`/flights/${flightId}/passengers/${passengerId}/luggages`)
}

const createFlight = (request:CreateFlightRequest) => {
    return axios.post<any> (`${API_URL}/flights`,request)
} 

const updateLuggage = (flightId:any,passengerId:any,luggageId:any, state : any ) => {
    return axios.put<any>(`/flights/${flightId}/passengers/${passengerId}/luggages/${luggageId}`,state)
}

const findByPnrCode = (pnrCode:string) => {
    return axios.get<any>(`/flights/pnr-code?pnrCode=${pnrCode}`)
}

const addPassenger = (createPassengerRequest:CreatePassengerRequest,flightId:any) => {
    return axios.post<AddPassengerResponse>(`/flights/${flightId}/passengers`,createPassengerRequest)
}

const registerUser = (request:RegisterRequest) => {
      return axios.post<any>(`${API_URL}/auth/register`,request,{ headers: {
        "Access-Control-Allow-Headers":"Content-type,Authorization",
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }})

}

const logInUser = (request:LoginRequest) => {
    return axios.post<any>(`${API_URL}/auth/login`,request,{ headers: {
        "Access-Control-Allow-Headers":"Content-type,Authorization",
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }})
}

const createAddress = (request:CreateAddressRequest,passengerId:any) => {
    return axios.post<any>(`/passengers/${passengerId}/addresses`,request)
}


const getAddresses = (passengerId:any,addressId:any) => {
    return axios.get<any>(`/passengers/${passengerId}/addresses/${addressId}`)
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