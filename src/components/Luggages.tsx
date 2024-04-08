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
    Select
  } from '@chakra-ui/react' 
import EditOptions from './EditOptions'

  const Luggages = () => {
    return( <>
    <TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
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
        <Td >
            <Select  placeholder='Select option' ><option value='Pending'>Pending</option> 
            <option value="Completed">Completed</option>
            <option value="In Airport">In Airport</option>
             </Select>
            <Button>Send </Button>
        </Td>
      </Tr>
      <Tr>
      <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>ab</Td>
        <Td isNumeric>b</Td>
        <Td isNumeric>d</Td>
        <Td isNumeric> <EditOptions/></Td>
      </Tr>
      <Tr>
      <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>ab</Td>
        <Td isNumeric>b</Td>
        <Td isNumeric>d</Td>
        <Td isNumeric> </Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>ab</Td>
        <Td isNumeric>b</Td>
        <Td isNumeric>d</Td>
        <Td isNumeric> </Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer> </>
    )
}
export default Luggages