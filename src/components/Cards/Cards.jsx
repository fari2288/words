import './cards.css';
import './buttons.css';
import './cards.css';
import { useState } from 'react';
import { useRef } from "react";


function Cards({word, translation, transcription, tags}) {
    
const inputRef = useRef(null);
const [isEditMode, changeEditMode]=useState(false);
const isSelected={...word}
const [save, setSaved]=useState({word, translation});

function onClick(){
    changeEditMode(true);
}
function onCancel(){
    changeEditMode(false);
}
function onChangeWord(event){
setSaved({
    word: event.target.value,
    translation: save.translation,
})
}
function onChangeTranslation(event){
    setSaved({
        word: save.word,
        translation: event.target.value,
    })
    }
    const onSave=()=>{
        changeEditMode(false);
        
    }
    


    if(!isEditMode){
    return (
        
        <div className="wrapper">
            
        <div className={'row '+(isSelected?'selected':'')}>
        <div className="word">{save.word}</div>
        <div className="transcription">{transcription}</div>
        <div className="translation">{save.translation}</div>
        <div className="tags">{tags}</div>
    
        <div className='buttons'>
            
<button onClick={onClick}  className='fa-solid fa-pencil'></button>
<button className='fa-solid fa-basket-shopping'></button>
</div>
</div>
</div>
    );}
    else{
        return(
        <div className="wrapper">
            
        <div className='row'>
        <div className="word">
        <input ref={inputRef} value={save.word} onChange={onChangeWord}/>
        </div>
        <div className="transcription">{transcription} </div>
        <div className="translation">
        <input onChange={onChangeTranslation} value={save.translation} ></input></div>
        <div className="tags">{tags}</div>
    
        <div className='buttons'>
            <button className='save' onClick={onSave}>Save</button>
<button onClick={onCancel}  className='add'>cancel</button>

</div>
</div>
</div>
        )
    }}

    export default Cards;
