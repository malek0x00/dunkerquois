import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Input, Space ,Button,Group, Center} from '@mantine/core';

function ListeDonnation() {
         return (  
            <div style={{marginLeft:"20px"}}>
                <h3> Liste des don </h3>
                <Space/>
                <Center>
                    <Group direction ="column">
                        <div>
                <div> <AcUnitIcon /> nom :                |num:            |location:  </div>  
               <div>  <AcUnitIcon /> nom :                |num:            |location:  </div>     
              <div>   <AcUnitIcon /> nom :                |num:            |location:  </div>
              <div> <AcUnitIcon /> nom :                |num:            |location:  </div>  
               <div>  <AcUnitIcon /> nom :                |num:            |location:  </div>     
              <div>   <AcUnitIcon /> nom :                |num:            |location:  </div>
                        </div>  
                   </Group> 
                </Center>
                 



            </div>

         );
     }
     
     export default ListeDonnation ;