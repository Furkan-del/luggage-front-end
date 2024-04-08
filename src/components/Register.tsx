import { Input,Stack,Heading, Button } from '@chakra-ui/react'


const Register = ( ) => {

    return (
        <>
        <Heading style={ {textAlign : "center" , color : "orange"}} >Register</Heading>
        <Stack  style={ {alignItems : "center"}} spacing={3}>
            <Input  style={ {width : "300px"}} placeholder='Username' size='md'/>
            <Input style={ {width : "300px"}} placeholder='Password' size='md' />
            <Input style={ {width : "300px"}} placeholder='Email' size='md' />
            <Input style={ {width : "300px"}} placeholder='Phone Number' size='md' />
            <Button colorScheme='orange' >SEND</Button>
            </Stack>
            </>
    )
}

export default Register