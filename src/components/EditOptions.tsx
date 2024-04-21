import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    
  } from '@chakra-ui/react'

  const EditOptions = (props:any) => {
    return(<Menu>
    <MenuButton as={Button} onClick={props.onClick}>
      CHANGE STATUS
    </MenuButton>
    <MenuList>
      <MenuItem>WAITING</MenuItem>
      <MenuItem>IN WAY</MenuItem>
      <MenuItem>IN AIRPORT</MenuItem>
      <MenuItem>IN CHECK IN</MenuItem>
      <MenuItem>IN PLANE</MenuItem>
    </MenuList> 
  </Menu> 
  )}
  export default EditOptions