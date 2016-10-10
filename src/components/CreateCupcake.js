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
        <div className="cupcakes">
          <form onSubmit={(e) => this.createCupcake(e)}>
            <h3>Choose a Cake Type</h3>
              <div className="radio">
                <label className="inputcard vanilla" for="vanilla">
                  <input  id="vanilla" type="radio" value="vanilla-cake"
                                checked={this.state.cake === 'vanilla-cake'}
                                onChange={this.changeCake} />
                              <img src="/radio/radio-vanilla.png"/>

                </label>
              </div>
              <div className="radio">
                <label className="inputcard red-velvet"for="red-velvet">
                  <input id="red-velvet" type="radio" value="red-velvet-cake"
                                checked={this.state.cake === 'red-velvet-cake'}
                                onChange={this.changeCake} />
                              <img src="/radio/radio-red-velvet.png"/>


                </label>
              </div>
              <div className="radio">
                <label className="inputcard chocolate "for="chocolate">
                  <input id="chocolate" type="radio" value="chocolate-cake"
                                checked={this.state.cake === 'chocolate-cake'}
                                onChange={this.changeCake} />
                              <img src="/radio/radio-chocolate.png"/>
                </label>
              </div>

            <h3>Choose a Icing Type</h3>
              <div className="radio">
                <label className="inputcard vanilla-cream" for="vanilla-cream">
                  <input id="vanilla-cream" type="radio" value="vanilla-cream-icing"
                                checked={this.state.icing === 'vanilla-cream-icing'}
                                onChange={this.changeIcing} />
                              <img src="/radio/radio-vanilla-cream.png"/>
                </label>
              </div>
              <div className="radio">
                <label className="inputcard cheese" for="cheese">
                  <input id="cheese" type="radio" value="cream-cheese-icing"
                                checked={this.state.icing === 'cream-cheese-icing'}
                                onChange={this.changeIcing} />
                              <img src="/radio/radio-cheese.png"/>
                </label>
              </div>
              <div className="radio">
                <label className="inputcard chocolate-icing" for="chocolate-icing">
                  <input id="chocolate-icing" type="radio" value="chocolate-icing"
                                checked={this.state.icing === 'chocolate-icing'}
                                onChange={this.changeIcing} />
                              <img src="/radio/radio-chocolate-cream.png"/>
                </label>
              </div>
              <div className="radio">
                <label className="inputcard pink "for="pink">
                  <input id="pink" type="radio" value="pink-buttercream-icing"
                                checked={this.state.icing === 'pink-buttercream-icing'}
                                onChange={this.changeIcing} />
                              <img src="/radio/radio-pink.png"/>
                </label>
              </div>
              <div className="radio">
                <label className="inputcard peanut "for="peanut">
                  <input id="peanut" type="radio" value="peanut-butter-icing"
                                checked={this.state.icing === 'peanut-butter-icing'}
                                onChange={this.changeIcing} />
                              <img src="/radio/radio-peanut.png"/>
                </label>
              </div>
              <div className="radio">
                <label className="inputcard mint "for="mint">
                  <input id="mint" type="radio" value="mint-cream-icing"
                                checked={this.state.icing === 'mint-cream-icing'}
                                onChange={this.changeIcing} />
                              <img src="/radio/radio-mint.png"/>
                </label>
              </div>
              <h3>Choose some Toppings</h3>
              <div className="checkboxes">
                <CheckboxGroup
                  name="toppings"
                  value={this.state.toppings}
                  onChange={this.changeToppings}>

                  <label><Checkbox value="blackberry"/><img src="/radio/input-blackberry.png"/></label>
                  <label><Checkbox value="blueberry"/><img src="/radio/input-blueberry.png"/></label>
                  <label><Checkbox value="cherry"/><img src="/radio/input-cherry.png"/></label>
                  <label><Checkbox value="chocolate-baubles"/><img src="/radio/input-chocolate-baubles.png"/></label>
                  <label><Checkbox value="kiwi"/><img src="/radio/input-kiwi.png"/></label>
                  <label><Checkbox value="rainbow-sprinkles"/><img src="/radio/input-rainbow.png"/></label>
                  <label><Checkbox value="raspberry"/><img src="/radio/input-raspberry.png"/></label>
                  <label><Checkbox value="red-and-white-stars"/><img src="/radio/input-stars.png"/></label>
                  <label><Checkbox value="red-baubles"/><img src="/radio/input-baubles.png"/></label>
                  <label><Checkbox value="reeses"/><img src="/radio/input-reeses.png"/></label>
                  <label><Checkbox value="smarties"/><img src="/radio/input-smarties.png"/></label>
                  <label><Checkbox value="strawberry"/><img src="/radio/input-strawberry.png"/></label>
                </CheckboxGroup>
              </div>
              <button type="submit">+ Add Item</button>
          </form>
        </div>
      </div>
    )
  }
}

export default CreateCupcake;
