import  NavBar  from '../components/bar';
import React from 'react';
import InfoCard from '../components/infocard';

function ResultPage() {
    return ( 
        <div>
            <NavBar/>
            <div style={{marginTop:90}}>
                <InfoCard title='eds' description='eds'/>
                <InfoCard title='eds' description='eds'/>
                <InfoCard title='eds' description='eds'/>
                <InfoCard title='eds' description='eds'/>
            </div>

        </div>

     );
}

export default ResultPage;