import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Button, Spinner, VStack, Avatar, useColorModeValue } from '@chakra-ui/react';
import User from './types/UserType';


const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      // Replace with actual API call
      const userData = await fetch('/api/user').then(res => res.json());
      setUser(userData);
    };
    fetchUserData();
  }, []);

  if (!user) return <Spinner />;

  const bg = useColorModeValue('orange.100', 'orange.700');
  const color = useColorModeValue('orange.900', 'orange.100');

  return (
    <Box p={5} shadow="md" borderWidth="1px" bg={bg} color={color} borderRadius="md">
      <VStack spacing={4}>
        <Avatar size="2xl" name={user.name} src="" />
        <Heading as="h1" size="xl" mb={4}>{user.name}'s Profile</Heading>
        <Text fontSize="lg"><strong>Email:</strong> {user.email}</Text>
        <Text fontSize="lg"><strong>Username:</strong> {user.username}</Text>
        <Text fontSize="lg"><strong>Phone Number:</strong> {user.phonenumber}</Text>
        {/* Add more user info as needed */}
        <Button mt={4} colorScheme="orange" onClick={() => window.location.href = '/edit-profile'}>
          Edit Profile
        </Button>
      </VStack>
    </Box>
  );
};

export default UserProfile;