import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Button,
  Select,
  Stack,
  Box
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import LuggageResponse from './types/LuggageResponse';
import AppService from './services/AppService';
import { useParams } from 'react-router-dom';

const Luggages = () => {
  const { flightId, passengerId } = useParams();
  const [luggages, setLuggages] = useState<LuggageResponse[]>([]);
  const [state, setState] = useState<string>("");

  useEffect(() => {
    if (flightId && passengerId) retrieveLuggagesByPassengerAndFlight(flightId, passengerId);
  }, [flightId, passengerId]);

  const retrieveLuggagesByPassengerAndFlight = (flightId: any, passengerId: any) => {
    AppService.getAllLuggagesByPassengerAndFlight(flightId, passengerId)
      .then((response: any) => {
        setLuggages(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const handleEditClick = (luggageId: any, state: string) => {
    AppService.updateLuggage(flightId, passengerId, luggageId, state)
      .then((response: any) => {
        let luggagesTemp = luggages.filter(luggage => luggage.id !== response.data.id);
        luggagesTemp.push(response.data);
        setLuggages(luggagesTemp);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="lg" mb={8}>Luggages</Heading>
      <TableContainer border="1px" borderRadius="md" borderColor="gray.200" bg="white">
        <Table variant='simple'>
          <Thead bg="orange.500">
            <Tr>
              <Th color="white">Luggage ID</Th>
              <Th color="white">Luggage Name</Th>
              <Th color="white">Weight</Th>
              <Th color="white">Flight Departure Name</Th>
              <Th color="white">Passenger Name</Th>
              <Th color="white">State</Th>
              <Th color="white">Edit State</Th>
            </Tr>
          </Thead>
          <Tbody>
            {luggages.map((luggage, index) => (
              <Tr key={index}>
                <Td>{luggage.id}</Td>
                <Td>{luggage.luggageName}</Td>
                <Td>{luggage.weight}</Td>
                <Td>{luggage.flight.departureLocationOfFlight}</Td>
                <Td>{luggage.passenger.name}</Td>
                <Td>{luggage.state}</Td>
                <Td>
                  <Stack direction="row" align="center">
                    <Select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      size="sm"
                      variant="outline"
                    >
                      <option value="WAITING">WAITING</option>
                      <option value="IN_WAY">IN_WAY</option>
                      <option value="IN_AIRPORT">IN_AIRPORT</option>
                      <option value="IN_CHECK_IN">IN_CHECK_IN</option>
                      <option value="IN_FLIGHT">IN_FLIGHT</option>
                    </Select>
                    <Button
                      colorScheme='orange'
                      size="sm"
                      onClick={() => handleEditClick(luggage.id, state)}
                    >
                      Edit
                    </Button>
                  </Stack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Luggages;