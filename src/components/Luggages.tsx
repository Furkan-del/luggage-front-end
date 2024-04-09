import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Select,
    Heading
  } from '@chakra-ui/react' 
import EditOptions from './EditOptions'

  const Luggages = () => {
  
    return( 
    <TableContainer>
  <Table variant='simple'>
  <Heading as="h2" size="md">Luggages</Heading>
    <Thead>
      <Tr>
        <Th>Luggage ID</Th>
        <Th>Weight</Th>
        <Th isNumeric>Flight ID</Th>
        <Th isNumeric>Customer ID</Th>
        <Th isNumeric>State</Th>
        <Th isNumeric>Edit State</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
      <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>ab</Td>
        <Td isNumeric>b</Td>
        <Td isNumeric>d</Td>
        <Td> <EditOptions/></Td>
      </Tr>
      <Tr>
      <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>ab</Td>
        <Td isNumeric>b</Td>
        <Td isNumeric>d</Td>
        <Td > <EditOptions/></Td>
      </Tr>
      <Tr>
      <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>ab</Td>
        <Td isNumeric>b</Td>
        <Td isNumeric>d</Td>
        <Td > <EditOptions/></Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>ab</Td>
        <Td isNumeric>b</Td>
        <Td isNumeric>d</Td>
        <Td> <EditOptions/></Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer> 
    )
}
export default Luggages