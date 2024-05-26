import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button, VStack, useColorModeValue, useToast } from '@chakra-ui/react';
import AppService from './services/AppService';
import UserUpdate from './types/UserUpdate';


const EditUserProfile: React.FC = () => {
  const [userUpdate, setUserUpdate] = useState<UserUpdate>({ fullName: '', phoneNumber: ''});
  const toast = useToast();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserUpdate({ ...userUpdate, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    var updateUserInfo= {
      fullName: userUpdate.fullName,
      phoneNumber: userUpdate.phoneNumber
    }
    AppService.updateUserInfo(updateUserInfo).then((response:any ) => {
    setUserUpdate(response.data)
    toast({
      title: "User Profile informations updated.",
      description: "The user profile informations has been saved successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    }).catch((e:Error) => { 
      console.log(e)
    })
  };

  const bg = useColorModeValue('orange.100', 'orange.700');
  const color = useColorModeValue('orange.900', 'orange.100');

  return (
    <Box p={5} shadow="md" borderWidth="1px" bg={bg} color={color} borderRadius="md">
      <Heading as="h1" size="xl" mb={4}>Edit Profile</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="fullName">
            <FormLabel>Email</FormLabel>
            <Input type="text" name="fullName" value={userUpdate.fullName} onChange={handleChange} />
          </FormControl>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input type="text" name="phoneNumber" value={userUpdate.phoneNumber} onChange={handleChange} />
          </FormControl>
          <Button type="submit" colorScheme="orange">Save Changes</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default EditUserProfile;