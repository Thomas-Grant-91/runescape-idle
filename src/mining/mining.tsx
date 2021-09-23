import { useState } from 'react';
import Card from '../card/card';
import mining from '../images/Mining.png';
function Mining() {
    const [miningLevel] = useState(5);
    return ( 
        <>
        <Card source={mining} skillName="Mining" skillLevel={miningLevel}/>  
        </>
    ) 
}


export default Mining;