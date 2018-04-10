import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RecipeApp from './App';
import Shopping from './shoplist';
import registerServiceWorker from './registerServiceWorker';
import http from 'http';
import dotenv from 'dotenv';
import Link from 'react-router-dom/Link';
import mongoose from 'mongoose';
import Footer from './footer';
import './App.css';
import { BrowserRouter, Route,Router, Redirect, Switch } from 'react-router-dom';
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

// this component will be rendered by our <___Router>
const App = () => (
  <div>
    <Header />
    <Main />
    <Footer/>
  </div>
)

const Main = () => (
  <main>
    <Switch>
      <Route path='/recipe' component={RecipeApp}/>
      <Route path='/shoplist' component={Shopping}/>
    </Switch>
  </main>
)

const Header = () => (
  <header>
  <div className="header" >
         <h1>Cooking Corner</h1>
        <img src="chefs.jpg" />
    </div>
    <nav id='bar'>
      <ul>
        <li><Link to='/recipe'>Add Recipe</Link></li>
        <li><Link to='/shoplist'>Shopping List</Link></li>
      </ul>
    </nav>
  </header>
)

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
