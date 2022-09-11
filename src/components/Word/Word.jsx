import './word.css';
import words  from '../List';
import { useState } from 'react';

export default function Word(props){
    const [pressed, setPressed]=useState(false);

    const handleChange=()=>{
        setPressed(!pressed);
    }
    
    
    
    return(
        <div className="wordCard">
            
<div className="englishWord">
    {words[0].word}<br/>
</div>
<input onChange={handleChange} className='inputEnglish' value={pressed?words[0].translation:'Показать перевод'}>
    
    
</input>


    </div>
    )
}