import {
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react' 


  const Customers = () => {
  
    return( 
    <TableContainer>
  <Table variant='simple'>
  <Heading as="h1" size="lg">Customers</Heading>

    <Thead>
      <Tr>
        <Th>Customer ID</Th>
        <Th>Name</Th>
        <Th isNumeric>Email</Th>
        <Th isNumeric>Phone Number</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
      <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>ab</Td>
        <Td isNumeric>b</Td>
      </Tr>
      <Tr>
      <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>ab</Td>
        <Td isNumeric>b</Td>
      </Tr>
      <Tr>
      <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>ab</Td>
        <Td isNumeric>b</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>ab</Td>
        <Td isNumeric>b</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer> 
    )
}
export default Customers