import { Box, Button, Input, Stack, Heading, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import CreateFlightRequest from './types/CreateFlightRequest';
import AppService from './services/AppService';
import { Calendar } from 'primereact/calendar';
import { Nullable } from 'primereact/ts-helpers';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import './CreateFlight.css';

const CreateFlight = () => {
  const [firstDate, setFirstDate] = useState<Nullable<Date>>(null);
  const [secondDate, setSecondDate] = useState<Nullable<Date>>(null);
  const toast = useToast();

  const initialCreateFlightRequest = {
    pnrCode: "",
    departureDate: new Date(),
    departureLocation: "",
    arrivalLocation: "",
    passengerType: "",
    returnDate: new Date(),
    passengers: [],
    luggages: []
  };

  const [flight, setFlight] = useState<CreateFlightRequest>(initialCreateFlightRequest);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const saveTutorial = () => {
    if (!/^\d{6}$/.test(flight.pnrCode)) {
      toast({
        title: "Invalid PNR Code.",
        description: "PNR Code must be exactly 6 digits.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    var flightData = {
      pnrCode: flight.pnrCode,
      departureLocation: flight.departureLocation,
      arrivalLocation: flight.arrivalLocation,
      departureDate: firstDate,
      returnDate: secondDate,
      passengers: [],
      luggages: []
    };

    const formattedFlightData = {
      ...flightData,
      departureDate: new Date(flightData.departureDate!),
      returnDate: new Date(flightData.returnDate!)
    };

    AppService.createFlight(formattedFlightData)
      .then((response: any) => {
        setFlight({
          pnrCode: response.pnrCode,
          departureLocation: response.departureLocation,
          arrivalLocation: response.arrivalLocation,
          departureDate: response.departureDate,
          returnDate: response.returnDate,
          passengers: [],
          luggages: []
        });
        setSubmitted(true);
        toast({
          title: "Flight created.",
          description: "You have successfully created a flight.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((e: Error) => {
        toast({
          title: "An error occurred.",
          description: "Unable to create flight.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        console.log(e);
      });
  };

  const addNewFlight = () => {
    setFlight(initialCreateFlightRequest);
    setFirstDate(null);
    setSecondDate(null);
    setSubmitted(false);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      {submitted ? (
        <Box textAlign="center">
          <Heading as="h4" size="md" mb="4">You submitted successfully!</Heading>
          <Button onClick={addNewFlight}>Add New Flight</Button>
        </Box>
      ) : (
        <Box width="100%" maxW="500px" p="8" boxShadow="lg" borderRadius="md" backgroundColor="white" mt="-50px">
          <Heading as="h3" size="lg" textAlign="center" mb="8">Create Flight</Heading>
          <Stack spacing={4}>
            <Input
              type="text"
              value={flight.arrivalLocation}
              onChange={(e) => setFlight({ ...flight, arrivalLocation: e.target.value })}
              placeholder='From'
              style={{ fontWeight: flight.arrivalLocation ? 'normal' : 'bold' }}
            />
            <Input
              type="text"
              value={flight.departureLocation}
              onChange={(e) => setFlight({ ...flight, departureLocation: e.target.value })}
              placeholder='To'
              style={{ fontWeight: flight.departureLocation ? 'normal' : 'bold' }}
            />
            <Calendar
              value={firstDate}
              onChange={(e) => {
                setFirstDate(e.value);
                if (e.value) {
                  document.getElementById('departureDate')!.classList.add('selected-date');
                }
              }}
              dateFormat="dd/mm/yy"
              placeholder="Departure Date"
              inputId="departureDate"
              style={{ width: '100%' }}
            />
            <Calendar
              value={secondDate}
              onChange={(e) => {
                setSecondDate(e.value);
                if (e.value) {
                  document.getElementById('returnDate')!.classList.add('selected-date');
                }
              }}
              dateFormat="dd/mm/yy"
              placeholder="Return Date"
              inputId="returnDate"
              style={{ width: '100%' }}
            />
            <Input
              type="text"
              value={flight.pnrCode}
              onChange={(e) => setFlight({ ...flight, pnrCode: e.target.value })}
              placeholder='PNR Code (6 digits)'
            />
            <Button onClick={saveTutorial} colorScheme='orange' width="100%">SEND</Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
}

export default CreateFlight;