import React, { Component } from 'react';
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
        this.props.updateHandler(this.props.recipe.method,
              name, ingredients, method);
      };        
       handleDelete = (e) => {e.preventDefault();
        let name = "";
        let ingredients = "";
        let method = "";
      
        this.setState({status : ''} )
        this.props.updateHandler(this.props.recipe.method,
              name, ingredients, method);
      };                                
          handleCancel = () => {
              this.setState({ status : '', 
                    name: this.props.recipe.name,
                    ingredients: this.props.recipe.ingredients,
                    method: this.props.recipe.method} ) ;
          };                
          handleNameChange = (e) =>  this.setState({name: e.target.value});

          handleIngredientsChange = (e) => this.setState({ingredients: e.target.value});  
          handleMethodChange = (e) =>  
                   this.setState({method: e.target.value});

      render() {
      
             let activeButtons = buttons.normal ;
             let leftButtonHandler = this.handleEdit ;
             let rightButtonHandler = this.handleDelete ;
             let fields = [
                     <p key={'name'}>Name: {this.state.name}</p>,
                     <p key={'ingredients'}>Ingredients:  {this.state.ingredients}</p>,
                     <p key={'method'} >Method:  {this.state.method}</p>,
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
            
            <li><a href= "./elements/add.js"> Add New</a></li>
            <li><a href= "./component/shoplist/src/App.js"> Shopping List </a></li>
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
  addRecipe = (key, n, i, m) => {
           api.add(key, n,i,m) ;
           this.setState({});
        };
  updateRecipe = (key, n, i, m) => {
    api.update(key,n,i,m);
    this.setState({});
  }
      render() {
        let entries = api.getAll();
          return (
                <div className="jumbotron">
                   <Header noEntries={this.props.entries.length} />
                  <NameForm addHandler={this.addRecipe}/>
                   <RecipeList entries={entries}
                   updateHandler={this.updateRecipe}/>
                   <File noEntries={this.props.length}/>
                   </div>
                 );
      }
    }
  class NameForm extends React.Component {
     state = { name: '', ingredients: '', method : ''};

       handleSubmit = (e) => {
             e.preventDefault();
             let name = this.state.name.trim();
             let ingredients = this.state.ingredients.trim();
             let method = this.state.method.trim();
             
             this.props.addHandler(name,ingredients,method);
             this.setState({name: '', ingredients: '', method: ''});
             alert('Thanks for entering a new Recipe: ' +name);
              e.preventDefault();
          }

          handleNameChange = (e) =>  this.setState({name: e.target.value});

          handleIngredientsChange = (e) => this.setState({ingredients: e.target.value});

          handleMethodChange = (e) =>  this.setState({method: e.target.value});


          render() {
          return (
            <div className="container-fluid">
              <div className="row">
                             
                <div className="col-sm-3" >
                   <input type="text" className="form-control" 
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                   />
                </div>
                <div className="col-sm-3" >
                   <input type="text" className="form-control"
                        placeholder="Ingredients"
                        value={this.state.ingredients}
                        onChange={this.handleIngredientsChange}
                   />
                 </div>
                <div className="col-sm-2" >
                   <input type="text" className="form-control" 
                        placeholder="Method"
                        value={this.state.method}
                        onChange={this.handleMethodChange}
                   />
                </div>    
                <div className="col-sm-2" >
                  <button type="button" className="btn btn-success" onClick={this.handleSubmit}>Add New Recipe</button>
                </div>                         
               </div>
            </div>
            );

        }
      }


export default RecipeApp;

