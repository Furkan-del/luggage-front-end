import React, { useState, useEffect } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button, VStack, useColorModeValue } from '@chakra-ui/react';
import User from './types/UserType';


const EditUserProfile: React.FC = () => {
  const [user, setUser] = useState<User>({ name: '', email: '', username: '', phonenumber: '' });

  useEffect(() => {
    const fetchUserData = async () => {
      // Replace with actual API call
      const userData = await fetch('/api/user').then(res => res.json());
      setUser(userData);
    };
    fetchUserData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await fetch('/api/user', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    
    window.location.href = 'userside/profile'; //sıkıntılı çalışıyor anlamadım -ç
  };

  const bg = useColorModeValue('orange.100', 'orange.700');
  const color = useColorModeValue('orange.900', 'orange.100');

  return (
    <Box p={5} shadow="md" borderWidth="1px" bg={bg} color={color} borderRadius="md">
      <Heading as="h1" size="xl" mb={4}>Edit Profile</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" value={user.name} onChange={handleChange} />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" value={user.email} onChange={handleChange} />
          </FormControl>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input type="text" name="username" value={user.username} onChange={handleChange} />
          </FormControl>
          <FormControl id="phonenumber">
            <FormLabel>Phone Number</FormLabel>
            <Input type="text" name="phonenumber" value={user.phonenumber} onChange={handleChange} />
          </FormControl>
          <Button type="submit" colorScheme="orange">Save Changes</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default EditUserProfile;