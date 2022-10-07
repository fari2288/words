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
            <Route exact path='/game' element={<CardList/>}/>
            <Route exact path='/home' element={<Cards/>}/>
            <Route path='/*' element={<NoMatch/>}/>
        </Routes>
        </Router>
    )
}

export default Header;