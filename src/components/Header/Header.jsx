import './header.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
    } from "react-router-dom";

import Cards from '../Cards/Cards';
import CardList from '../CardList/CardList';
import NoMatch from '../NoMatch/NoMatch'

function Header(){


    return(
        <Router>
        <div className='menu'>
            <nav className='header'>
                <div className='logo'><i className="fa-solid fa-book"></i></div>
                <div className='links'>
                <ul><li>
                <Link className='header__link' to='/game'>Карточки</Link>
                </li>
                </ul>
                <ul><li>
                <Link className='header__link' to='/home'>Главная страница</Link>
                </li>
                </ul></div>
            </nav>
            
            
            
        </div>
        <Routes>
            <Route exact path='/game' element={<CardList/>}/>
            <Route exact path='/home' element={<Cards/>}/>
            <Route path='/*' element={<NoMatch/>}/>
        </Routes>
        </Router>
    )
}

export default Header;