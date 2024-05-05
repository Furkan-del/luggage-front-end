import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Box,
  VStack
} from '@chakra-ui/react';

interface Luggage {
  weight: number;
  name: string;
}

const CreateLuggage: React.FC = () => {
  const [luggage, setLuggage] = useState<Luggage>({ weight: 0, name: '' });
  const [luggageList, setLuggageList] = useState<Luggage[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLuggage(prevLuggage => ({
      ...prevLuggage,
      [name]: name === 'weight' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLuggageList(prevList => [...prevList, luggage]);
    setLuggage({ weight: 0, name: '' }); 
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px">
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