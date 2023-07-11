import { FormControl, FormLabel, VStack ,Input, InputGroup, InputRightElement,Button} from '@chakra-ui/react'
import React, { useEffect, useState } from "react";


function Signup() {
    const[show,setShow]=useState();
    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[confirmpassword,setComfirmpassword]=useState();
    const[pic,setPic]=useState();
    const handleClick=()=>setShow(!show);
    const postDetails=()=>{};
    const submitHandler=()=>{};
    
    
    
  return (
    <VStack spacing="5px" color="black">
        <FormControl id="first-name" isRequired>
            <FormLabel>
            Name
            </FormLabel>
            <Input placeholder="Enter your name"
            onChange={(e)=>setName(e.target.value)}/>
        </FormControl>
        <FormControl id="email" isRequired>
            <FormLabel>
            Email
            </FormLabel>
            <Input placeholder="Enter your email"
            onChange={(e)=>setEmail(e.target.value)}/>
        </FormControl>
        <FormControl id="password" isRequired>
            <FormLabel>
            Password
            </FormLabel>
           <InputGroup>
        <Input 
        type={show? "text":"password"}
        placeholder="Enter your password"/>

<InputRightElement>
<Button h="1.75rem" size="sm"onClick={handleClick}>{
    show?"Hide":"Show"
}

</Button>
</InputRightElement>
</InputGroup>
            
 </FormControl>
 <FormControl id="confirmpassword" isRequired>
            <FormLabel>
            Confirmpassword
            </FormLabel>
           <InputGroup>
        <Input 
        type={show? "text":"confirmpassword"}
        placeholder="Confirm your password"/>

<InputRightElement>
<Button h="1.75rem" size="sm"onClick={handleClick}>{
    show?"Hide":"Show"
}

</Button>
</InputRightElement>
</InputGroup>
            
 </FormControl>
 <FormControl id="pic" isRequired>
            <FormLabel>
            Upload your pic
            </FormLabel>
            <Input type="file" p={1.5} accept="images/*"
            onChange={(e)=>postDetails(e.target.files[0])}/>
        </FormControl>
        <Button colorScheme='blue' width="100%" style={{marginTop:15}} onClick={submitHandler}>Sign up</Button>

        

    </VStack>
  )
}

export default Signup