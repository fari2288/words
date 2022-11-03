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
            <nav className='header'>
                <ul>
                <li>
                <div className='logo'>
                    <i className="fa-solid fa-book"></i></div>
                </li>
                </ul>
                <ul>
                <div className='links'>
                    
                <li>
                <Link className='header__link' to='/game'>Карточки</Link>
                </li>
                <li>
                <Link className='header__link' to='/home'>Главная страница</Link>
                </li>
                </div>
                </ul>
            </nav>
            
            
            
        </div>
        <Routes>
            <Route path='/game' element={<CardList addWords={addWords}/>}/>
            <Route path='/home' />
            <Route path='/*' />
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
