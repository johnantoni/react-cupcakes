import React from 'react';

class CreateCupcake extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOptionCake: 'vanilla',
      selectedOptionIcing: 'vanilla'
    }
    this.handleOptionChangeCake = this.handleOptionChangeCake.bind(this);
    this.handleOptionChangeIcing = this.handleOptionChangeIcing.bind(this);
  }

  handleOptionChangeCake(changeEvent) {
    this.setState({selectedOptionCake: changeEvent.target.value});
  }

  handleOptionChangeIcing(changeEvent) {
    this.setState({selectedOptionIcing: changeEvent.target.value});
  }

  createCupcake(event) {
    event.preventDefault();
    console.log("gonna start baking");

    const cupcake = {
      cakeType: this.state.selectedOptionCake,
      cakeIcing: this.state.selectedOptionIcing
    }

    console.log(cupcake);
  }

  render() {
    return (
      <div>
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
            <button type="submit">+ Add Item</button>
        </form>
      </div>
    )
  }
}

export default CreateCupcake;
