import { useState } from 'react';
import Card from '../card/card';
import woodcutting from '../images/Woodcutting_icon.png';
function Woodcutting() {
    const [woodCuttingLevel] = useState(5);
    return ( 
        <>
        <Card source={woodcutting} skillName="Woodcutting" skillLevel={woodCuttingLevel}/>  
        </>
    ) 
}


export default Woodcutting;