import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './test/StubApi.js';
import buttons from './config/buttonsConfig';



class Recipe extends React.Component {
        state = {
          status : '',
          name: this.props.recipe.name,
          ingredients: this.props.recipe.ingredients,
          method: this.props.recipe.method
        };

        handleEdit = () =>  this.setState({ status : 'edit'} );
        handleSave = (e) => {e.preventDefault();
        let name = this.state.name.trim();
        let ingredients = this.state.ingredients.trim();
        let method = this.state.method.trim();
        if (!name || !ingredients || !method) {
           return;
        }
        this.setState({status : ''} )
        this.props.updateHandler(this.props.contact.method,
              name, ingredients, method);
      };                               
          handleCancel = () => {
              this.setState({ status : '', 
                    name: this.props.recipe.name,
                    ingredients: this.props.recipe.ingredients,
                    method: this.props.contact.method} ) ;
          };                
          handleNameChange = (e) =>  this.setState({name: e.target.value});

          handleAddressChange = (e) => this.setState({ingredients: e.target.value});  
          handlePhoneNumChange = (e) =>  
                   this.setState({method: e.target.value});

      render() {
      
             let activeButtons = buttons.normal ;
             let leftButtonHandler = this.handleEdit ;
             let rightButtonHandler = null ;
             let fields = [
                     <p key={'name'}>{this.state.name}</p>,
                     <p key={'ingredients'} >{this.state.ingredients}</p>,
                     <p key={'method'} >{this.state.method}</p>,
                    ] ;

                if (this.state.status === 'edit' ) {
                   activeButtons = buttons.edit ;
                   leftButtonHandler = this.handleSave;
                   rightButtonHandler = this.handleCancel ;
                   fields = [
                      <input type="text" className="form-control"
                         value={this.state.name}
                         onChange={this.handleNameChange} />,
                      <input type="text" className="form-control"
                         value={this.state.ingredients}
                         onChange={this.handleIngredientsChange} />,
                      <input type="text" className="form-control"
                         value={this.state.method}
                         onChange={this.handleMethodChange} />
                   ] ;
               }    
              return (
                <div className="col-sm-3" >
                  <div className="panel-body">
                      
                        <div className="panel-body"> 
                          {fields}            
                        </div>
                        <div className="panel-footer"> 
                          <div className="btn-group btn-group-justified" role="group" aria-label="...">
                              <div className="button" role="group">
                                <button type="button" 
                                     className={'btn ' + activeButtons.leftButtonColor} 
                                      onClick={leftButtonHandler} >
                                     {activeButtons.leftButtonVal}
                                </button>
                              </div>
                              <div className="button" role="group">
                               <button type="button" 
                                     className={'btn ' + activeButtons.rightButtonColor} 
                                      onClick={rightButtonHandler} >
                                     {activeButtons.rightButtonVal}
                                </button>  
                              </div>
                          </div>                     
                        </div>          
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

 class RecipeList extends React.Component {
      render() {
          let recipeRows = this.props.entries.map(
                (r) => <Recipe key={r.method} recipe={r}
                updateHandler={this.props.updateHandler} />
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
  updateRecipe = (key, n, i, m) => {
    api.update(key,n,i,m);
    this.setState({});
  }
      render() {
        let entries = api.getAll();
          return (
                <div className="jumbotron">
                   <Header noEntries={this.props.entries.length} />
                  <NameForm />
                   <RecipeList entries={entries}
                   updateHandler={this.updateRecipe}/>
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
