import {ChakraProvider,Heading} from '@chakra-ui/react'
import "./App.css"
import Tabs from './components/Tabs';
function App() {
return (
  <ChakraProvider>  
<Tabs/>
  </ChakraProvider>
);
}

export default App
