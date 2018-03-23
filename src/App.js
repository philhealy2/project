import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



    class Recipe extends React.Component {
      render() {
        return (
            <div className="col" >
              <div className="panel">
                
                <div className="panel-body"> 
                  <p><h3>Name:</h3>  { this.props.recipe.name }</p>
                    <p><h3>Ingredients:</h3>    { this.props.recipe.ingredients }</p>
                    <p><h3>Method:</h3>    { this.props.recipe.method }</p>              
                
                
                  <div className="btn-group btn-group-justified" role="group">
                      <div className="btn-group" role="group">
                        <button type="button" className="btn btn-default">Modify</button>
                      <button type="button" className="btn btn-danger">Delete</button>
                    </div>
                      </div>
                                     
                </div>          
              </div>
            </div>
            ) ;
        }
    }

    class RecipeList extends React.Component {
      render() {
          let recipeRows = this.props.entries.map(
                (r) => <Recipe key={r.ingredients} recipe={r} />
          );
          return (
            <div className="container-fluid contacts">
              <div className="row">
                 {recipeRows}  
              </div>
              </div>
            ) ;
        }
    }

   

 
    


   class Header extends React.Component {
      render(){
    return (
      
        <div class="header">
        <h1>Cooking Corner</h1>
        <img src="chefs.jpg" />
       <nav id="bar">
        <ul>
         <li><a href= "App.js"> Home </a></li>
            <li><a href= "./info/initial-entries.js"> Recipes </a></li>
            <li><a href= "./elements/add.js"> Add New</a></li>
            <li><a href= "shoplist.js"> Shopping List </a></li>
        </ul>    
      </nav>
      </div>



      
    );
  }
}
class File extends React.Component {
      render(){
    return (
      
        <div class="head">
        <footer>
  <p>Created by: Phil Healy</p>
  <p>Contact information: <a href="mailto:someone@hotmail.com">
  philhealy@myemail.com</a>.</p>
  <a href="#Top">Click here to return to top of the page</a>
</footer>
      </div>



      
    );
  }
}


 class RecipeApp extends React.Component {
      render() {
          return (
                <div className="jumbotron">
                   <Header noEntries={this.props.entries.length} />
                  <NameForm noEntries={this.props.length}/>
                  
                   <RecipeList entries={this.props.entries}/>
                   <File noEntries={this.props.length}/>

                </div>
                 );
      }
    }
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Thanks for entering a new Recipe: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label class="form">
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Ingredients:   
             <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Method:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button onClickC="submit()" >Submit </button>
        <button onClick="clear()">Clear</button>
      </form>
    );
  }
}





export default RecipeApp;
