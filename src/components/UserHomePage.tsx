import { Heading, Input, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import AppService from "./services/AppService";
import FlightResponse from "./types/FlightResponse";

 const UserHomePage = () => {
    const [flights, setFlights] = useState<FlightResponse[]>([]);

    useEffect(() => {
        retrieveFlights();
      }, []);
    
      const retrieveFlights = () => {
        AppService.getAllFlights()
          .then((response: any) => {
            setFlights(response.data);
            console.log(response.data);
          })
    
          .catch((e: Error) => {
            console.log(e);
          });
          

      };

    return (
    
        <>
      <Heading as="h1" size="lg" mb={4}>
        Flights- User Side
      </Heading>
     
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th >Flight Date</Th>
              <Th >Departure Location</Th>
              <Th >Arrival Location</Th>
              <Th>Choose Flight</Th>
            </Tr>
          </Thead>
          <Tbody>
            {flights
              .map((flight, index) => (
                <Tr key={index}>
                  <Td>{flight.departureDate}</Td>
                  <Td>{flight.departureLocation}</Td>
                  <Td>{flight.arrivalLocation}</Td>
                  <Td>

                    <Link style={{ color: 'blue' }} to={`/userside/flights/${flight.id}/passengers`}>
                      Choose 
                    </Link>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
    )
 };

 export default UserHomePage;