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
  Box,
  useToast,
  Link as ChakraLink
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import FlightResponse from './types/FlightResponse';
import AppService from './services/AppService';
import { Link } from 'react-router-dom';

const Flights = () => {
  const [flights, setFlights] = useState<FlightResponse[]>([]);
  const [searchTitle, setsearchTitle] = useState<string>('');
  const toast = useToast();

  useEffect(() => {
    retrieveFlights();
  }, []);

  const retrieveFlights = () => {
    AppService.getAllFlights()
      .then((response: any) => {
        setFlights(response.data);
        toast({
          title: "Flights retrieved.",
          description: "Flight data has been successfully retrieved.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((e: Error) => {
        toast({
          title: "An error occurred.",
          description: "Unable to retrieve flights.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        console.log(e);
      });
  };

  const findByPnrCode = (searchTitle: string) => {
    setsearchTitle(searchTitle);
    if (searchTitle.length > 0) {
      AppService.findByPnrCode(searchTitle)
        .then((response: any) => {
          let flightsTemp = flights.filter(flight => flight.pnrCode === response.data.pnrCode);
          setFlights(flightsTemp);
          toast({
            title: "Flight found.",
            description: `Flight with PNR Code ${searchTitle} found.`,
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        })
        .catch((e: Error) => {
          setFlights([]);
          toast({
            title: "Flight not found.",
            description: `No flight found with PNR Code ${searchTitle}.`,
            status: "warning",
            duration: 5000,
            isClosable: true,
          });
          console.log(e);
        });
      return;
    }
    retrieveFlights();
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="lg" mb={4}>
        Flights
      </Heading>
      <Box display="flex" mb={4}>
        <Input
          placeholder="PNR Code"
          value={searchTitle}
          onChange={(e) => findByPnrCode(e.target.value)}
          mr={2}
        />
        <Button onClick={() => findByPnrCode(searchTitle)} colorScheme='orange'>
          Search
        </Button>
      </Box>
      <TableContainer border="1px" borderRadius="md" borderColor="gray.200" bg="white">
        <Table variant="simple">
          <Thead bg="orange.500">
            <Tr>
              <Th color="white">Flight ID</Th>
              <Th color="white" isNumeric>PNR Code</Th>
              <Th color="white" isNumeric>Flight Date</Th>
              <Th color="white">Departure Location</Th>
              <Th color="white">Arrival Location</Th>
              <Th color="white">Luggages</Th>
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
                    <Link to={`/backoffice/flights/${flight.id}/passengers`}>
                      See Passengers
                    </Link>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Flights;