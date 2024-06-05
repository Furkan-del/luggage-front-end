import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Button, Spinner, VStack, Avatar, useColorModeValue } from '@chakra-ui/react';
import User from './types/UserType';
import Address from './types/Address';
import AppService from './services/AppService';

const UserProfile: React.FC = () => {
interface UserResponse{
  id:any,
    mail: any,
    phoneNumber: any,
    fullName: any
}

  const initialUser = {
    id:"",
    mail: "",
    phoneNumber: "",
    fullName: "",
  };

  const [user, setUser] = useState<UserResponse>(initialUser);
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
        <Text fontSize="lg"><strong>Email:</strong> {user.mail}</Text>
        <Text fontSize="lg"><strong>Phone Number:</strong> {user.phoneNumber}</Text>
        {/* Add more user info as needed */}
        <Button mt={4} colorScheme="orange" onClick={() => window.location.href = '/userside/auth/editprofile'}>
          Edit Profile
        </Button>
      </VStack>
    </Box>
  );
};

export default UserProfile;
