import {ChakraProvider,Heading} from '@chakra-ui/react'
import "./App.css"
import Tabs from './components/Tabs';

import CreateFlight from './components/CreateFlight';
import Luggages from './components/Luggages';
import Customers from './components/Customers';
function App() {
return (
  <ChakraProvider>  
 <CreateFlight/>
  </ChakraProvider>
);
}

export default App
