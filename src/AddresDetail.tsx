import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Spinner, useToast, Text } from '@chakra-ui/react';
import AppService from './components/services/AppService';

const AddressDetail: React.FC = () => {
  let addressId = localStorage.getItem('addressId');
  const { passengerId,flightId } = useParams();
  const initialAddress = {
    addressName: '',
    street: '',
    avenue: '',
    apartmentName: '',
    floor: '',
    doorNumber: '',
    city: '',
    country: ''
  };

  const [address, setAddress] = useState<any>(initialAddress);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    AppService.getAddresses(passengerId, addressId,flightId)
      .then((response: any) => {
        setAddress(response.data);
        setLoading(false);
      })
      .catch((error: Error) => {
        console.log(error);
        toast({
          title: 'An error occurred.',
          description: 'Unable to fetch address.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        setLoading(false);
      });
  }, [passengerId, addressId, toast]);

  if (loading) {
    return <Spinner size="xl" />;
  }

  if (!address) {
    return <Box>No address found.</Box>;
  }

  return (
    <Box p={8} maxW="800px" mx="auto">
      <Heading as="h1" size="xl" mb={8} textAlign="center">
        Address Details
      </Heading>
      <Box p={4} borderWidth={1} borderRadius="md" bg="gray.50">
        <Text mb={2}>
          <strong>Address Name:</strong> {address.addressName}
        </Text>
        <Text mb={2}>
          <strong>Street:</strong> {address.street}
        </Text>
        <Text mb={2}>
          <strong>Avenue:</strong> {address.avenue}
        </Text>
        <Text mb={2}>
          <strong>Apartment Name:</strong> {address.apartmentName}
        </Text>
        <Text mb={2}>
          <strong>Floor:</strong> {address.floor}
        </Text>
        <Text mb={2}>
          <strong>Door Number:</strong> {address.doorNumber}
        </Text>
        <Text mb={2}>
          <strong>City:</strong> {address.city}
        </Text>
        <Text mb={2}>
          <strong>Country:</strong> {address.country}
        </Text>
      </Box>
     </Box>
  );
};

export default AddressDetail;
