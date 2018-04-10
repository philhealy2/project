import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'react-router-dom/Link';
import Shopping from './shoplist';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';



const Header = (props) => 
<Router>
    <div className="header" >
         <h1>Cooking Corner</h1>
        <img src="chefs.jpg" />
            <nav id="bar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shoplist" className='Shopping'>Shopping List</Link></li>                  
                </ul>
            </nav>
    </div>
    </Router>

export default Header;


