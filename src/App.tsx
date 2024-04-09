import {ChakraProvider,Heading} from '@chakra-ui/react'
import "./App.css"
import CreateFlight from './components/CreateFlight';
import Login from './components/Login';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Tabs from './components/Tabs';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Register from './components/Register';
import Luggages from './components/Luggages';
import Flights from './components/Flights';
import Customers from './components/Customers';
function App() {
return (
  <ChakraProvider> 
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/createFlight" element={<CreateFlight/>}/>
    <Route path="/luggages" element={<Luggages/>}/>
    <Route path="/flights" element={<Flights/>}/>
    <Route path="/customers" element={<Customers/>}/>
    <Route path="/" element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  
  </ChakraProvider>
 );
}

export default App
