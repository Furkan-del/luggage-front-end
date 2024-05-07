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
  Button,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import FlightResponse from './types/FlightResponse';
import AppService from './services/AppService';
import { Link, useParams } from 'react-router-dom';

const Flights = () => {
  const [flights, setFlights] = useState<FlightResponse[]>([]);
  const [searchTitle, setsearchTitle] = useState<string>('');

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

  const findByPnrCode = (searchTitle:string) => {
      setsearchTitle(searchTitle)
      if( searchTitle.length > 0) {
        AppService.findByPnrCode(searchTitle)
        .then((response : any) => {
          let flightsTemp = flights.filter(flight => flight.pnrCode === response.data.pnrCode);
          setFlights(flightsTemp);
        } )
        .catch((e:Error) => {
          setFlights([])
            console.log(e)
        }) 
        return 
      } 
      retrieveFlights()
  }

  return (
    <>
      <Heading as="h1" size="lg" mb={4}>
        Flights
      </Heading>
      <Input
        placeholder="PNR Code"
        value={searchTitle}
        onChange={(e) => findByPnrCode(e.target.value)}
        mb={4}
      />
      <Button
              className="btn btn-outline-secondary"
              type="button"
              colorScheme='orange'
            >
              Search
            </Button>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Flight ID</Th>
              <Th isNumeric>PNR Code</Th>
              <Th isNumeric>Flight Date</Th>
              <Th >Departure Location</Th>
              <Th >Arrival Location</Th>
              <Th >Baggage Name</Th>
              <Th>Flight Detail</Th>
            </Tr>
          </Thead>
          <Tbody>
            { flights
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
                    <Link to={`/backoffice/flights/${flight.id}/passengers`}>
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