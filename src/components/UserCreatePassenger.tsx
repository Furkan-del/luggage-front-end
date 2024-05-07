import React, { useEffect, useState } from 'react';
import AppService from './services/AppService';
import { Link, useParams } from 'react-router-dom';
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import PassengerResponse from './types/PassengerResponse';


interface Passenger {
    name: string;
    email: string;
    phoneNumber: string
    id?: any;
}

const UserCreatePassenger: React.FC = () => {
    
    const {flightId} = useParams()
    
    const [passengerInfos,setPassengerInfos] = useState<PassengerResponse > ();
  
    // uygulamanın renderlanmadan önce bu queryi çalıştırır lakin burada şu önemli eğer bir değer paslanıyorsa içine.
    // o değer değiştiğinde çalışır aynıysa bidaha query atmaz.
      useEffect(() => {
        if(flightId)
        retrievePassengerById(flightId,passengerInfos?.id);
      },[flightId])
  
      const retrievePassengerById = (flightId:any,passengerId:any) => {
        AppService.getPassengerById(flightId,passengerId)
        .then((response:any) => {
            setPassengerInfos(response.data)
          console.log(response.data)
        })
        .catch( (e:Error) => {
          console.log(e)
        })
      }


    const [passenger, setPassenger] = useState<Passenger>({
        name: '',
        email: '',
        phoneNumber: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPassenger(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

   

    const handleCreatePassengerSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        var createPassenger = {
            id: null,
            name: passenger.name,
            email: passenger.email,
            phoneNumber: passenger.phoneNumber,
            flight:null
    }
       
        AppService.addPassenger(createPassenger, flightId)
            .then((response: any) => {

                setPassenger({
                    ...passenger,
                    id: response.id,
                    name: response.pnrCode,
                    email: response.departureLocation,
                    phoneNumber: response.arrivalLocation
                });
            })
            .catch((e: Error) => e.stack);
        
    };

    return (
        <div>
            <form onSubmit={handleCreatePassengerSubmit}>
                <label>
                    Name:
                    <input 
                        type="text" 
                        name="name" 
                        value={passenger.name} 
                        onChange={handleChange} 
                        placeholder="Enter your name" 
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="email" 
                        name="email" 
                        value={passenger.email} 
                        onChange={handleChange} 
                        placeholder="Enter your email" 
                    />
                </label>
                <label>
                    Phone Number:
                    <input 
                        type="text" 
                        name="phoneNumber" 
                        value={passenger.phoneNumber} 
                        onChange={handleChange} 
                        placeholder="Enter your phone number" 
                    />
                </label>
                <button 
    type="submit" 
    style={{
        backgroundColor: 'blue', 
        color: 'white', 
        padding: '10px 20px', 
        border: 'none', 
        borderRadius: '5px', 
        cursor: 'pointer', 
        fontSize: '16px', 
        fontWeight: 'bold', 
        transition: 'background-color 0.3s' 
    }}
    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f57c00'} 
    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'blue'}  >
    Add Passenger
</button>
            </form>
         <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th >Passenger Name</Th>
              <Th >Passenger Mail</Th>
              <Th>Passenger  Phone Number</Th>
              <Th>Give address</Th>
            </Tr>
          </Thead>
          <Tbody>
                <Tr key={passengerInfos?.id}>
                  <Td>{passengerInfos?.passengerName}</Td>
                  <Td>{passengerInfos?.email}</Td>
                  <Td>{passengerInfos?.phoneNumber}</Td>
                  <Td>
                    <Link to={`/homepage/flights/${flightId}/passengers/${passengerInfos?.id}/addresses`}>
                    Add Addresses
                    </Link>
                  </Td>
                </Tr>
          </Tbody>
        </Table>
      </TableContainer>
       </div>
       
    );
};


export default UserCreatePassenger;