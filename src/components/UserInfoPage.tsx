import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Button, Spinner, VStack, Avatar, useColorModeValue, List, ListItem } from '@chakra-ui/react';
import User from './types/UserType';
import Address from './types/Address';
import AppService from './services/AppService';

const UserProfile: React.FC = () => {
  const initialUser: User = {
    fullName: "",
    mail: "",
    phoneNumber: "",
    username: "",
    passengerId: "" // Ensure this field is included and populated
  };

  const [user, setUser] = useState<User>(initialUser);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    AppService.getUser()
      .then((response) => {
        setUser(response.data);
        if (response.data.passengerId) {
          getAddresses(response.data.passengerId); // Fetch addresses after setting user
        }
      })
      .catch((e: Error) => {
        console.log(e);
        setLoading(false);
      });
  };

  const getAddresses = (passengerId: string) => {
    AppService.getAddressesByPassengerId(passengerId)
      .then((response) => {
        setAddresses(response.data);
        setLoading(false);
      })
      .catch((e: Error) => {
        console.log(e);
        setLoading(false);
      });
  };

  if (loading) return <Spinner />;

  const bg = useColorModeValue('orange.100', 'orange.700');
  const color = useColorModeValue('orange.900', 'orange.100');

  return (
    <Box p={5} shadow="md" borderWidth="1px" bg={bg} color={color} borderRadius="md">
      <VStack spacing={4}>
        <Avatar size="2xl" name={user.fullName} src="" />
        <Heading as="h1" size="xl" mb={4}>{user.fullName}'s Profile</Heading>
        <Text fontSize="lg"><strong>Email:</strong> {user.mail}</Text>
        <Text fontSize="lg"><strong>Phone Number:</strong> {user.phoneNumber}</Text>

        <Heading as="h2" size="md" mt={8} mb={4}>
          Addresses
        </Heading>
        <List spacing={3}>
          {addresses.map((address, index) => (
            <ListItem key={index}>
              <Box p={4} shadow="md" borderWidth="1px">
                <Text><strong>Address Name:</strong> {address.addressName}</Text>
                <Text><strong>Street:</strong> {address.street}</Text>
                <Text><strong>Avenue:</strong> {address.avenue}</Text>
                <Text><strong>Apartment Name:</strong> {address.apartmentName}</Text>
                <Text><strong>Floor:</strong> {address.floor}</Text>
                <Text><strong>Door Number:</strong> {address.doorNumber}</Text>
                <Text><strong>City:</strong> {address.city}</Text>
                <Text><strong>Country:</strong> {address.country}</Text>
              </Box>
            </ListItem>
          ))}
        </List>

        <Button mt={4} colorScheme="orange" onClick={() => window.location.href = '/userside/auth/editprofile'}>
          Edit Profile
        </Button>
      </VStack>
    </Box>
  );
};

export default UserProfile;