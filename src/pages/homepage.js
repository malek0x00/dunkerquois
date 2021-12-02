import { Center, TextInput } from '@mantine/core';
import React from 'react';

function Homepage() {
    return ( 

        <div>
            <Center style={{width:'100%', height:'100vh'}}>
            <TextInput placeholder="search..." size="lg"/>
            
            </Center>
        </div>
     );
}

export default Homepage;