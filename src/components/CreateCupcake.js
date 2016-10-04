import React from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

class CreateCupcake extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOptionCake: 'vanilla',
      selectedOptionIcing: 'vanilla',
      toppings: []
    }
    this.handleOptionChangeCake = this.handleOptionChangeCake.bind(this);
    this.handleOptionChangeIcing = this.handleOptionChangeIcing.bind(this);
    this.toppingsChanged = this.toppingsChanged.bind(this)
  }

  componentDidMount() {
    // Add orange and remove watermelon after 5 seconds
    setTimeout(function() {
      this.setState({
        value: ['apple','orange']
      });
    }.bind(this), 5000);
  }

  handleOptionChangeCake(changeEvent) {
    this.setState({selectedOptionCake: changeEvent.target.value});
  }

  handleOptionChangeIcing(changeEvent) {
    this.setState({selectedOptionIcing: changeEvent.target.value});
  }

  toppingsChanged(newToppings) {
    this.setState({
      toppings: newToppings
    });
  }

  createCupcake(event) {
    event.preventDefault();
    console.log("gonna start baking");

    const cupcake = {
      cakeType: this.state.selectedOptionCake,
      cakeIcing: this.state.selectedOptionIcing,
      toppings: this.state.toppings
    }

    console.log(cupcake);

    this.props.addCupcake(cupcake);
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={(e) => this.createCupcake(e)}>
          <h3>Choose a Cake Type</h3>
          <div className="radio">
            <label>
              <input type="radio" value="vanilla"
                            checked={this.state.selectedOptionCake === 'vanilla'}
                            onChange={this.handleOptionChangeCake} />
                          Vanilla Bean
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="red-velvet"
                            checked={this.state.selectedOptionCake === 'red-velvet'}
                            onChange={this.handleOptionChangeCake} />
                          Red Velvet
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="chocolate"
                            checked={this.state.selectedOptionCake === 'chocolate'}
                            onChange={this.handleOptionChangeCake} />
                          Chocolate Truffle
            </label>
          </div>
          <h3>Choose a Icing Type</h3>
            <div className="radio">
              <label>
                <input type="radio" value="vanilla"
                              checked={this.state.selectedOptionIcing === 'vanilla'}
                              onChange={this.handleOptionChangeIcing} />
                            Vanilla Buttercream
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="cream-cheese"
                              checked={this.state.selectedOptionIcing === 'cream-cheese'}
                              onChange={this.handleOptionChangeIcing} />
                            Cream Cheese
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="chocolate"
                              checked={this.state.selectedOptionIcing === 'chocolate'}
                              onChange={this.handleOptionChangeIcing} />
                            Chocolate Buttercream
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="pink"
                              checked={this.state.selectedOptionIcing === 'pink'}
                              onChange={this.handleOptionChangeIcing} />
                            Pink Buttercream
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="peanut-butter"
                              checked={this.state.selectedOptionIcing === 'peanut-butter'}
                              onChange={this.handleOptionChangeIcing} />
                            Peanut Butter Buttercream
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="mint"
                              checked={this.state.selectedOptionIcing === 'mint'}
                              onChange={this.handleOptionChangeIcing} />
                            Mint Cream
              </label>
            </div>
            <h3>Choose some Toppings</h3>
            <CheckboxGroup
              name="toppings"
              value={this.state.toppings}
              onChange={this.toppingsChanged}>

              <label><Checkbox value="blackberry"/> Blackberry</label>
              <label><Checkbox value="blueberry"/> Blueberry</label>
              <label><Checkbox value="cherry"/> Cherry</label>
              <label><Checkbox value="chocolate-baubles"/> Chocolate Baubles</label>
              <label><Checkbox value="kiwi"/> Kiwi</label>
              <label><Checkbox value="rainbow-sprinkles"/> Rainbow Sprinkles</label>
              <label><Checkbox value="raspberry"/> Raspberry</label>
              <label><Checkbox value="red-and-white-stars"/> Red & White Stars</label>
              <label><Checkbox value="red-baubles"/> Red Baubles</label>
              <label><Checkbox value="reeses"/> Reeses Pieces</label>
              <label><Checkbox value="smarties"/> Smarties</label>
              <label><Checkbox value="strawberry"/> Strawberry</label>
            </CheckboxGroup>
            <button type="submit">+ Add Item</button>
        </form>
      </div>
    )
  }
}

export default CreateCupcake;
