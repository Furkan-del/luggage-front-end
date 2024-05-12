import { Stack,Heading, Button ,Select } from '@chakra-ui/react'
import 'react-day-picker/dist/style.css';
import CalendarComponent from './CalendarComponent';

import { useState } from 'react';
import CreateFlightRequest from './types/CreateFlightRequest';
import AppService from './services/AppService';



const CreateFlight = () => {
    const [firstDate, setFirstDate] = useState<Date>();
    const [secondDate, setSecondDate] = useState<Date>();

    const initialCreateFlightRequest = {
        pnrCode: "",
        departureDate: new Date(),
        departureLocation:"",
        arrivalLocation:"",
        passengerType:"",
        returnDate: new Date(),
        passengers: [],
        luggages: []
        
    }
    const [flight,setFlight]=useState<CreateFlightRequest>(initialCreateFlightRequest)
    const [submitted, setSubmitted] = useState<boolean>(false);


      const saveTutorial = () => {
            var flightData = {
                pnrCode : flight.pnrCode,
                departureLocation : flight.departureLocation,
                arrivalLocation : flight.arrivalLocation,
                passengerType : flight.passengerType,
                departureDate: flight.departureDate,
                returnDate : flight.returnDate,
                passengers:[],
                luggages:[]
            }

        const formattedFlightData = {
            ...flightData,
            departureDate: new Date(flightData.departureDate),
            returnDate: new Date(flightData.returnDate)
        };

        AppService.createFlight(formattedFlightData)
        .then((response : any) => {
            setFlight({
                pnrCode : response.pnrCode,
                departureLocation : response.departureLocation,
                arrivalLocation : response.arrivalLocation,
                passengerType : response.passengerType,
                departureDate:response.departureDate,
                returnDate : response.returnDate,
                passengers:[],
                luggages:[]
            });
            setSubmitted(true);
            console.log(response.data)
        }
        ).catch( (e : Error) => {
    console.log(e)
})            
    }

    const  addNewFlight = () => {
        setFlight(initialCreateFlightRequest);
        setSubmitted(false);
    }

    return (
        <>
        {submitted ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h4>You submitted successfully!</h4>
                <Button onClick={addNewFlight} >Add New Flight</Button>
            </div>
        ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <input type="text" value={flight.arrivalLocation} onChange={(e) => setFlight({ ...flight, arrivalLocation: e.target.value })} placeholder='From' style={{ marginBottom: '10px' }} />
    <input type="text" value={flight.departureLocation} onChange={(e) => setFlight({ ...flight, departureLocation: e.target.value })} placeholder='To' style={{ marginBottom: '10px' }} />
    <input type="text" value={flight.passengerType} onChange={(e) => setFlight({ ...flight, passengerType: e.target.value })} placeholder='Passenger Type' style={{ marginBottom: '10px' }} />
    <CalendarComponent date = {firstDate} setDate = {setFirstDate} label = "Departure Date Display" />
    <CalendarComponent date = {secondDate} setDate = {setSecondDate} label = "Arrival Date Display"/>
    <input type="text" value={flight.pnrCode} onChange={(e) => setFlight({ ...flight, pnrCode: e.target.value })} placeholder='merhaba' style={{ marginBottom: '10px' }} />
    <button onClick={saveTutorial} style={{ backgroundColor: 'orange', color: 'white', padding: '10px', border: 'none', cursor: 'pointer', marginTop: '10px' }}>SEND</button>
</div>

        )}
    </>
    )
}

export default CreateFlight