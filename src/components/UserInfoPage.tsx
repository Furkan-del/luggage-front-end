import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Button, Spinner, VStack, Avatar, useColorModeValue } from '@chakra-ui/react';
import AppService from './services/AppService';

interface UserResponse {
  id: string;
  mail: string;
  phoneNumber: string;
  fullName: string;
}

const UserProfile: React.FC = () => {
  const initialUser: UserResponse = {
    id: "",
    mail: "",
    phoneNumber: "",
    fullName: ""
  };

  const [user, setUser] = useState<UserResponse>(initialUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    AppService.getUser()
      .then((response) => {
        console.log("User data received:", response.data); // Log to check the response
        setUser(response.data);
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
        <Heading as="h2" size="lg">{user.fullName}</Heading>
        <Text fontSize="lg"><strong>Email:</strong> {user.mail}</Text>
        <Text fontSize="lg"><strong>Phonenumber:</strong> {user.phoneNumber}</Text>
        <Button mt={4} colorScheme="orange" onClick={() => window.location.href = '/userside/auth/editprofile'}>
          Edit Profile
        </Button>
      </VStack>
    </Box>
  );
};

export default UserProfile;