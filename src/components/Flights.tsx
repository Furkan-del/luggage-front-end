import {
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer
  } from '@chakra-ui/react'

  const Flights = () => {
  
    return( 
  <TableContainer>
  <Table variant='simple'>
    
  <Heading as="h1" size="lg">Flights</Heading>
    <Thead>
      <Tr>
        <Th>Flight ID</Th>
        <Th>Weight</Th>
        <Th isNumeric>PNR Code</Th>
        <Th isNumeric>Flight Date</Th>
        <Th isNumeric>Departure Location</Th>
        <Th isNumeric>Phone Number</Th>
      </Tr>
    </Thead>
    
    <Tbody>
      <Tr>
      <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>ab</Td>
        <Td isNumeric>b</Td>
        <Td isNumeric>d</Td>
        
      </Tr>
      <Tr>
      <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>ab</Td>
        <Td isNumeric>b</Td>
        <Td isNumeric>d</Td>
       
      </Tr>
      <Tr>
      <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>ab</Td>
        <Td isNumeric>b</Td>
        <Td isNumeric>d</Td>
        
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>ab</Td>
        <Td isNumeric>b</Td>
        <Td isNumeric>d</Td>
        
      </Tr>
    </Tbody>
  </Table>
</TableContainer> 
    )
}
export default Flights