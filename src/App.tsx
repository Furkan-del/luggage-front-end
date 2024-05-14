
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';

// Import backoffice components
import Navbar from './components/Navbar';
import CreateFlight from './components/CreateFlight';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Register from './components/Register';
import Luggages from './components/Luggages';
import Flights from './components/Flights';
import Passenger from './components/Passengers';

// Import user-side components
import UserNavbar from './components/UserNavbar';
import UserHomePage from './components/UserHomePage';
import UserCreatePassenger from './components/UserCreatePassenger';
import UserAddressPage from './components/UserAddressPage';
import UserLuggage from './components/UserLuggage';
import UserInfoPage from './components/UserInfoPage';
import EditUserProfile from './components/UserEditInfoPage';

function App() {

  return (
    <PrimeReactProvider>
      <ChakraProvider>
        <Router>
          <Routes>
            {/* Backoffice routes */}
            <Route path="/backoffice/*" element={<>
              <Navbar />
              <Routes>
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="createFlight" element={<CreateFlight />} />
                <Route path="luggages" element={<Luggages />} />
                <Route path="flights" element={<Flights />} />
                <Route path="passengers" element={<Passenger />} />
                <Route path="flights/:flightId/passengers" element={<Passenger />} />
                <Route path="flights/:flightId/passengers/:passengerId/luggages" element={<Luggages />} />
                <Route index element={<HomePage />} />
              </Routes>
            </>} />

            {/* User-side routes */}
            <Route path="/userside/*" element={<>
              <UserNavbar />
              <Routes>
              <Route path="flights/:flightId/passengers" element={<UserCreatePassenger />} />
                <Route path="luggage" element={<UserLuggage />} />
                <Route path="login" element={<Login />} />
                <Route index element={<UserHomePage />} />
                <Route path="register" element={<Register />} />
                <Route path="profile" element={<UserInfoPage />} />
                <Route path="editprofile" element={<EditUserProfile />} />
                <Route path="flights/:flightId/passengers/:passengerId/addresses" element={<UserAddressPage/>} />
              </Routes>
            </>} />
          </Routes>
        </Router>
      </ChakraProvider>
    </PrimeReactProvider>
  );
}

export default App;