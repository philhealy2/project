import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

 class ContactForm extends React.Component {
      render() {
        return (
          <div className="container-fluid">
            <div className="row">
               <div className="col-sm-1" >
                <button type="button" className="btn btn-success">Add Contact</button>
              </div>              
              <div className="col-sm-3" >
                <input type="text" className="form-control" defaultValue="Enter name"/>
              </div>
              <div className="col-sm-3" >
                <input type="text" className="form-control" defaultValue="Enter address"/>
              </div>
              <div className="col-sm-2" >
                 <input type="text" className="form-control" defaultValue="Enter telephone"/>
              </div>                             
             </div>
          </div>
          );

      }
    }

    class Contact extends React.Component {
      render() {
        return (
            <div className="col-sm-3" >
              <div className="panel panel-primary">
                
                <div className="panel-body"> 
                  <p>Name:  { this.props.contact.name }</p>
                    <p>Ingredients:    { this.props.contact.ingredients }</p>
                    <p>Method:    { this.props.contact.method }</p>              
                </div>
                <div className="panel-footer"> 
                  <div className="btn-group btn-group-justified" role="group" aria-label="...">
                      <div className="btn-group" role="group">
                        <button type="button" className="btn btn-default">Edit</button>
                      </div>
                      <div className="btn-group" role="group">
                        <button type="button" className="btn btn-danger">Delete</button>
                      </div>
                  </div>                     
                </div>          
              </div>
            </div>
            ) ;
        }
    }

    class ContactList extends React.Component {
      render() {
          let contactRows = this.props.contacts.map(
                (c) => <Contact key={c.ingredients} contact={c} />
          );
          return (
            <div className="container-fluid contacts">
              <div className="row">
                 {contactRows}  
              </div>
              </div>
            ) ;
        }
    }

   

 
    

   class Header extends React.Component {
      render(){
    return (
      <header>
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

        </header>
    );
  }
}
 class RecipeApp extends React.Component {
      render() {
          return (
                <div className="jumbotron">
                   <Header noContacts={this.props.contacts.length} />
                  
                   <ContactList contacts={this.props.contacts}  />
                </div>

    

          );
      }
    }





export default RecipeApp;
