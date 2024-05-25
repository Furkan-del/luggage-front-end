import React, { useEffect, useState } from 'react';
import AppService from './services/AppService';
import { Link, useParams } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import PassengerResponse from './types/PassengerResponse';

interface Passenger {
  name: string;
  email: string;
  phoneNumber: string;
  id?: any;
}

const UserCreatePassenger: React.FC = () => {
  const { flightId } = useParams();
  const [passengers, setPassengers] = useState<PassengerResponse[]>([]);

  useEffect(() => {
    if (flightId) retrieveAllPassengers(flightId);
  }, [flightId]);

  const retrieveAllPassengers = (flightId: any) => {
    AppService.getAllPassengers(flightId)
      .then((response: any) => {
        setPassengers(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const [passenger, setPassenger] = useState<Passenger>({
    name: '',
    email: '',
    phoneNumber: '',
    id: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPassenger((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCreatePassengerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const createPassenger = {
      name: passenger.name,
      email: passenger.email,
      phoneNumber: passenger.phoneNumber,
      flight: flightId
    };

    AppService.addPassenger(createPassenger, flightId)
      .then((response: any) => {
        setPassenger({
          name: '',
          email: '',
          phoneNumber: '',
          id: ''
        });
        retrieveAllPassengers(flightId);
      })
      .catch((e: Error) => e.stack);
  };

  return (
    <Box p={8} maxW="1000px" mx="auto">
      <Heading as="h1" size="xl" mb={8} textAlign="center">
        Add a New Passenger
      </Heading>
      <Box as="form" onSubmit={handleCreatePassengerSubmit} mb={8}>
        <FormControl mb={4}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={passenger.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={passenger.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Phone Number</FormLabel>
          <Input
            type="text"
            name="phoneNumber"
            value={passenger.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </FormControl>
        <Button
          type="submit"
          colorScheme="orange"
          width="100%"
          mb={4}
          _hover={{ bg: '#f57c00' }}
        >
          Add Passenger
        </Button>
      </Box>
      <TableContainer border="1px" borderRadius="md" borderColor="gray.200" bg={useColorModeValue('gray.50', 'gray.800')}>
        <Table variant="simple">
          <Thead bg="orange.500">
            <Tr>
              <Th color="white">Passenger Name</Th>
              <Th color="white">Passenger Email</Th>
              <Th color="white">Passenger Phone Number</Th>
              <Th color="white">Give Address</Th>
            </Tr>
          </Thead>
          <Tbody>
            {passengers?.map((passengerInfo: PassengerResponse) => (
              <Tr key={passengerInfo.id}>
                <Td>{passengerInfo.passengerName}</Td>
                <Td>{passengerInfo.email}</Td>
                <Td>{passengerInfo.phoneNumber}</Td>
                <Td>
                  <Button
                    as={Link}
                    to={`/userside/flights/${flightId}/passengers/${passengerInfo.id}/addresses`}
                    colorScheme="orange"
                    size="sm"
                  >
                    Add Addresses
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserCreatePassenger;