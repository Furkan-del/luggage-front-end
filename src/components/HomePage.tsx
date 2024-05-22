import { Box, Button, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import createFlightImage from '../images/createflightimage.webp'; 
import luggagesImage from '../images/luggages.webp'; 
import flightsImage from '../images/passengers.webp'; 
import passengersImage from '../images/flights.webp'; 

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8} textAlign="center">Welcome to the Luggage Management System</Heading>
      <SimpleGrid columns={[1, null, 2]} spacing={10}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={createFlightImage} alt="Create Flight" />
          <Box p={6}>
            <Stack spacing={3}>
              <Heading as="h2" size="md">Create Flight</Heading>
              <Text>Create new flights in the system.</Text>
              <Button colorScheme="orange" onClick={() => navigate('/backoffice/createFlight')}>
                Go to Create Flight
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={luggagesImage} alt="Luggages" />
          <Box p={6}>
            <Stack spacing={3}>
              <Heading as="h2" size="md">Luggages</Heading>
              <Text>Manage luggages in the system.</Text>
              <Button colorScheme="orange" onClick={() => navigate('/backoffice/luggages')}>
                Go to Luggages
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={flightsImage} alt="Flights" />
          <Box p={6}>
            <Stack spacing={3}>
              <Heading as="h2" size="md">Flights</Heading>
              <Text>View and manage flights in the system.</Text>
              <Button colorScheme="orange" onClick={() => navigate('/backoffice/flights')}>
                Go to Flights
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={passengersImage} alt="Passengers" />
          <Box p={6}>
            <Stack spacing={3}>
              <Heading as="h2" size="md">Passengers</Heading>
              <Text>Manage passengers in the system.</Text>
              <Button colorScheme="orange" onClick={() => navigate('/backoffice/passengers')}>
                Go to Passengers
              </Button>
            </Stack>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default HomePage;