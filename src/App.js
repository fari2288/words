import './App.css';
import words from './Components/List.jsx';
import Cards from './Components/Cards.jsx';

function App(props) {
  return (
    <div className="App">
      <div className='title'>
<div className='wordTitle'>Word</div>
<div className='transcriptionTitle'>Transcription</div>
<div className='translationTitle'>Translation</div>
<div className='tagTitle'>Tags</div>
      </div>
      {
        words.map((word)=>
        <Cards word={word.word} transcription={word.transcription} translation={word.translation} tags={word.tags} isSelected={word.isSelected} isSaved={word.isSaved}/>)
      }
      
    </div>
  );
}

export default App;
