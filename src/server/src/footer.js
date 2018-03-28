import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => 
    <footer className="footer">
        <small>
        <p>Created by: Phil Healy</p>
        <p>Contact information: <a href="mailto:someone@hotmail.com">
        philhealy@myemail.com</a>.</p>
    
        </small>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                 <li><Link to="#Top">Top of Page</Link></li>
                <li><Link to="./component/shoplist/app">Shopping List</Link></li>
                
            </ul>
        </nav>
    </footer>

export default Footer; 