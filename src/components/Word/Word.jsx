import './word.css';
import { useState } from 'react';
import { useEffect } from 'react';


export default function Word({word, translation}){
    const [pressed, setPressed]=useState(false);

    const handleChange=()=>{
        setPressed(!pressed);
    }
    
    useEffect(()=>{
        setPressed(false)
    }, [word])
    
    return(
        <div className="wordCard">
            
<div className="englishWord">
    {word}<br/>
</div>
<input onClick={handleChange} className='inputEnglish' value={pressed?translation: 'Показать перевод'}>
    
    
</input>


    </div>
    )
}