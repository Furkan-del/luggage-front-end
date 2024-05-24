import { Box, Input, Stack, Heading, Button, Text, Link } from '@chakra-ui/react';
import AuthService from './services/AuthService';
import { useState } from 'react';
import LoginRequest from './types/LoginRequest';
import { useNavigate } from "react-router-dom";
import airportImage from '../images/airport1.png'; 

const Login = () => {
  const navigate = useNavigate();

  let initialLoginRequest = {
    username: "",
    password: ""
  };

  const [loginRequest, setLoginRequest] = useState<LoginRequest>(initialLoginRequest);

  const handleClick = () => {
    AuthService.login(loginRequest.username, loginRequest.password)
      .then(
        (response: any) => {
          setLoginRequest(response);
          navigate(`/userside/auth/${response.userId}/flights`);
        }
      )
      .catch((e: Error) => console.log(e));
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
        backgroundImage={`url(${airportImage })`} 
        backgroundSize="cover" 
        backgroundPosition="center" 
        backgroundRepeat="no-repeat" 
        filter="brightness(0.7) grayscale(0.5) " // Parlaklığı  ve görünülük buradan ayarlanacak
        opacity="0.8" // görünürütlk ayarı
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
          <Heading color="orange" marginBottom="20px">Login</Heading>
          <Stack spacing={3}>
            <Input
              width="100%"
              placeholder='Username'
              size='md'
              id="username"
              name="username"
              onChange={(e) => setLoginRequest({ ...loginRequest, username: e.target.value })}
            />
            <Input
              width="100%"
              placeholder='Password'
              size='md'
              id="password"
              name="password"
              onChange={(e) => setLoginRequest({ ...loginRequest, password: e.target.value })}
            />
            <Button onClick={handleClick} colorScheme='orange' width="100%">SEND</Button>
            <Text>
              If you don't have an account,{" "}
              <Link onClick={() => navigate('/register')} color="orange.500" textDecoration="underline">
                register here
              </Link>
            </Text>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;