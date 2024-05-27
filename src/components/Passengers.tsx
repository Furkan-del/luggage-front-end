import {
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react' 
import { useEffect, useState } from 'react'
import PassengerResponse from './types/PassengerResponse'
import AppService from './services/AppService';
import { Link, useParams } from 'react-router-dom';


  const Passenger = () => {
    // useParams urlden id gibi değişken değerlerini çekmemizi sağlar bu sayede backende istek atarız o değerlerle.
    const { flightId }= useParams();
  const [passengers,setPassengers] = useState<PassengerResponse []> ([]);
  
  // uygulamanın renderlanmadan önce bu queryi çalıştırır lakin burada şu önemli eğer bir değer paslanıyorsa içine.
  // o değer değiştiğinde çalışır aynıysa bidaha query atmaz.
    useEffect(() => {
      if(flightId)
    retrievePassengers(flightId);
    },[flightId])

    const retrievePassengers = (flightId:any) => {
      AppService.getAllPassengers(flightId)
      .then((response:any) => {
        setPassengers(response.data)
        console.log(response.data)
      })
      .catch( (e:Error) => {
        console.log(e)
      })

      
    }

    return( 
    <TableContainer>
      <Heading as="h1" size="lg">Passenger</Heading>
  <Table variant='simple'>
  

    <Thead>
      <Tr>
        <Th>Passenger ID</Th>
        <Th>Name</Th>
        <Th >Email</Th>
        <Th >Phone Number</Th>
        <Th >Luggage Detail</Th>
      </Tr>
    </Thead>
    <Tbody>
      {passengers.map((passenger) => (
      <Tr>
        <Td>{passenger.id}</Td>
        <Td> {passenger.passengerName} </Td>
        <Td > {passenger.email} </Td>
        <Td > {passenger.phoneNumber} </Td>
        <Td> <Link to = {`/backoffice/flights/${flightId}/passengers/${passenger.id}/luggages`}> See Luggages </Link> </Td>
      </Tr>
      ))}
    </Tbody>
  </Table>
</TableContainer> 
    )
}
export default Passenger