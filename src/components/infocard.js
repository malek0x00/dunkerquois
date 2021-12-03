import { Text } from '@mantine/core';
import React from 'react';


function InfoCard(props) {
    return ( 
        <div style={{padding:'30px',width:'700px', height:'200px', backgroundColor:'#FCF7F7', borderRadius:'25px', margin:'50px'}}>
            <Text style ={{color:'#333E8E'}} size="xl" weight={700}>{props.title}</Text>
            <Text>{props.description}</Text>
        </div>
     );
}

export default InfoCard;