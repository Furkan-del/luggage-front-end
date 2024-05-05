import { ChakraProvider } from '@chakra-ui/react';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Backoffice Components
import Navbar from './components/Navbar';
import CreateFlight from './components/CreateFlight';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Register from './components/Register';
import Luggages from './components/Luggages';
import Flights from './components/Flights';
import Passenger from './components/Passengers';

// User-side Components
import UserNavbar from './components/UserNavbar';
import UserHomePage from './components/UserHomePage';
import UserCreatePassenger from './components/UserCreatePassenger';
import UserAddressPage from './components/UserAddressPage';
import UserLuggage from './components/UserLuggage';

import { PrimeReactProvider } from 'primereact/api';

function App() {
  return (
    <PrimeReactProvider>
      <ChakraProvider>
        <BrowserRouter>
          {/* Conditional rendering could be added here based on auth status or path */}
          <Routes>
            {/* Backoffice Routes */}
            <Route path="/backoffice" element={<Navbar />}>
              <Route index element={<HomePage />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="createFlight" element={<CreateFlight />} />
              <Route path="luggages" element={<Luggages />} />
              <Route path="flights" element={<Flights />} />
              <Route path="passengers" element={<Passenger />} />
              <Route path="flights/:flightId/passengers" element={<Passenger />} />
              <Route path="flights/:flightId/passengers/:passengerId/luggages" element={<Luggages />} />
            </Route>

            {/* User-side Routes */}
            <Route path="/" element={<UserNavbar />}>
              <Route index element={<UserHomePage />} />
              <Route path="create-passenger" element={<UserCreatePassenger />} />
              <Route path="address" element={<UserAddressPage />} />
              <Route path="luggage" element={<UserLuggage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </PrimeReactProvider>
  );
}

export default App;