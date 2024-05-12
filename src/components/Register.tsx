
import { useState } from 'react'
import AppService from './services/AppService'
import RegisterRequest from './types/RegisterRequest'


const Register = () => {
   
const [registerData,setRegisterData] = useState<RegisterRequest>({
    fullName:"dsa",
    email:"a",
    password:"dsf",
    phoneNumber:"dfsf"
})

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData(registerData => ({
      ...registerData,
      [name]: value
    }));
  };

const handleClick = (e: React.FormEvent) =>{

    e.preventDefault()
    var createRegister = {
        fullName: registerData.fullName,
        password: registerData.email,
        phoneNumber: registerData.phoneNumber,
        email:registerData.password
}

    AppService.registerUser(createRegister)
    .then((response:any) => {
            setRegisterData(
                {
        fullName:response.fullName ,
        email: response.email,
        password: response.password,
        phoneNumber: response.phoneNumber
                }
            )
    })
    .catch((e:Error ) => {
        console.log(e)
    })
}

    return (
       <div>
 <form onSubmit={handleClick}>
<label>
    Full name : 
 <input 
                        type="text" 
                        name="fullName" 
                        value={registerData.fullName} 
                        onChange={handleChange} 
                        placeholder="Enter your full name" 
                    />
                    </label>
<label> Phone Number :
                    <input 
                    type="text" 
                    name="phoneNumber" 
                    value={registerData.phoneNumber} 
                    onChange={handleChange} 
                    placeholder="Enter your phone number" 
                />
                </label>

                <label> Email :
                <input 
                type="text" 
                name="email" 
                value={registerData.email} 
                onChange={handleChange} 
                placeholder="Enter your email" 
            />
           </label> 

           <label>
            Password :
            <input 
            type="text" 
            name="password" 
            value={registerData.password} 
            onChange={handleChange} 
            placeholder="Enter your password" 
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
       </div>
    )
}

export default Register