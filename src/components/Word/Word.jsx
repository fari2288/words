import './word.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import words from "../List";
import './card.css';



export default function CardList(props){
    
const inputRef=useRef();


    const [next, setNext]=useState(0);
    
    const handleLeft=()=>{
    setNext(next-1);
    inputRef.current.focus();
    inputRef.current.style.color='red'
    props.addWords();
    }
    const handleRight=()=>{
    setNext(next+1);
    inputRef.current.focus();
    inputRef.current.style.color='red';
    props.addWords();
    }


function Word({word, translation}){
    
    const [pressed, setPressed]=useState(false);

    const handleChange=()=>{
        setPressed(!pressed);
    }
    
    useEffect(()=>{
        setPressed(false)
        inputRef.current.focus();
    }, [word])

    return(
        <div className="wordCard">
<div className="englishWord">
    {word}<br/>
</div>
<input ref={inputRef} onClick={handleChange} className='inputEnglish' value={pressed?translation: 'Показать перевод'}>
</input>
    </div>
    )
}

    if (next===words.length){
return <div>
<div className='card'>
<button onClick={handleLeft} className='arrowLeft'><i className="fa-solid fa-arrow-left"></i></button>
<div>
<div className='end'>Конец</div>
{next}/{words.length}</div>
</div></div>
    }
    if (next===0){
        return <div>
        <div className='card'>
        
        <div>
        <Word  {...words[next]}/>
        {next}/{words.length}</div>
        <button onClick={handleRight} className='arrowRight'><i className="fa-solid fa-arrow-right"></i></button>
        
        </div></div>
            }
            else{
    return <div>
    <div className='card'>
    <button onClick={handleLeft} className='arrowLeft'><i className="fa-solid fa-arrow-left"></i></button>
    <div>
    <Word  {...words[next]}/>
    {next}/{words.length}</div>
    <button onClick={handleRight} className='arrowRight'><i className="fa-solid fa-arrow-right"></i></button>
    
    </div></div>}

}
