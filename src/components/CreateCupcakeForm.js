import React from 'react';
import {RadioGroup, Radio} from 'react-radio-group'

class CreateCupcakeForm extends React.Component {
    constructor() {
      super();
      this.state = {
        selectedValue: 'chocolate'
      };
    }

    handleChange(value) {
      console.log(value);
      this.setState({selectedValue: value});
    }

    createCupcake(event) {
      console.log(this.type.value)

      event.preventDefault();
      console.log("gonna start baking");

      const cupcake = {
        type: this.selectedValue.value
      }
    }

  render() {
    return (
      <div>
        <h2>testing</h2>
        <form onSubmit={(e) => this.createCupcake(e)}>
          <RadioGroup name="cake" selectedValue={this.state.selectedValue} checked onChange={this.handleChange}>
            <Radio value="vanilla" />Vanilla Bean
            <Radio value="red-velvet" />Red Velvet
            <Radio value="chocolate" />Chocolate Truffle
          </RadioGroup>
          <button type="submit">+ Add Item</button>
        </form>
      </div>

    )
  }
}

export default CreateCupcakeForm;
