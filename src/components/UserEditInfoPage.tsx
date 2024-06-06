import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button, VStack, useColorModeValue, useToast } from '@chakra-ui/react';
import AppService from './services/AppService';
import UserUpdate from './types/UserUpdate';

const EditUserProfile: React.FC = () => {
  const [userUpdate, setUserUpdate] = useState<UserUpdate>({ fullName: '', phoneNumber: '' });
  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserUpdate({ ...userUpdate, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userUpdate.fullName || !userUpdate.phoneNumber) {
      toast({
        title: "Error",
        description: "Full Name and Phone Number cannot be empty.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const updateUserInfo = {
      fullName: userUpdate.fullName,
      phoneNumber: userUpdate.phoneNumber
    };

    try {
      const response = await AppService.updateUserInfo(updateUserInfo);
      setUserUpdate(response.data);
      toast({
        title: "User Profile Information Updated",
        description: "The user profile information has been saved successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (e: any) {
      console.log(e);
      toast({
        title: "Error",
        description: "An error occurred while updating the profile.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const bg = useColorModeValue('orange.100', 'orange.700');
  const color = useColorModeValue('orange.900', 'orange.100');

  return (
    <Box p={5} shadow="md" borderWidth="1px" bg={bg} color={color} borderRadius="md">
      <Heading as="h1" size="xl" mb={4}>Edit Profile</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="fullName">
            <FormLabel>Full Name</FormLabel>
            <Input type="text" name="fullName" value={userUpdate.fullName} onChange={handleChange} />
          </FormControl>
          <FormControl id="phoneNumber">
            <FormLabel>Phone Number</FormLabel>
            <Input type="text" name="phoneNumber" value={userUpdate.phoneNumber} onChange={handleChange} />
          </FormControl>
          <Button type="submit" colorScheme="orange">Save Changes</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default EditUserProfile;