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
      
      <div id="wrapper">
 
      <h1 id="head">Shopping List</h1>
      
        <header id="menuToggle">
        <nav role='navigation'>
    
        <input type ='checkbox'/>
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
            <li class='active'><a href= '/~pth2/cgi-bin/lab7/index.html'>Home</a></li>
            <li><a href= "/~pth2/cgi-bin/lab7/fixtures.py">Fixtures</a></li>
            <li><a href= "/~pth2/cgi-bin/lab7/athlete.py">Event Look up</a></li>
    
            <li><a href='/~pth2/cgi-bin/lab7/club_search.py'>Clubs</a></li>
            <li><a href='/~pth2/cgi-bin/lab7/shop.py'>Merchandise</a></li>
            <li><a href='/~pth2/cgi-bin/lab7/logout.py'>Logout</a></li>
        </ul>
      
    
      </nav>
        
   
        </header>

    
      
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