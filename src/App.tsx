import {ChakraProvider,Heading} from '@chakra-ui/react'
import "./App.css"
import Tabs from './components/Tabs';
import CreateFlight from './components/CreateFlight';
function App() {
return (
  <ChakraProvider>  
 <CreateFlight/>
  </ChakraProvider>
);
}

export default App
