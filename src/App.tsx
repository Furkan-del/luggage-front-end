import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';

// Import backoffice components
import Navbar from './components/Navbar';
import CreateFlight from './components/CreateFlight';
import HomePage from './components/HomePage';
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

// Import auth components
import Login from './components/Login';
import Register from './components/Register';
import BackofficeLogin from './components/BackofficeLogin';
import AddressDetail from './AddresDetail';

function App() {

  return (
    <PrimeReactProvider>
      <ChakraProvider>
        <Router>
          <Routes>
            {/* Auth routes */}
            <Route path="/login" element={<Login />} />
            <Route  path="/register" element={<Register />} />
            <Route  path="/backofficelogin" element={<BackofficeLogin />} />
            

            {/* Backoffice routes */}
            <Route path="/backoffice/*" element={<>
              <Navbar />
              <Routes>
                <Route path="createFlight" element={<CreateFlight />} />
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
                <Route path="auth/flights/:flightId/passengers/:passengerId/luggages" element={<UserLuggage />} />
                <Route path='/auth/:userId/flights' element={<UserHomePage />} />
                <Route path="auth/my-profile" element={<UserInfoPage />} />
                <Route path="auth/editprofile" element={<EditUserProfile />} />
                <Route path="flights/:flightId/passengers/:passengerId/addresses" element={<UserAddressPage />} />
                <Route path="flights/:flightId/passengers/:passengerId/addresses/:addressId" element={<AddressDetail/>} />
              </Routes>
            </>}
            
            />

<Route index element={<Login />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </PrimeReactProvider>
  );
}

export default App;