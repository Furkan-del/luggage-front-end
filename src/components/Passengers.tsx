import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Button,
  useToast,
  Link as ChakraLink
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import PassengerResponse from './types/PassengerResponse';
import AppService from './services/AppService';
import { Link, useParams } from 'react-router-dom';

const Passenger = () => {
  const { flightId } = useParams();
  const [passengers, setPassengers] = useState<PassengerResponse[]>([]);
  const toast = useToast();

  useEffect(() => {
    if (flightId) retrievePassengers(flightId);
  }, [flightId]);

  const retrievePassengers = (flightId: any) => {
    AppService.getAllPassengers(flightId)
      .then((response: any) => {
        setPassengers(response.data);
        toast({
          title: "Passengers retrieved.",
          description: "Passenger data has been successfully retrieved.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((e: Error) => {
        toast({
          title: "An error occurred.",
          description: "Unable to retrieve passengers.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        console.log(e);
      });
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="lg" mb={4}>
        Passengers
      </Heading>
      <TableContainer border="1px" borderRadius="md" borderColor="gray.200" bg="white">
        <Table variant="simple">
          <Thead bg="orange.500">
            <Tr>
              <Th color="white">Passenger ID</Th>
              <Th color="white">Name</Th>
              <Th color="white">Email</Th>
              <Th color="white">Phone Number</Th>
              <Th color="white">Luggage Detail</Th>
            </Tr>
          </Thead>
          <Tbody>
            {passengers.map((passenger) => (
              <Tr key={passenger.id}>
                <Td>{passenger.id}</Td>
                <Td>{passenger.passengerName}</Td>
                <Td>{passenger.email}</Td>
                <Td>{passenger.phoneNumber}</Td>
                <Td>
                  <ChakraLink as={Link} to={`/backoffice/flights/${flightId}/passengers/${passenger.id}/luggages`} color="orange.500" textDecoration="underline">
                    See Luggages
                  </ChakraLink>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Passenger;