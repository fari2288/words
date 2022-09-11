import './cards.css';
import './buttons.css';
import { useState } from 'react';
import Save from '../Save/Save';


function Cards(props) {
    
const {isSelected}=props;
const [pressed, setPressed]=useState(false);



    const handleChange=()=>{
        setPressed(!pressed);
    }
    
    
    const isSaved=props;

    
    return (
        
        <div className="wrapper">
            
        <div className={'row ' + (isSelected?'selected':'')}>
        <div className="word">{pressed?<input defaultValue={props.word} ></input>:props.word}</div>
        <div className="transcription">{props.transcription}</div>
        <div className="translation">{pressed?<input  defaultValue={props.translation} ></input>:props.translation}</div>
        <div className="tags">{props.tags}</div>
    
        <div className='buttons'>
            {pressed?<Save isSaved={isSaved}/>:''}
<button onClick={handleChange}  className='add'>{pressed?'cancel':<i className="fa-solid fa-pencil"></i>}</button>
<button className='delete'>{pressed?'':<i className="fa-solid fa-basket-shopping"></i>}</button>
</div>
</div>
</div>
    );
    }

    export default Cards;
