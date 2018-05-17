<<<<<<< HEAD
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import buttons from './config/buttonsConfig';
import localCache from './localCache';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';

var request = require('superagent') ;
var status = '';

class Recipe extends React.Component {
        state = {
          id : this.props.recipe._id,
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
        let id = this.props.recipe._id
        if (!name || !ingredients || !method) {
           return;
        }
        this.setState({status : ''} )
        this.props.updateHandler(this.props.recipe.method,
              name, ingredients, method,id);
      };        

       handleDelete = (e) => {e.preventDefault();
        let name = "";
        let ingredients = "";
        let method = "";
      let id = this.props.recipe._id
        this.setState({status : 'delete'} )
        this.status = 'delete';
        this.props.updateHandler(this.props.recipe.method,
              name, ingredients, method,id);
        window.location.reload();
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



      render()  {

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
                      <input type="text" className="form-control1"
                         value={this.state.name}
                         onChange={this.handleNameChange} />,
                      <input type="text" className="form-control1"
                         value={this.state.ingredients}
                         onChange={this.handleIngredientsChange} />,
                      <input type="text" className="form-control1"
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
                        <div >
       </div>
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
 
    

 class RecipeList extends React.Component {

       state = {
        entries : []
    };

    componentDidMount() {
       
    fetch('http://localhost:8080/api/recipies',{
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      let entries = responseJson;
      this.setState({entries : 
              responseJson});
    })
    .catch((error) => {
      console.error(error);
    });
    }

    render() {
          let recipeRows = this.state.entries.map(
                (r) => <Recipe key={r.method} recipe={r}
                updateHandler={this.props.updateHandler} />
          );
           return (     
             <div className="container-fluid contacts">
              <div className="row">
                 {recipeRows}  
              </div>
               </div>
              // </div>
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

     state = {
        entries : []
    };

  updateRecipe = (key, n, i, m, p) => {
   if(n == '')
   {
      fetch('http://localhost:8080/api/recipies/' + p,{
        method: "DELETE",
        body: JSON.stringify({
   'id' : p,
   'name' : n,
   'ingredients' : i,
   'method' : m
  }),
        headers: {
             'Content-Type': 'application/json',
        }
    })
    .catch((error) => {
      console.error(error);
    });
   }
   else
   {
   fetch('http://localhost:8080/api/recipies/' + p,{
        method: "PUT",
        body: JSON.stringify({
   'id' : p,
   'name' : n,
   'ingredients' : i,
   'method' : m
  }),
        headers: {
             'Content-Type': 'application/json',
        }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      let entries = responseJson;
      this.setState({entries : 
              responseJson});
    })
    .catch((error) => {
      console.error(error);
    });
  }
}

    reload() {
       
    fetch('http://localhost:8080/api/recipies',{
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      let entries = responseJson;
      this.setState({entries : 
              responseJson});
    })
    .catch((error) => {
      console.error(error);
    });
    }

      render() {

        let entries = [];
          return (
                <div className="jumbotron">
                
                  <NameForm addHandler={this.addRecipe}/>
                   <RecipeList entries={entries}
                   updateHandler={this.updateRecipe}/>
              
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
           
           //this.props.addHandler(name,ingredients,method);
           this.setState({name: '', ingredients: '', method: ''});
          
        fetch('http://localhost:8080/api/recipies',{
        method: 'POST',
         body: JSON.stringify({
   'name' : name,
   'ingredients' : ingredients,
   'method' : method
  }),
        headers: {
            'Content-Type': 'application/json',
       }
      }).then((res) => res.json())
            .then((data) =>  console.log(data))
            .catch((err)=>console.log(err))

             alert('Thanks for entering a new Recipe: ' + name);
            e.preventDefault();
          }
        

        handleNameChange = (e) =>  this.setState({name: e.target.value});

        handleIngredientsChange = (e) => this.setState({ingredients: e.target.value});

        handleMethodChange = (e) =>  this.setState({method: e.target.value});



        render() {
        return (
          <div className="output">
            <div className="row">
              <h2> Add a new Recipe</h2>
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
              <div className="out" >
                <button type="button" className="out" onClick={this.handleSubmit}>Add New Recipe</button>
              </div>                         
             </div>
          </div>
          );

      }
    }


// class RecipeListItem extends React.Component {}
//     render() {
//         return (
//             <li> 
//                 <h2>{this.props.recipe.name}</h2> 
        
//             </li>
//         );
//     }
// }

// class RecipeLists extends React.Component {
//     shouldComponentUpdate(nextProps, nextState) {
//         if (this.props.list.length === nextProps.list.length ) {
//             return false ;
//         } else {
//             return true ;
//         }     
//     }

//     render() {
//         var items = this.props.list.map(function(item) {
//             return <RecipeListItem key={item.email} recipe={item} />;
//         });
//         return (
//             <ul>
//                 {items}
//             </ul>
//         );
//     }
// }

// class FiltetedRecipe extends React.Component {
//     state = {
//         searchText : ''
//     };

//     componentDidMount() {
//         request.get('http://localhost:3000/entries')
//             .end(function(error, res){
//                 if (res) {
//                     let entries = JSON.parse(res.text);
//                     localCache.populate(entries);
//                     this.setState({}) ;                
//                 } else {
//                     console.log(error );
//                 }
//             }.bind(this)); 
//     }

//     filterRecipes = (event) => {
//         event.preventDefault() ;
//         this.setState({searchText : 
//              event.target.value.toLowerCase()});
//     };

//     render() {
//         let updatedList = localCache.getAll().filter(
//           (item) => {
//              return item.name.toLowerCase().search(
//                 this.state.searchText) !== -1 ;                
//              }
//         );
//         return (
//             <div>
//                 <h1>Recipe List</h1>
//                 <input type="text" placeholder="Search" 
//                     onChange={this.filterRecipes} />
//                 <RecipeList list={updatedList} />
//             </div>
//         );
//     }
// }



export default RecipeApp;

=======
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

>>>>>>> origin/master
