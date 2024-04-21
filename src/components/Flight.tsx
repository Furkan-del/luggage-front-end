import { useState } from "react";
import FlightResponse from "./types/FlightResponse";
import AppService from "./services/AppService";
import { useParams } from "react-router-dom";

const Flight = () =>{
    const [currentFlight,setCurrentFlight] = useState<FlightResponse> ();

    const {flightId} = useParams()
    console.log(flightId)

    
    const getFlight = (flightId: any) => {
        AppService.getFlightById(flightId)
        .then((response:any) => {
          
          setCurrentFlight(response.data)
        })
        .catch( (e: Error) => {
            console.log(e)
        })
      }
      return <p>Helllo</p>
}

export default Flight