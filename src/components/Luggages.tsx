import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Heading
  } from '@chakra-ui/react' 
import EditOptions from './EditOptions'
import { useEffect, useState } from 'react'
import LuggageResponse from './types/LuggageResponse';
import AppService from './services/AppService';
import { useParams } from 'react-router-dom';

import { Button } from '@chakra-ui/react';
import UpdateLuggageRequest from './types/UpdateLuggage';
 
  const Luggages = () => {

    
    const {flightId,passengerId}  =  useParams();
    const [luggages, setLuggages] = useState<LuggageResponse[]>([]);
    const [state,setState] = useState<string>("")
    
   

    useEffect(() => {
      if(flightId && passengerId)
      retrieveLuggagesByPassengerAndFlight(flightId,passengerId);
    },[flightId,passengerId])

    const retrieveLuggagesByPassengerAndFlight = (flightId:any,passengerId:any) => {

      AppService.getAllLuggagesByPassengerAndFlight(flightId,passengerId)
      .then((response : any) =>  {
        setLuggages(response.data)
        console.log(response.data)
       })
      .catch( (e:Error) => (
        console.log(e)
      ))

    }
    const handleEditClick = (luggageId:any, state:string) => {
      AppService.updateLuggage(flightId, passengerId, luggageId, state)
        .then((response: any) => {
          let luggagesTemp = luggages.filter(luggage => luggage.id !==  response.data.id);
          luggagesTemp.push(response.data);
          setLuggages(luggagesTemp);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    };




    return( 
    <TableContainer>
     <Heading as="h1" size="lg">Luggages</Heading>
  <Table variant='simple'>
  
    <Thead>
      <Tr>
        <Th>Luggage ID</Th>
        <Th>Luggage Name</Th>
        <Th>Weight</Th>
        <Th >Flight Departure Name</Th>
        <Th >Passenger Name</Th>
        <Th >State</Th>
        <Th >Edit State</Th>
      </Tr>
    </Thead>
    <Tbody>
      {luggages.map((luggage,index) => (
        <Tr key={index}> 
        <Td>{luggage.id}</Td>
          <Td>{luggage.luggageName} </Td>
          <Td>{luggage.weight}</Td>
          <Td>{luggage.flight.departureLocationOfFlight}</Td>
          <Td>{luggage.passenger.name}</Td>
          <Td>{luggage.state}</Td>
          <Td>
          <select value={state}
                  onChange={(e) => setState(e.target.value)} >
                    <option value="WAITING">WAITING</option>
                    <option value="IN_WAY">IN_WAY</option>
                    <option value="IN_AIRPORT">IN_AIRPORT</option>
                    <option value="IN_CHECK_IN">IN_CHECK_IN</option>
                    <option value="IN_FLIGHT">IN_FLIGHT</option>
                  </select>
                  <Button colorScheme='orange' value={luggage.state} onClick={() => handleEditClick(luggage.id,state)}>
                    Edit
                  </Button>
         </Td>
        </Tr>
       ))}
    </Tbody>
  </Table>
</TableContainer> 
    )
}
export default Luggages