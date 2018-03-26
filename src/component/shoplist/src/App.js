import React, { Component } from 'react';
//import logo from './logo.svg';
import Item from './Item';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state ={
      items:[]
    }
    this.ItemInput=""
  }

  addItem(){
    let itemValue= this.itemInput.value
    let newItems= this.state.items

    newItems.push(itemValue)
   
   
    this.setState({
      items:newItems
    })
    //reset Value
    this.itemInput.value =""

    //set focus to input
    this.itemInput.focus()

  }
  
  removeItem(id){
    let items =this.state.items.filter ((item,index) =>{
      return id!==index

    })
    this.setState({
      items:items
    })
    
  }

   removeTodo(id) {
        const remainder = this.state.items.filter(item => item.id !== id);
        this.setState({items: remainder});
    }

  render(){
    return(
      
      <div>
      <header id="head">
      <h1>Shopping List</h1></header>
    
      
      <div className="body">
      <p>Item Count: {this.state.items.length}</p> 
      <ul class="item">

      <input type="text" placeholder="Enter items" ref={(input) => this.itemInput = input}/>
      <button onClick={this.addItem.bind(this)}>Add To List</button>
      {this.state.items.map((item,index) => {
        

        return (<Item id={index} key={index} item={item}  onRemove={() => this.removeItem(index)}/>)

         
        })
      }
      
      </ul>
     
      </div>
      </div>
      );
  }
}
export default App;