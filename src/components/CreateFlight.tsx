import { Stack,Heading, Button ,Select } from '@chakra-ui/react'



import 'react-day-picker/dist/style.css';


const CreateFlight = (  ) => {
    return (
        <>
        <Heading style={ {textAlign : "center" , color : "orange"}} > Choose your flight !</Heading>
        <Stack  style={ {alignItems : "center"}} spacing={3}>
        <Select placeholder='From'>
        
        <option value='option1'>Option 1</option>
        
        </Select>
        <Select placeholder='To'>
        <option value='option1'>Option 1</option>
        
        </Select>

        <Select placeholder='Passenger Type'>
        <option value='option1'>Adult</option>
        <option value='option2'>Children</option>
        
        </Select>

  
            <Button colorScheme='orange'>SEND</Button>
            </Stack>

        
            </>


    )
}

export default CreateFlight