import Word from "../Word/Word";
import { useState } from "react";
import words from "../List";

export default function CardList(props){

    const [next, setNext]=useState(0)
    const handleLeft=()=>{
      setNext(next-1);
    }
    const handleRight=()=>{
      setNext(next+1);
    }

    if (next===words.length){
return <div className='card'>
        
<button onClick={handleLeft} className='arrowLeft'><i className="fa-solid fa-arrow-left"></i></button>
<div>
<Word />

{next}/{words.length}</div>

</div>
    }
    if (next===0){
        return <div className='card'>
                
        
        <div>
        <Word />
        
        {next}/{words.length}</div>
        <button onClick={handleRight} className='arrowRight'><i className="fa-solid fa-arrow-right"></i></button>
        </div>
            }
            else{
    return(
    <div className='card'>
        
      <button onClick={handleLeft} className='arrowLeft'><i className="fa-solid fa-arrow-left"></i></button>
      <div>
      <Word />
      
      {next}/{words.length}</div>
      <button onClick={handleRight} className='arrowRight'><i className="fa-solid fa-arrow-right"></i></button>
    </div>)}
}
