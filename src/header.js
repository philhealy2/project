import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';


const Header = (props) => 
    <div className="header" >
         <h1>Cooking Corner</h1>
        <img src="chefs.jpg" />
            <nav id="bar">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><a href={"./.js"}>Shopping List</a></li>                  
                </ul>
            </nav>
    
    </div>

export default Header;


//// class Head extends React.Component {
//       render(){
//     return (
      
//         <div class="header">
//         <h1>Cooking Corner</h1>
//         <img src="chefs.jpg" />
//        <nav id="bar">
//         <ul>
//          <li><a href= "App.js"> Home </a></li>
            
//             <li><a href= "./elements/add.js"> Add New</a></li>
//             <li><a href= "./component/shoplist/src/App.js"> Shopping List </a></li>
//         </ul>    
//       </nav>
//       </div>



      
  //   );
  // }