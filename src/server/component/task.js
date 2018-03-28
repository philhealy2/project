import React, { Component } from 'react';
import logo from './logo.svg';


class task extends Component{
	render(){
		return(
			<div>
			<h1>Shopping List</h1>
			<p>Item Count:0</p>
			<ul>
			<li>Sample</li>
			</ul>
			<input type="text" placeholder="Enter todo"/>
			</div>
			);
	}
}
export default task;