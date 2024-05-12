import { Input,Stack,Heading, Button } from '@chakra-ui/react'
import AuthService from './services/AuthService'
import { useState } from 'react'
import LoginRequest from './types/LoginRequest'

const Login = ( ) => {

    let initialLoginRequest = {
        username :"",
        password:""
    }

    const  [loginRequest,setLoginRequest] = useState<LoginRequest>(initialLoginRequest)

    const handleClick = () => {
        AuthService.login(loginRequest.username,loginRequest.password)
        .then(
             ((data:any) =>  
             setLoginRequest(
                data
                )
             )
        )
        .catch((e : Error) => console.log(e))
    }


    return (
        <>
        <Heading style={ {textAlign : "center" , color : "orange"}} >Login</Heading>
        <Stack  style={ {alignItems : "center"}} spacing={3}>
            <Input  style={ {width : "300px"}} placeholder='Username' size='md'  onChange={(e) => setLoginRequest({ ...loginRequest, username: e.target.value })}/>
            <Input style={ {width : "300px"}} placeholder='Password' size='md' onChange={(e) => setLoginRequest({ ...loginRequest, password: e.target.value })} />
            <Button onClick={handleClick} colorScheme='orange'>SEND</Button>
            </Stack>
            </>
    )
}

export default Login