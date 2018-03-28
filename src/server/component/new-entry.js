import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


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
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default EntryApp;

