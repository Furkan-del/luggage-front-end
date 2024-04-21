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

const handleClick = (e:any) => {
    setState(e.target.value)
} 

    return( 
    <TableContainer>
  <Table variant='simple'>
  <Heading as="h1" size="lg">Luggages</Heading>
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
      {luggages.map((luggage) => (
        <Tr> 
        <Td>{luggage.id}</Td>
          <Td>{luggage.luggageName} </Td>
          <Td>{luggage.weight}</Td>
          <Td>{luggage.flight.departureLocationOfFlight}</Td>
          <Td>{luggage.passenger.name}</Td>
          <Td>{luggage.state}</Td>
          <Td><EditOptions onClick={handleClick} /></Td>
        </Tr>
       ))}
    </Tbody>
  </Table>
</TableContainer> 
    )
}
export default Luggages