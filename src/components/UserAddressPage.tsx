import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  VStack,
  Heading,
  useToast
} from '@chakra-ui/react';
import AppService from './services/AppService';
import { useParams, useNavigate, Link } from 'react-router-dom';
import CreateAddressRequest from './types/CreateAddressRequest';

const CreateAddress: React.FC = () => {
  let addressId ;
  const navigate = useNavigate();
  const { passengerId, flightId } = useParams();
  const toast = useToast();

  const [address, setAddress] = useState<CreateAddressRequest>({
    addressName: '',
    street: '',
    avenue: '',
    apartmentName: '',
    floor: '',
    doorNumber: '',
    city: '',
    country: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value
    }));
  };

  const handleCreateAddress = (event: React.FormEvent) => {
    event.preventDefault();
    const createAddress = {
      addressName: address.addressName,
      street: address.street,
      avenue: address.avenue,
      apartmentName: address.apartmentName,
      floor: address.floor,
      doorNumber: address.doorNumber,
      city: address.city,
      country: address.country,
      passenger: passengerId
    };
    
    AppService.createAddress(createAddress, passengerId, flightId)
      .then((response: any) => {

        addressId= localStorage.setItem('addressId', response.data.id);
        setAddress(response.data);
        toast({
          title: "Address created.",
          description: "The address has been created successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate(`/userside/auth/flights/${flightId}/passengers/${passengerId}/luggages`);
      })
      .catch((error: Error) => {
        console.log(error);
        toast({
          title: "An error occurred.",
          description: "Unable to create the address.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" maxW="600px" mx="auto">
      <Heading as="h1" size="xl" mb={8} textAlign="center">
        Create Address
      </Heading>
      <form onSubmit={handleCreateAddress}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Address Name</FormLabel>
            <Input name="addressName" type="text" value={address.addressName ?? ''} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Street</FormLabel>
            <Input name="street" type="text" value={address.street} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Avenue</FormLabel>
            <Input name="avenue" type="text" value={address.avenue ?? ''} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Apartment Name</FormLabel>
            <Input name="apartmentName" type="text" value={address.apartmentName ?? ''} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Floor</FormLabel>
            <Input name="floor" type="text" value={address.floor ?? ''} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Door Number</FormLabel>
            <Input name="doorNumber" type="text" value={address.doorNumber ?? ''} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>City</FormLabel>
            <Input name="city" type="text" value={address.city ?? ''} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Country</FormLabel>
            <Input name="country" type="text" value={address.country ?? ''} onChange={handleChange} />
          </FormControl>
          
          <Button type="submit" colorScheme="orange">Submit Address</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateAddress;