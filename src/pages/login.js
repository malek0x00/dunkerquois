import { Input, Space ,Button,Group} from '@mantine/core';
import Background from '../media/2.jpg';

function Login () {
    return ( 
        <div style ={{ backgroundImage:`url(${Background})`, BackgroundSize :"cover"  }}>
               <div style={{width:'100%',height:'100vh'}}>
                   <div style={{display:"flex", justifyContent:"flex-end", width:'100%'}}>
                   <div  style={{
                        backgroundColor: '#ffffff4D',
                        width: '400px',
                        height: '450px',
                        borderRadius:'25px',
                        marginTop:'10%',
                        marginRight:'5%',
                       
                             }}>
                                 <div style ={{marginTop: '40px',
                                                padding:'20px',
                                                 }}>
                                 <h4>Adresse electronique </h4>                    
                                 <Input  type="text" placeholder="entrer votre email"   marginBottom='20px' radius="xl"/>
                                 <Space/>
                                 <h4>Mot de passe </h4>
                                 <Input  type="password" placeholder="password" radius="xl" />
                                 <Space />
                                 <a href="#" style= {{color:"black"}} >mot de passe oublier ?</a>
                                 <Space />
                                <Group>
                                 <Button size ="xs" uppercase color="blue" style={{width:150}} >
                                     se connecter

                                 </Button>
                                
                                
                                 <Button size ="xs" uppercase color="blue" style={{width:150}} >
                                     créer un compte

                                 </Button>
                                 </Group>
                                 </div>


                   </div>
                   </div>
               </div>

        </div>

     );
}

export default Login ;