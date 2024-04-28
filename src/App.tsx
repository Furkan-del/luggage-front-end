import {ChakraProvider} from '@chakra-ui/react'
import "./App.css"
import CreateFlight from './components/CreateFlight';
import Login from './components/Login';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Register from './components/Register';
import Luggages from './components/Luggages';
import Flights from './components/Flights';
import Passenger from './components/Passengers';
import { PrimeReactProvider } from 'primereact/api';
        
function App() {
return (
  <PrimeReactProvider>
  <ChakraProvider> 
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/createFlight" element={<CreateFlight/>}/>
    <Route path="/luggages" element={<Luggages/>}/>
    <Route path="/flights" element={<Flights/>}/>
    <Route path="/passengers" element={<Passenger/>}/>
    <Route path="/" element={<HomePage/>}/>
    <Route path = "/flights/:flightId/passengers" element = {<Passenger/>}/>
    <Route path = "/flights/:flightId/passengers/:passengerId/luggages" element = {<Luggages/>}/>
    </Routes>
    </BrowserRouter>
  
  </ChakraProvider>
  </PrimeReactProvider>
 );
}

export default App
