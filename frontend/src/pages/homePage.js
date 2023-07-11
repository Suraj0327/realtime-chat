import React from "react";
import {Container,Box,Text,Tab,TabList,TabPanels,TabPanel,Tabs} from "@chakra-ui/react";
import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";

const Homepage=()=>{
    return <Container maxW="xl"centerContent>
        <Box d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        border-width="1px">
            <Text fontSize="4xl" fontFamily="Work Sans" color="black"> Talk-Zone</Text>
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1%">
        <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab width="50%">login</Tab>
    <Tab width="50%">signup</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
     <Login></Login>
    </TabPanel>
    <TabPanel>
<Signup></Signup>
    </TabPanel>
  </TabPanels>
</Tabs>
        </Box>

    </Container>
};
export default Homepage;