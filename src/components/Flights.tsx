import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Input,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import FlightResponse from './types/FlightResponse';
import AppService from './services/AppService';
import { Link, useParams } from 'react-router-dom';

const Flights = () => {
  const [flights, setFlights] = useState<FlightResponse[]>([]);
  const [search, setSearch] = useState<string>('');

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
        Flights
      </Heading>
      <Input
        placeholder="PNR Code"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        mb={4}
      />
      <TableContainer>
        <Table variant="simple">
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
            {flights
              .filter((flight) =>
                search
                  ? flight.id.toLowerCase().includes(search.toLowerCase()) ||
                    flight.pnrCode.toLowerCase().includes(search.toLowerCase())
                  : true
              )
              .map((flight, index) => (
                <Tr key={index}>
                  <Td>{flight.id}</Td>
                  <Td>{flight.pnrCode}</Td>
                  <Td>{flight.departureDate}</Td>
                  <Td>{flight.departureLocation}</Td>
                  <Td>{flight.arrivalLocation}</Td>
                  <Td>
                    {flight?.luggages?.map((luggageInfo) => luggageInfo.name)}
                  </Td>
                  <Td>
                    <Link to={`/flights/${flight.id}/passengers`}>
                      See Passengers
                    </Link>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Flights;