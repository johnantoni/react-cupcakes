import React from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

class CreateCupcake extends React.Component {
  constructor() {
    super();
    this.state = {
      cake: 'vanilla',
      icing: 'vanilla',
      toppings: []
    }
    this.changeCake = this.changeCake.bind(this);
    this.changeIcing = this.changeIcing.bind(this);
    this.changeToppings = this.changeToppings.bind(this);
  }

  componentDidMount() {
    // Add orange and remove watermelon after 5 seconds
    setTimeout(function() {
      this.setState({
        value: ['reeses','smarties']
      });
    }.bind(this), 5000);
  }

  changeCake(item) {
    let src = {cake: item.target.value};
    this.setState(src);
    this.createCakeSrc(src);
  }

  changeIcing(item) {
    let src = {icing: item.target.value}
    this.setState(src);
    this.createIcingSrc(src);
  }

  changeToppings(newToppings) {
    let src = {toppings: newToppings}
    this.setState(src);
    this.prepareToppingsSrc(src);
  }

  createCakeSrc(src) {
    for(var i in src){
      const imgSrc=`${src[i]}.png`
      this.props.updateCakeSrc(imgSrc);
    }
  }

  createIcingSrc(src) {
    for(var i in src){
      const imgSrc=`${src[i]}.png`
      this.props.updateIcingSrc(imgSrc);
    }
  }

  prepareToppingsSrc(src) {
    const srcToppings =  src.toppings;
    // console.log(srcToppings);
    let addToppings = srcToppings.map((item) => {
      // console.log(item);
      return `${item}.png`;
    });
    this.props.updateToppingsSrc(addToppings);
  }


  createCupcake(event) {
    event.preventDefault();
    const cupcake = {
      cake: this.state.cake,
      icing: this.state.icing,
      toppings: this.state.toppings
    }

    this.props.addCupcake(cupcake);
      this.setState({ cake: 'vanilla', icing: 'vanilla', toppings: [] });
    }


  render() {
    return (
      <div className="form">
        <form onSubmit={(e) => this.createCupcake(e)}>
          <h3>Choose a Cake Type</h3>
          <div className="radio">
            <label>
              <input type="radio" value="vanilla-cake"
                            checked={this.state.cake === 'vanilla-cake'}
                            onChange={this.changeCake} />
                          Vanilla Bean
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="red-velvet-cake"
                            checked={this.state.cake === 'red-velvet-cake'}
                            onChange={this.changeCake} />
                          Red Velvet
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="chocolate-cake"
                            checked={this.state.cake === 'chocolate-cake'}
                            onChange={this.changeCake} />
                          Chocolate Truffle
            </label>
          </div>
          <h3>Choose a Icing Type</h3>
            <div className="radio">
              <label>
                <input type="radio" value="vanilla-cream-icing"
                              checked={this.state.icing === 'vanilla-cream-icing'}
                              onChange={this.changeIcing} />
                            Vanilla Buttercream
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="cream-cheese-icing"
                              checked={this.state.icing === 'cream-cheese-icing'}
                              onChange={this.changeIcing} />
                            Cream Cheese
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="chocolate-icing"
                              checked={this.state.icing === 'chocolate-icing'}
                              onChange={this.changeIcing} />
                            Chocolate Buttercream
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="pink-buttercream-icing"
                              checked={this.state.icing === 'pink-buttercream-icing'}
                              onChange={this.changeIcing} />
                            Pink Buttercream
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="peanut-butter-icing"
                              checked={this.state.icing === 'peanut-butter-icing'}
                              onChange={this.changeIcing} />
                            Peanut Butter Buttercream
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="mint-cream-icing"
                              checked={this.state.icing === 'mint-cream-icing'}
                              onChange={this.changeIcing} />
                            Mint Cream
              </label>
            </div>
            <h3>Choose some Toppings</h3>
            <CheckboxGroup
              name="toppings"
              value={this.state.toppings}
              onChange={this.changeToppings}>

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
