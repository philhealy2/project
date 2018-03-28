import _ from 'lodash';
import React, { Component } from 'react';


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
export default NameForm;