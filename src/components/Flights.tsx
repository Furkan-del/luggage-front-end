import {
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer
  } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import FlightResponse from './types/FlightResponse'
import AppService from './services/AppService'
import { Button } from 'react-day-picker'
import { Link, useParams } from 'react-router-dom'
import EditOptions from './EditOptions'

  const Flights = () => {
    const [flights,setFlights]=useState<FlightResponse []>([])

    useEffect(()=>{
        retrieveFlights()
    },[])


    const retrieveFlights = () => {
       AppService.getAllFlights()
      .then((response: any) =>
        { 
          setFlights(response.data)
          console.log(response.data)
      })
      
      .catch( (e:Error) => {
      console.log(e)
    } )
  }

  
    return( 
  <TableContainer>
  <Table variant='simple'>
    
  <Heading as="h1" size="lg">Flights</Heading>
    <Thead>
      <Tr>
        <Th>Flight ID</Th>
        <Th isNumeric>PNR Code</Th>
        <Th isNumeric>Flight Date</Th>
        <Th isNumeric>Departure Location</Th>
        <Th isNumeric>Arrival Location</Th>
        <Th isNumeric>Baggage Name</Th>
        <Th>Flight Detail</Th>
      </Tr>
    </Thead>
    <Tbody>
      {flights.map((flight,index) => (
      <Tr key={index}>
      <Td> {flight.id} </Td>
      <Td> {flight.pnrCode} </Td>
        <Td> {flight.departureDate} </Td>
        <Td >{flight.departureLocation} </Td>
        <Td > {flight.arrivalLocation} </Td>
        <Td > {flight.luggages.map((luggageInfo) =>( luggageInfo.name))} </Td>
        <Td><Link to =  {`/flights/${flight.id}/passengers`}>See Passengers </Link> </Td>
      </Tr>
      ))}
      
    </Tbody>
  </Table>
</TableContainer> 

    )
}
export default Flights