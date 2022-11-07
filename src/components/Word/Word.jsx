import './word.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import words from "../List";
import './card.css';



export default function CardList(props){
    
const inputRef=useRef();
const [click, setClick]=useState(0);
const [newWords, setWords]=useState(words)


    const [next, setNext]=useState(0);
    
const countWords=()=>{
    setClick(click+1);
    const wordList=[...newWords];
    wordList[click].pressed=true;
    setWords(wordList);
}
    const handleLeft=()=>{
    setNext(next-1);
    inputRef.current.focus();
    inputRef.current.style.color='red';
    
    }
    const handleRight=()=>{
    setNext(next+1);
    inputRef.current.focus();
    inputRef.current.style.color='red';
    }


    if (next===words.length){
return <div>
<div className='card'>
<button onClick={handleLeft} className='arrowLeft'><i className="fa-solid fa-arrow-left"></i></button>
<div>
<div className='end'>Конец</div>
{next}/{words.length}</div>
</div>
Изучено {click} слов</div>
    }
    if (next===0){
        return <div>
        <div className='card'>
        
        <div>
        <Word countWords={countWords} {...words[next]}/>
        {next+1}/{words.length}</div>
        <button onClick={handleRight} className='arrowRight'><i className="fa-solid fa-arrow-right"></i></button>
        
        </div>
        Изучено {click} слов</div>
            }
            else{
    return <div>
    <div className='card'>
    <button onClick={handleLeft} className='arrowLeft'><i className="fa-solid fa-arrow-left"></i></button>
    <div>
    <Word countWords={countWords}  {...words[next]}/>
    {next+1}/{words.length}</div>
    <button onClick={handleRight} className='arrowRight'><i className="fa-solid fa-arrow-right"></i></button>
    
    </div>Изучено {click} слов</div>}

}

function Word({word, translation, transcription, countWords, pressed, setPressed}){
    
const inputRef=useRef(null);
    

    const handleChange=()=>{
countWords();
    }
    
    useEffect(()=>{
        inputRef.current.focus();
    }, [word])

    return(
        <div className="wordCard">
<div className="englishWord">
    {word}<br/>
</div>
<div>{transcription}</div>


<div>{pressed?<p ref={inputRef}>{translation}</p>:<button className='button' onClick={handleChange} ref={inputRef}>показать перевод</button>}</div>

</div>

    )
}