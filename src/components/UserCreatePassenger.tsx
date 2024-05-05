import React, { useState } from 'react';

// Interface for passenger data
interface Passenger {
    name: string;
    email: string;
    phoneNumber: string;
}

// Interface for Table component props
interface TableProps {
    passengerList: Passenger[];
}

// Form component to create a passenger
const UserCreatePassenger: React.FC = () => {
    const [passenger, setPassenger] = useState<Passenger>({
        name: '',
        email: '',
        phoneNumber: ''
    });
    const [passengerList, setPassengerList] = useState<Passenger[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPassenger(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setPassengerList(prevList => [...prevList, passenger]);
        setPassenger({ name: '', email: '', phoneNumber: '' }); // Reset form
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'blue'}  
>
    Add Passenger
</button>
            </form>
            <Table passengerList={passengerList} />
        </div>
    );
};

// Table component to display passenger data
const Table: React.FC<TableProps> = ({ passengerList }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {passengerList.map((passenger, index) => (
                    <tr key={index}>
                        <td>{passenger.name}</td>
                        <td>{passenger.email}</td>
                        <td>{passenger.phoneNumber}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserCreatePassenger;