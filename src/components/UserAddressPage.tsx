import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  VStack
} from '@chakra-ui/react';

interface Address {
  addressName?: string;
  street: string;
  avenue: string;
  apartmentName: string;
  floor: string;
  doorNumber: string;
  city: string;
  country: string;
}

const CreateAddress: React.FC = () => {
  const [address, setAddress] = useState<Address>({
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
    setAddress(prevAddress => ({
      ...prevAddress,
      [name]: value
    }));
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <form onSubmit={(e) => { e.preventDefault(); console.log(address); }}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Address Name</FormLabel>
            <Input name="addressName" type="text" value={address.addressName ?? ''} onChange={handleChange} />
          </FormControl>
          {/* Repeat for other fields */}
          <FormControl isRequired>
            <FormLabel>Street</FormLabel>
            <Input name="street" type="text" value={address.street} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Address Name</FormLabel>
            <Input name="avenue" type="text" value={address.avenue ?? ''} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Apartmen Name</FormLabel>
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
          {/* Add controls for all other fields similarly */}
          <Button type="submit" colorScheme="orange" >Submit Address</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateAddress;