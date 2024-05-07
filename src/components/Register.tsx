import { Input,Stack,Heading, Button } from '@chakra-ui/react'
import AppService from './services/AppService'
import { useState } from 'react'


const Register = ( ) => {
    var initialData = {
        fullName:"",
        email:"",
        password:"",
        phoneNumber:""
    }
const [registerData,setRegisterData] = useState(initialData)

const handleClick = () =>{

    var registerRequest = { ...registerData  }

    AppService.registerUser(registerRequest)
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
}



    return (
        <>
        <Heading style={ {textAlign : "center" , color : "orange"}} >Register</Heading>
        <Stack  style={ {alignItems : "center"}} spacing={3}>
            <Input onChange={(e) => setRegisterData({...registerData, fullName:e.target.value })} value={registerData.fullName} style={ {width : "300px"}} placeholder='Full Name' size='md'/>
            <Input onChange={(e) => setRegisterData({...registerData, password:e.target.value })}  value={registerData.password} style={ {width : "300px"}} placeholder='Password' size='md' />
            <Input onChange={(e) => setRegisterData({...registerData, email:e.target.value })}  value={registerData.email} style={ {width : "300px"}} placeholder='Email' size='md' />
            <Input onChange={(e) => setRegisterData({...registerData, phoneNumber:e.target.value })}  value={registerData.phoneNumber} style={ {width : "300px"}} placeholder='Phone Number' size='md' />
            <Button onClick={handleClick} colorScheme='orange' >SEND</Button>
            </Stack>
            </>
    )
}

export default Register