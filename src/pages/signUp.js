import { Input, Space ,Button,Group ,Select} from '@mantine/core';
import Background from '../media/2.jpg';

function SignUp () {
    return ( 
        <div style ={{ backgroundImage:`url(${Background})`, BackgroundSize :"cover"  }}>
               <div style={{width:'100%',height:'100vh'}}>
                   <div style={{display:"flex", justifyContent:"flex-end", width:'100%'}}>
                   <div  style={{
                        backgroundColor: '#ffffff4D',
                        width: '400px',
                        height: '550px',
                        borderRadius:'25px',
                        marginTop:'4%',
                        marginRight:'5%',

                        
                       
                             }}>
                                 <div style ={{marginTop: '40px',
                                                padding:'20px',
                                                 }}>
                                <h4>Nom et prenom </h4>                    
                                 <Input  type="text" placeholder="votre nom et prenom"   marginBottom='20px' radius="xl"/>                    
                                 <h4>Adresse electronique </h4>                    
                                 <Input  type="text" placeholder="entrer votre email"   marginBottom='20px' radius="xl"/>
                                 <Space/>
                                 <h4>Mot de passe </h4>
                                 <Input  type="password" placeholder="password" radius="xl" />
                                 <Space />
                                 <label>
        <h4> Role</h4>
          <Select 
         
          placeholder=" choisir un role"
           data={[
               {value:'capitain', label:'capitain'},
               {value:'sauveteur', label:'sauveteur'},
               {value:'sauvée', label:'sauvée'},
               {value:'expert', label:'expert'},
           ]}>
          </Select>
        </label>
        <Space/>
                                 <Group>
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

export default SignUp  ;