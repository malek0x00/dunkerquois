import React, {useRef} from 'react';
import {Group, TextInput,Button} from '@mantine/core';
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


function NavBar() {
    const classes = useStyles();
    const searchref=useRef(null);
    function search(){
        alert(searchref.current.value);
    }
    return ( 
        <div style={{backgroundColor:"#00000000", width:'100%',height:'50px', position:'fixed', top:0,left:0,zIndex:9, marginBottom:'60px'}}> 
        <Group grow>
            <div>
            <TextInput ref={searchref} placeholder="search..." style={{width:'50%', marginTop:'20px', marginLeft:'20px'}} size="lg" radius='xl' rightSection={<Button style={{backgroundColor:'#E5452F', marginLeft:'-45px'}} size='sm' radius='xl' onClick={search}><SearchIcon/></Button>}/>
            
            </div>
            <div style={{display:'flex', justifyContent:'right'}}>
            
            <Button radius="md" className={classes.button} variant="light">about</Button>
            <Button radius="md" className={classes.button} style={useStyles} variant="light">community</Button>
            
            </div>
        </Group>
        </div>

     );
}

export default NavBar;