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
  useToast,
} from '@chakra-ui/react';
import PassengerResponse from './types/PassengerResponse';

interface Passenger {
  name: string;
  email: string;
  phoneNumber: string;
  id?: any;
  passengerType: string;
}

const UserCreatePassenger: React.FC = () => {
  const toast = useToast();
  const { flightId } = useParams();
  const userId = localStorage.getItem('userId');
  const [passengers, setPassengers] = useState<PassengerResponse[]>([]);

  const retrievePassengersByIdAndFlightIdAndUserId = (flightId: any,passengerId: any,userId: any) => {
    AppService.getPassengerByPassengerIdAndFlightIdAndUserId(flightId,passengerId,userId)
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
    id: '',
    passengerType: ''
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
      flight: flightId,
      passengerType: passenger.passengerType
    };
      
    AppService.addPassenger(createPassenger, flightId)
      .then((response: any) => {
        setPassenger({
          name: '',
          email: '',
          phoneNumber: '',
          id: '',
          passengerType: ''
        });
        toast({
          title: "Passenger created.",
          description: "The passenger has been created successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        console.log(response.data);
        
        retrievePassengersByIdAndFlightIdAndUserId(flightId,response.data.id,userId)

      })
      .catch((e: Error) => {
        toast({
          title: "An error occurred.",
          description: "Unable to create the passenger.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };
  
  const handleCheckIn = (passengerId: any) => {
    AppService.checkInPassenger(flightId, passengerId)
      .then((response:any) => {
        toast({
          title: "Checked in.",
          description: "The passenger has been checked in successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((e: Error) => {
        toast({
          title: "An error occurred.",
          description: "Unable to check in the passenger.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
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

        <FormControl mb={4}>
          <FormLabel>Passenger Type</FormLabel>
          <Input
            type="text"
            name="passengerType"
            value={passenger.passengerType}
            onChange={handleChange}
            placeholder="Enter your passenger type ADULT/CHILD"
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
              <Th color="white">Passenger Type</Th>
              <Th color="white">Give Address</Th>
              <Th color="white">Check In</Th>
            </Tr>
          </Thead>
          <Tbody>
            {passengers?.map((passengerInfo: PassengerResponse) => (
              <Tr key={passengerInfo.id}>
                <Td>{passengerInfo.passengerName}</Td>
                <Td>{passengerInfo.email}</Td>
                <Td>{passengerInfo.phoneNumber}</Td>
                <Td>{passengerInfo.passengerType}</Td>
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
                <Td>
                  {passengerInfo.isCheckedIn ? (
                    <Button colorScheme="green" size="sm" disabled>
                      Checked In
                    </Button>
                  ) : (
                    <Button
                      colorScheme="green"
                      size="sm"
                      onClick={() => handleCheckIn(passengerInfo.id)}
                    >
                      Check In
                    </Button>
                  )}
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