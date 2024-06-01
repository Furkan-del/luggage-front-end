import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  VStack,
  Heading,
  useToast
} from '@chakra-ui/react';
import AppService from './services/AppService';
import { Link, useParams } from 'react-router-dom';
import CreateLuggageRequest from './types/CreateLuggageRequest';

interface Luggage {
  weight: number;
  name: string;
}

const CreateLuggage: React.FC = () => {
  let addressId = localStorage.getItem('addressId');
  const { flightId, passengerId } = useParams();
  const toast = useToast();

  const [luggage, setLuggage] = useState<CreateLuggageRequest>({ weight: 0, name: '' });
  const [luggageList, setLuggageList] = useState<Luggage[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLuggage((prevLuggage) => ({
      ...prevLuggage,
      [name]: name === 'weight' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AppService.createLuggage(flightId, passengerId, luggage)
      .then((response: any) => {
        setLuggageList([...luggageList, response.data]);
        setLuggage({ weight: 0, name: '' });
        toast({
          title: "Luggage added.",
          description: "The luggage has been added successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((e: Error) => {
        toast({
          title: "An error occurred.",
          description: "Unable to add the luggage.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        console.log(e);
      });
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" maxW="600px" mx="auto">
      <Heading as="h1" size="xl" mb={8} textAlign="center">
        Add Luggage
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input name="name" type="text" value={luggage.name} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Weight</FormLabel>
            <NumberInput min={0}>
              <NumberInputField name="weight" value={luggage.weight.toString()} onChange={handleChange} />
            </NumberInput>
          </FormControl>
          <Button type="submit" colorScheme="orange">Add Luggage</Button>
          <Link
          color='blue.500'
          className='link' 
          to={`/userside/flights/${flightId}/passengers/${passengerId}/addresses/${addressId}`}>Go to my address</Link>
        </VStack>
      </form>
      {luggageList.length > 0 && (
        <Box mt={5}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              {luggageList.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      )}
    </Box>
  );
};

export default CreateLuggage;