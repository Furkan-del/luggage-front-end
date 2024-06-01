import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Button, Spinner, VStack, Avatar, useColorModeValue } from '@chakra-ui/react';
import User from './types/UserType';
import AppService from './services/AppService';

const UserProfile: React.FC = () => {
  var initialUser = {
    fullName:"",
    mail:"",
    phoneNumber:"",
    username:""
}


  const [user, setUser] = useState<User>(initialUser);
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
   AppService.getUser().then((response) => {  
      setUser(response.data);
      console.log(response.data)
   }).catch((e:Error) => {
     console.log(e)
   })
  };

  
  if (!user) return <Spinner />;

  const bg = useColorModeValue('orange.100', 'orange.700');
  const color = useColorModeValue('orange.900', 'orange.100');

  return (
    <Box p={5} shadow="md" borderWidth="1px" bg={bg} color={color} borderRadius="md">
      <VStack spacing={4}>
        <Avatar size="2xl" name={user.fullName} src="" />
        <Heading as="h1" size="xl" mb={4}>{user.fullName}'s Profile</Heading>
        <Text fontSize="lg"><strong>Email:</strong> {user.mail}</Text>
        <Text fontSize="lg"><strong>Username</strong> {user.phoneNumber}</Text>
        {/* Add more user info as needed */}
        <Button mt={4} colorScheme="orange" onClick={() => window.location.href = '/userside/auth/editprofile'}>
          Edit Profile
        </Button>
      </VStack>
    </Box>
  );
};

export default UserProfile;