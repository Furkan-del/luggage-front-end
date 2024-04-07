import {ChakraProvider} from '@chakra-ui/react'
import Tabs from './components/Tabs';
import "./App.css"

function App() {
    return (
        <ChakraProvider>
          <Tabs/>
        </ChakraProvider>
      )
}

export default App
