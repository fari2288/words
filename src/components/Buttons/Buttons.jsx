import './buttons.css';
import Save from '../Save/Save';
import { useState } from 'react';

function Buttons(props) {
    const [pressed, setPressed]=useState(false);

    

    const handleChange=()=>{
        setPressed(!pressed);
    }

    

    const isSaved=props
    return (
        <div className='buttons'>
            {pressed?<Save isSaved={isSaved}/>:''}
<button  onClick={handleChange}  className='add'>cancel</button>

</div>
    )
}

export default Buttons;