import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from './Login'
import Register from './Register'

const TabsComponent = () => {
    return (
        <Tabs isFitted variant="enclosed">
            <TabList>
                <Tab _selected={{ color: 'orange', bg: 'blue.500' }}>Sign Up</Tab>
                <Tab _selected={{ color: 'orange', bg: 'blue.500' }}>Sign In</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Register/>
                </TabPanel>
                <TabPanel>
                    <Login/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default TabsComponent