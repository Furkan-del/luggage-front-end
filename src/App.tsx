import {ChakraProvider,Heading} from '@chakra-ui/react'
import "./App.css"
import  Luggages  from './components/Luggages';


function App() {
    return ( <>
        <ChakraProvider>
        <Heading>Luggage</Heading>
          <Luggages/>
        </ChakraProvider>
      </> )
}

export default App
