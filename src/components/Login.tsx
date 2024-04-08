import { Input,Stack,Heading, Button } from '@chakra-ui/react'


const Login = (  ) => {
    return (
        <>
        <Heading style={ {textAlign : "center" , color : "orange"}} >Login</Heading>
        <Stack  style={ {alignItems : "center"}} spacing={3}>
            <Input  style={ {width : "300px"}} placeholder='Username' size='md'/>
            <Input style={ {width : "300px"}} placeholder='Password' size='md' />
            <Button colorScheme='orange'>SEND</Button>
            </Stack>
            </>
    )
}

export default Login