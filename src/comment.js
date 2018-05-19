import React, { Component } from 'react';
import logo from './logo.svg';
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

    fetch('http://localhost:8080/api/comment/',{
        method: "PUT",
        body: JSON.stringify({
   'item' : itemValue
  }),
        headers: {
             'Content-Type': 'application/json',
        }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });

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
      
      <div className="body1">
     
      <ul class="items">

      <input type="text" placeholder="Enter a Review" ref={(input) => this.itemInput = input}/>
      <button onClick={this.addItem.bind(this)}>Add</button>
      {this.state.items.map((item,index) => {
        

        return (<Item id={index} key={index} item={item}  onRemove={() => this.removeItem(index)}/>)

         
        })
      }
      
      </ul>
     
      </div>
      );
  }
}
export default App;