import './cards.css';
import '../Buttons/Buttons';
import Buttons from '../Buttons/Buttons';
import Save from '../Save/Save';

function Cards(props) {
const {isSelected, isSaved}=props
    return (
        <div className="wrapper">
        <div className={'row ' + (isSelected?'selected':'')}>
        <div className="word">{props.word}</div>
        <div className="transcription">{props.transcription}</div>
        <div className="translation">{props.translation}</div>
        <div className="tags">{props.tags}</div>
        {isSaved?<Save isSaved={isSaved}/>:''}
        <Buttons/>
        </div>
        </div>
    );
    }

    export default Cards;
