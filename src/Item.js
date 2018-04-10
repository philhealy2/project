import React, { Component } from 'react';

export default class Item extends Component{
	
	render(){
		let {id,item,onRemove}=this.props
		return (
			<li>{item} <button onClick={() => onRemove(id)}>Remove</button></li>
			)
	}
	
}