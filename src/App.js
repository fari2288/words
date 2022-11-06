import './App.css';
import './Components/Header/header.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
    } from "react-router-dom";
import words from './Components/List';
import Cards from './Components/Cards/Cards.jsx';
import CardList from './Components/Word/Word.jsx';
import './Components/Header/header.css';


import { useState } from 'react';


function App() {
  
  const [click, setWords]=useState(0);
  const addWords=()=>{
setWords(click+1);
  }



  return (
    <div className="App">
    <Router>
        <div className='menu'>
            <div className='header'>
                <div className='font'>English Words</div>
                  <ul className='links'>
                    <li>
                      <Link to='words'>
                  <p className='font'>Words</p></Link></li>
                <li><Link to='home'><p className='font'>List</p></Link></li></ul>
                
            </div>
            
            
            
        </div>
        <Routes>
            <Route path='/words' element={<CardList addWords={addWords}/>}/>
            <Route path='/home' />
        </Routes>
        </Router>
        
      <div className='wrap'><p>Изучено {click} слов</p>
      <div className='wrapper'>
      <div className='title'>
<div className='wordTitle'>Word</div>
<div className='transcriptionTitle'>Transcription</div>
<div className='translationTitle'>Translation</div>
<div className='tagTitle'>Tags</div>
      </div></div>
      {
        words.map((word, index)=>
        <Cards key={index}
        word={word.word} 
        transcription={word.transcription} 
        translation={word.translation} 
        tags={word.tags} 
        isSelected={word.isSelected} 
        isSaved={word.isSaved}
        />)
      }
      </div>
    </div>
  )
}

export default App;
