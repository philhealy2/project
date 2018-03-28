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
 
 let recipies = [
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


  const Router = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <RecipeApp/>
        <div className="container">
            <Switch>
                <Route path='/recipies/:id' component={ recipies } />
                <Redirect from='*' to='/' />
            </Switch>
        </div>
        <Footer />
     </div>
    </BrowserRouter>
  );
};

    ReactDOM.render((
        <Router/> 
    ), document.getElementById('root')) ;

 
   
///ReactDOM.render(<Router/>, <RecipeApp entries={entries}/>, document.getElementById('root'));
///registerServiceWorker();

