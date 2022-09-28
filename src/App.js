import './App.css';
import words from './Components/List.js';
import Cards from './Components/Cards/Cards.jsx';
import Header from './Components/Header/Header.jsx';


function App(props) {
  return (
    <div className="App">
      <Header/>
      <div className='wrap'>
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
        isSaved={word.isSaved}/>)
      }
      </div>
    </div>
  )
}

export default App;
