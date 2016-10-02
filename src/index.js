// import React from "react";
//
// import './css/style.css';
// import App from './components/App';


import React from 'react';
import { render } from "react-dom";
// import ReactDOM from 'react-dom';
import {RadioGroup, Radio} from 'react-radio-group';
//import {RadioGroup, Radio} from '../index.jsx';

let App = React.createClass({
  getInitialState() {
    // this.createSalad = this.createSalad.bind(this);
    return {selectedValue1: 'apple'};
  },

  handleChange1(value) {
    console.log(value);
    this.setState({selectedValue1: value});
  },

  handleChange2(value) {
    console.log(value);
    this.setState({selectedValue2: value});
  },


  createSalad(event) {
    event.preventDefault();
    console.log("gonna start baking");

    var salad = {
      type: this.state.selectedValue1,
      pizza: this.state.selectedValue2
    }
    console.log(salad.type);
    console.log(salad.pizza);
  },

  render() {
    return (
      <form action="submit" onSubmit={this.createSalad}>
        <RadioGroup
          name="fruit"
          selectedValue={this.state.selectedValue1}
          onChange={this.handleChange1}>
          <label>
            <Radio value="apple" />Apple
          </label>
          <label>
            <Radio value="orange" />Orange
          </label>
          <label>
            <Radio value="watermelon" />Watermelon
          </label>
        </RadioGroup>

        <RadioGroup
          name="pizza"
          selectedValue={this.state.selectedValue2}
          onChange={this.handleChange2}>
          <label>
            <Radio value="cheese" />cheese
          </label>
          <label>
            <Radio value="tomato" />tomato
          </label>
          <label>
            <Radio value="pepperoni" />pepperoni
          </label>
        </RadioGroup>

        <button>Click me</button>
      </form>

    );
  }
});


render(<App />, document.querySelector("#main"));
