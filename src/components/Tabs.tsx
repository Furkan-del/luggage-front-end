import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const TabsComponent = () => {
    return (
        <Tabs isFitted variant="enclosed">
            <TabList>
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 3</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <p>one!</p>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default TabsComponent