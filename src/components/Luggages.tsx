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
import axios from 'axios'
import { useEffect, useState } from 'react'

interface Luggage {
  luggageId: number;
  weight: number;
  flightId: number;
  customerId: number;
  state:string;
}
 
  const Luggages = () => {
    const [flights, setFlights] = useState<Luggage[]>([]);
    return( 
    <TableContainer>
  <Table variant='simple'>
  <Heading as="h1" size="lg">Luggages</Heading>
    <Thead>
      <Tr>
        <Th>Luggage ID</Th>
        <Th>Weight</Th>
        <Th isNumeric>Flight ID</Th>
        <Th isNumeric>Customer ID</Th>
        <Th isNumeric>State</Th>
        <Th isNumeric>Edit State</Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        flights.map((flight,index)=> 
        <Tr key={index}> 
        <Td>{flight.luggageId}</Td>
          <Td>{flight.weight} </Td>
          <Td>{flight.flightId}</Td>
          <Td>{flight.customerId}</Td>
          <Td>{flight.state}</Td>
          <Td><EditOptions/></Td>
        </Tr>)
      }
      
      
    </Tbody>
  </Table>
</TableContainer> 
    )
}
export default Luggages