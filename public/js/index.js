import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RecipeApp from './App';
import registerServiceWorker from './registerServiceWorker';
import http from 'http';
import dotenv from 'dotenv';

import mongoose from 'mongoose';
import {loadEntries} from './entriesData';
import FiltetedRecipe from './App';
import Header from './header';
import Footer from './footer';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
// import App from './component/shoplist/App';


// dotenv.config()
//  const port = process.env.PORT
// // // Configure our HTTP server to respond with Hello World to all requests.
//  const server = http.createServer((req, res) => {
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end('Hello  World!');
//  });

//  server.listen(port);

// // // Put a friendly message on the terminal
//  console.log(`Server running at ${port}`);




    let entries = [
        { name: 'Carbonara',
    ingredients: 'Pasta, Cheese, Eggs, Bacon, Philidelphia Cheese',
    method: 'Boil pasta, mix ingredients. Bake in oven'
  },
  {
    name: 'Asian Stir Fry',
    ingredients:'Noodles, Chicken, Vegetables of choice',
    method: 'Fry the chicken in the wok. Add in the Vegetables. Once Noodles cooked as in and mix together'
  },
  {
    name: 'Chocolate Cake',
    ingredients:'200g Cooking Chocolate, Flour, Eggs, Sugar, Butter',
    method:'Cream the butter and sugar. Melt the Chocolate, add in the eggs to creamed mixture. Bake in the oven for 45mins'
  }
];

   
ReactDOM.render(<RecipeApp entries={entries}/>, document.getElementById('root'));
registerServiceWorker();

