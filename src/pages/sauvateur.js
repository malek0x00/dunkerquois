import { Col, Grid, Paper,Group, Text, Badge, Space } from '@mantine/core';
import React from 'react';
import InfoCard from '../components/infocard';

function Sauvateur() {
    return ( 
        <div>
            <Grid columns={12} style={{height:'100vh',backgroundColor:'#f9f9f9'}}>

                <Col span={5} style={{}}>
                <Group direction="column" style={{margin:50, display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Paper padding="md" shadow="lg" style={{backgroundColor:'#FFFFFF', width:400,height:200,marginTop:'50px'}}>
                        <div style={{borderStyle:'solid',borderWidth:'1px',borderColor:'#d3d3d3',backgroundColor:'#FFFFFF', width:'150px',height:'150px',borderRadius:'100px',marginLeft:'100px',marginTop:'-80px'}}>

                        </div>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Group direction='column'>
                        <Text size="xl">Title</Text>
                        <Text>description</Text>
                        </Group>
                        </div>
                    </Paper>
                    <Paper padding="md" shadow="lg" style={{backgroundColor:'#FFFFFF', width:400,height:100}}>
                    <Group>
                    <Badge variant="filled" color='yellow'>Nombre de mission</Badge>
                    <Space w='xl'/>
                    <Space w='xl'/>
                    <Space w='xl'/>
                    <Badge variant="filled" color='green'>voir plus</Badge>
                    </Group>
                    <Space w='xl'/>
                    <Text size="xl">Number</Text>
                    </Paper>
                    <Paper padding="md" shadow="lg" style={{backgroundColor:'#FFFFFF', width:400,height:100}}>
                    <Group>
                    <Badge variant="filled" color='yellow'>Nombre de mission</Badge>
                    <Space w='xl'/>
                    <Space w='xl'/>
                    <Space w='xl'/>
                    <Badge variant="filled" color='green'>voir plus</Badge>
                    </Group>
                    <Space w='xl'/>
                    <Text size="xl">Number</Text>
                    </Paper>
                </Group>
                </Col>

                <Col span={7} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Paper padding="md" shadow="lg" style={{backgroundColor:'#FFFFFF', width:700,height:400,marginTop:'-30px',}}>
                    <InfoCard title="quoi" description="de la fuck"/>
                </Paper>

                </Col>
                
            </Grid>
        </div>
     );
}

export default Sauvateur;