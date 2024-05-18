import { Input,Stack,Heading, Button } from '@chakra-ui/react'
import AuthService from './services/AuthService'
import { useState } from 'react'
import LoginRequest from './types/LoginRequest'
import {  useNavigate} from "react-router-dom";

const Login = ( ) => {
    const navigate = useNavigate();

    let initialLoginRequest = {
        username :"",
        password:""
    }

    const  [loginRequest,setLoginRequest] = useState<LoginRequest>(initialLoginRequest)

    const handleClick = () => {
        AuthService.login(loginRequest.username,loginRequest.password)
        .then(
             ((response:any) =>{
        setLoginRequest(response)
        navigate(`/userside/auth/${response.userId}`)
    }
            )
        )
        .catch((e : Error) => console.log(e))
    }


    return (
        <>
        <Heading style={ {textAlign : "center" , color : "orange"}} >Login</Heading>
        <Stack  style={ {alignItems : "center"}} spacing={3}>
            <Input  style={ {width : "300px"}} placeholder='Username' size='md' id="username" name="username"  onChange={(e) => setLoginRequest({ ...loginRequest, username: e.target.value })}/>
            <Input style={ {width : "300px"}} placeholder='Password' size='md'id="password" name="password" onChange={(e) => setLoginRequest({ ...loginRequest, password: e.target.value })} />
            <Button onClick={handleClick} colorScheme='orange'>SEND</Button>
            </Stack>
            </>
    )
}

export default Login