import axios from 'axios'; 
import CreateAddressRequest from '../types/CreateAddressRequest';
import CreateFlightRequest from '../types/CreateFlightRequest';
import CreatePassengerRequest from '../types/CreatePassengerRequest';
import FlightResponse from '../types/FlightResponse';
import LoginRequest from '../types/LoginRequest';
import LuggageResponse from '../types/LuggageResponse';
import PassengerResponse from '../types/PassengerResponse';
import RegisterRequest from '../types/RegisterRequest';
import CreateLuggageRequest from '../types/CreateLuggageRequest';

const API_URL = 'http://localhost:8080'
const TOKEN = localStorage.getItem('token')!!
//burası clienttır client backende istek atar.client eğer pathi ve requesti düzgün atarsa backendden cevap alacak bu pathler sayesinde.
const getAllFlights = () => {
    const headers = {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${TOKEN}`
    };

    console.log(headers);

    return axios.get<FlightResponse []>(`${API_URL}/flights`, { headers });
};

const getFlightById = (flightId:any) => {
    const headers = {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${TOKEN}`
    };

    return axios.get<FlightResponse>(`${API_URL}/flights/${flightId}`,{ headers}) 
}
 const checkInPassenger = (flightId: any, passengerId: any) => {
    const headers = {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Authorization": `Bearer ${TOKEN}`
    };
    return axios.put<any>(`${API_URL}/flights/${flightId}/passengers/${passengerId}/check-in`, {}, { headers });
  };

const getAllPassengers = (flightId:any) => {
    const headers = {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${TOKEN}`
    };
    return axios.get<PassengerResponse []>(`${API_URL}/flights/${flightId}/passengers`,{headers}) 
}

const getPassengerById = (flightId:any,passengerId:any) => {
    return  axios.get<PassengerResponse []>(`${API_URL}/flights/${flightId}/passengers/${passengerId}`,{ headers: {
        "Access-Control-Allow-Headers":"Content-type,Authorization",
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }}) 
   }
   

const getAllLuggagesByPassengerAndFlight = (flightId:any,passengerId:any) =>{
    const headers = {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${TOKEN}`
    };
    return axios.get<LuggageResponse []>(`${API_URL}/flights/${flightId}/passengers/${passengerId}/luggages`,{ headers })
}

const createFlight = (request:CreateFlightRequest) => {
    const headers = {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${TOKEN}`
    };
    return axios.post<any> (`${API_URL}/flights`,request,{ headers })
} 

const updateLuggage = (flightId:any,passengerId:any,luggageId:any, state : any ) => {
    const headers = {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${TOKEN}`
    };
    return axios.put<any>(`/flights/${flightId}/passengers/${passengerId}/luggages/${luggageId}`,state,{ headers })
}

const findByPnrCode = (pnrCode:string) => {
    const headers = {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${TOKEN}`
    };
    return axios.get<any>(`${API_URL}/flights/pnr-code?pnrCode=${pnrCode}`,{ headers })
}

const addPassenger = (createPassengerRequest:CreatePassengerRequest,flightId:any) => {
    const headers = {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${TOKEN}`
    };
    console.log(`Bearer ${TOKEN}`);
    
    return axios.post<any>(`${API_URL}/flights/${flightId}/passengers`,createPassengerRequest,{headers})
}

const registerUser = (request:RegisterRequest) => {
      return axios.post<any>(`${API_URL}/auth/register`,request,{ headers: {
        "Access-Control-Allow-Headers":"Content-type,Authorization",
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }})

}

const getPassengerByPassengerIdAndFlightIdAndUserId = (flightId:any,passengerId:any,userId:any) => {

    const headers = {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${TOKEN}`
    };

    return axios.get<any>(`${API_URL}/flights/${flightId}/passengers/all-passengers/${passengerId}?userId=${userId}`,{ headers })

}

const logInUser = (request:LoginRequest) => {
    return axios.post<any>(`${API_URL}/auth/login`,request,{ headers: {
        "Access-Control-Allow-Headers":"Content-type,Authorization",
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }})
}

const createAddress = (request:CreateAddressRequest,passengerId:any,flightId:any) => {
    const headers = {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${TOKEN}`
    };
    return axios.post<any>(`${API_URL}/flights/${flightId}/passengers/${passengerId}/addresses`,request,{ headers })
}


const getAddresses = (passengerId:any,addressId:any) => {
    const headers = {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${TOKEN}`
    };
    return axios.get<any>(`/passengers/${passengerId}/addresses/${addressId}`,{ headers })
}

const getUserInfo = (userId:any) => {
    
    const headers = {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${TOKEN}`
    };

return axios.get<any>(`${API_URL}/auth/${userId}`,{ headers })
}

const updateUserInfo = (updateUserRequest:any) => {

    const headers = {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${TOKEN}`
    };
    return axios.put<any>(`${API_URL}/auth/change-profile`,updateUserRequest,{ headers })
}

const createLuggage = (flightId:any,passengerId:any,luggageRequest:CreateLuggageRequest) => {
    const headers = {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${TOKEN}`
    };
    return axios.post<any>(`${API_URL}/flights/${flightId}/passengers/${passengerId}/luggages`,luggageRequest,{ headers })
}


const getUser = () => {
    const headers = {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${TOKEN}`
    };
return axios.get<any>(`${API_URL}/auth/my-profile`,{ headers })
}
export default {getAllFlights,getAllPassengers,getFlightById,
    getAllLuggagesByPassengerAndFlight,createFlight,updateLuggage,
    findByPnrCode,
    addPassenger,
    registerUser,
    logInUser,
    createAddress,
    getAddresses,
    getPassengerById,
    getUserInfo,
    updateUserInfo,
    getUser,
    createLuggage,
    checkInPassenger,
    getPassengerByPassengerIdAndFlightIdAndUserId
}