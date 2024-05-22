import { Box, Input, Stack, Heading, Button, Text, Link } from '@chakra-ui/react';
import { useState } from 'react';
import AppService from './services/AppService';
import RegisterRequest from './types/RegisterRequest';
import { useNavigate } from "react-router-dom";
import airportImage from '../images/airport1.png'; // Adjust the path

const Register = () => {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState<RegisterRequest>({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData(registerData => ({
      ...registerData,
      [name]: value
    }));
  };

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    var createRegister = {
      fullName: registerData.fullName,
      password: registerData.password,
      phoneNumber: registerData.phoneNumber,
      email: registerData.email
    };

    AppService.registerUser(createRegister)
      .then((response: any) => {
        setRegisterData({
          fullName: response.fullName,
          email: response.email,
          password: response.password,
          phoneNumber: response.phoneNumber
        });
        navigate('/login'); // Redirect to login page after successful registration
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <Box
      position="relative"
      width="100vw"
      height="100vh"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundImage={`url(${airportImage})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        filter="brightness(0.7) grayscale(0.5)" // Adjust brightness and grayscale
        opacity="0.8" // Adjust opacity to make the image more visible
        zIndex="0"
      />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
        position="relative"
        zIndex="1"
      >
        <Box
          backgroundColor="rgba(255, 255, 255, 0.8)"
          padding="20px"
          borderRadius="8px"
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          width="400px"
          textAlign="center"
          backdropFilter='auto'
          backdropBlur='4px'
        >
          <Heading color="orange" marginBottom="20px">Register</Heading>
          <form onSubmit={handleClick}>
            <Stack spacing={3}>
              <Input
                type="text"
                name="fullName"
                value={registerData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                size="md"
              />
              <Input
                type="text"
                name="phoneNumber"
                value={registerData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                size="md"
              />
              <Input
                type="text"
                name="email"
                value={registerData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                size="md"
              />
              <Input
                type="text"
                name="password"
                value={registerData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                size="md"
              />
              <Button type="submit" colorScheme='orange' width="100%">SEND</Button>
            </Stack>
          </form>
          <Text marginTop="10px">
            Already have an account?{" "}
            <Link onClick={() => navigate('/login')} color="orange.500" textDecoration="underline">
              Login here
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;