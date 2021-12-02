import { Center, TextInput, Space, Button,Group } from '@mantine/core';
import React, { useRef,useState } from 'react';
import background from '../media/bck.jpg';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({

    button: {
      backgroundColor: '#00000000',
      color: '#000000',
      marginTop:20,
      marginRight:20,
      '&:hover': {
        backgroundColor: '#333E8E',
        color: '#FFFFFF',
    },
  }})



function Homepage() {
    const classes = useStyles();
    const searchref=useRef(null);

    function search(){
        alert(searchref.current.value);
    }
    
    return ( 

        <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
            <Group style={{display: 'flex', justifyContent:'flex-end'}}>
            <Button radius="md" className={classes.button} variant="light">about</Button>
            <Button radius="md" className={classes.button} style={useStyles} variant="light">community</Button>
            </Group>
            <Center style={{width:'100%', height:'100vh'}}>
            <TextInput ref={searchref} placeholder="search..." style={{width:'50%', marginTop:'-250px'}} size="lg" radius='xl' rightSection={<Button style={{backgroundColor:'#E5452F', marginLeft:'-45px'}} size='sm' radius='xl' onClick={search}><SearchIcon/></Button>}/>
            <Space h='ls'/>
            
            </Center>
        </div>
     );
}

export default Homepage;