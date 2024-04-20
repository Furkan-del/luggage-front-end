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
        <Th>Weight</Th>
        <Th isNumeric>PNR Code</Th>
        <Th isNumeric>Flight Date</Th>
        <Th isNumeric>Departure Location</Th>
        <Th isNumeric>Phone Number</Th>
      </Tr>
    </Thead>
    
    <Tbody>
      <Tr>
      <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>ab</Td>
        <Td isNumeric>b</Td>
        <Td isNumeric>d</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer> 
    )
}
export default Flights