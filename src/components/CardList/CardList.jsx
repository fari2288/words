import Word from "../Word/Word";
import { useState } from "react";
import words from "../List";
import './card.css';

export default function CardList(){

    const [next, setNext]=useState(0)
    const handleLeft=()=>{
      setNext(next-1);
    }
    const handleRight=()=>{
      setNext(next+1);
    }

    if (next===words.length){
return <div className="wrap"><div className='card'>
        
<button onClick={handleLeft} className='arrowLeft'><i className="fa-solid fa-arrow-left"></i></button>
<div className="word">

{next}/{words.length}</div>

</div></div>
    }
    if (next===0){
        return <div className='card'>
                
        
        <div>
        <div className="zero">Нажмите "Вперед"</div>
        
        {next}/{words.length}</div>
        <button onClick={handleRight} className='arrowRight'><i className="fa-solid fa-arrow-right"></i></button>
        </div>
            }
            else{
    return(
    <div className='card'>
        
      <button onClick={handleLeft} className='arrowLeft'><i className="fa-solid fa-arrow-left"></i></button>
      <div>
      <Word  {...words[next]}/>
      
      {next}/{words.length}</div>
      <button onClick={handleRight} className='arrowRight'><i className="fa-solid fa-arrow-right"></i></button>
    </div>)}
}
