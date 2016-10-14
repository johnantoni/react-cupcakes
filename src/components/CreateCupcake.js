import React from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

class CreateCupcake extends React.Component {
  constructor() {
    super();
    this.state = {
      cake: '',
      icing: '',
      toppings: [],
      image: '',
      images: ["background.png", "blackberry.png", "blueberry.png", "cherry.png",
            "chocolate-baubles.png", "chocolate-cake.png", "chocolate-icing.png", "cream-cheese-icing.png",
            "kiwi.png", "mint-cream-icing.png", "peanut-butter-icing.png", "pink-buttercream-icing.png",
            "rainbow-sprinkles.png", "raspberry.png", "red-and-white-stars.png", "red-baubles.png",
            "red-velvet-cake.png", "reeses.png", "smarties.png", "strawberry.png", "vanilla-cake.png"]

    }
    this.changeCake = this.changeCake.bind(this);
    this.changeIcing = this.changeIcing.bind(this);
    this.changeToppings = this.changeToppings.bind(this);
  }

  componentWillMount() {
    this.state.images.forEach((src) => {
      const img = document.createElement('img');
      img.src = src; // Assigning the img src immediately requests the image
    });
  }

  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }


  changeCake(item) {
    let src = {cake: item.target.value};
    this.setState(src);
  }

  changeIcing(item) {
    let src = {icing: item.target.value}
    this.setState(src);
  }

  changeToppings(newToppings) {
    let src = {toppings: newToppings}
    this.setState(src);
  }


    // Add Images Functions

  addCake(ctx, imgSrc)  {
    ctx.clearRect(0,0,360,480);
    this.addImage(ctx, imgSrc);
  }

  addIcing(ctx, imgSrc)  {
    ctx.clearRect(0,0,360,480);
    this.addImage(ctx, imgSrc);
  }

  toppingsSrc(ctx, arr) {
    // console.log(arr);
    ctx.clearRect(0,0,360,480);
    arr.forEach((item) => {
      this.addImage(ctx, item)
    })
  }

  addImage(ctx, imgSrc) {
    var image = new Image();
    image.src = `${imgSrc}`

    this.state.images.map((img) => {
      return `<img src=${img.src}></img>`
    })

    image.onload = function()  {
      ctx.drawImage(image, 0, 0);
    }
  }

  updateCanvas() {
    const srcToppings = this.state.toppings;
    // console.log(srcToppings);
    let addToppings = srcToppings.map((item) => {
      return `${item}.png`;
    });
    // console.log(addToppings);

    let cakeSrc = `${this.state.cake}.png`;
    let icingSrc = `${this.state.icing}.png`;

    const ctx = this.refs.canvas.getContext('2d');

    this.addCake(ctx, cakeSrc);
    this.addIcing(ctx, icingSrc);
    this.toppingsSrc(ctx, addToppings);

  }

  saveCanvas() {
    let url = this.props.dataURL;
    let canvas = document.getElementById("canvas");
    url = this.refs.canvas.toDataURL();
    return url;
  }

  createCupcake(event) {
    event.preventDefault();

    const cupcake = {
      cake: this.state.cake,
      icing: this.state.icing,
      toppings: this.state.toppings,
      image: this.saveCanvas(),
    }

    if ( this.state.cake !== "" && this.state.icing !== "" ) {
      this.props.addCupcake(cupcake);
      this.setState(cupcake);
    }
  }

  render() {
    return (
      <div>
        <div className ="cupcakeImg">
          <canvas ref="canvas" width={360} height={480}/>
        </div>
        <div className="form">
          <div className="cupcakes">
            <form onSubmit={(e) => this.createCupcake(e)}>
              <img src="logo.png" className="logo"alt="Cupcake Nation Logo"/>
              <h3>Choose a Cake Type</h3>
                <div className="radio">
                  <label className="inputcard vanilla">
                    <input  id="vanilla" type="radio" value="vanilla-cake"
                                  checked={this.state.cake === 'vanilla-cake'}
                                  onChange={this.changeCake} />
                                <img src="/radio/radio-vanilla.png" alt="vanilla Bean png"/>

                  </label>
                </div>
                <div className="radio">
                  <label className="inputcard red-velvet">
                    <input id="red-velvet" type="radio" value="red-velvet-cake"
                                  checked={this.state.cake === 'red-velvet-cake'}
                                  onChange={this.changeCake} />
                                <img src="/radio/radio-red-velvet.png" alt="red velvet png"/>


                  </label>
                </div>
                <div className="radio">
                  <label className="inputcard chocolate">
                    <input id="chocolate" type="radio" value="chocolate-cake"
                                  checked={this.state.cake === 'chocolate-cake'}
                                  onChange={this.changeCake} />
                                <img src="/radio/radio-chocolate.png" alt="chocolate cake png"/>
                  </label>
                </div>
                <div className="radio">
                  <label className="inputcard coffee">
                    <input id="coffee" type="radio" value="coffee-cake"
                                  checked={this.state.cake === 'coffee-cake'}
                                  onChange={this.changeCake} />
                                <img src="/radio/radio-coffee.png" alt="coffee cake png"/>
                  </label>
                </div>
                <div className="radio">
                  <label className="inputcard carrot">
                    <input id="carrot" type="radio" value="carrot-cake"
                                  checked={this.state.cake === 'carrot-cake'}
                                  onChange={this.changeCake} />
                                <img src="/radio/radio-carrot.png" alt="carot cake png"/>
                  </label>
                </div>
                <div className="radio">
                  <label className="inputcard chocolate-chip">
                    <input id="chocolate-chip" type="radio" value="chocolate-chip-cake"
                                  checked={this.state.cake === 'chocolate-chip-cake'}
                                  onChange={this.changeCake} />
                                <img src="/radio/radio-chocolate-chip.png" alt="chocolate chip cake png"/>
                  </label>
                </div>

                <h3>Choose a Frosting Type</h3>
                <div className="radio">
                  <label className="inputcard vanilla-cream">
                    <input id="vanilla-cream" type="radio" value="vanilla-cream-icing"
                                  checked={this.state.icing === 'vanilla-cream-icing'}
                                  onChange={this.changeIcing} />
                                <img src="/radio/radio-vanilla-cream.png" alt="vanilla cream png"/>
                  </label>
                </div>
                <div className="radio">
                  <label className="inputcard cheese">
                    <input id="cheese" type="radio" value="cream-cheese-icing"
                                  checked={this.state.icing === 'cream-cheese-icing'}
                                  onChange={this.changeIcing} />
                                <img src="/radio/radio-cheese.png" alt="cream chesse png"/>
                  </label>
                </div>
                <div className="radio">
                  <label className="inputcard chocolate-icing">
                    <input id="chocolate-icing" type="radio" value="chocolate-icing"
                                  checked={this.state.icing === 'chocolate-icing'}
                                  onChange={this.changeIcing} />
                                <img src="/radio/radio-chocolate-cream.png" alt="chocolate cream png"/>
                  </label>
                </div>
                <div className="radio">
                  <label className="inputcard pink">
                    <input id="pink" type="radio" value="pink-buttercream-icing"
                                  checked={this.state.icing === 'pink-buttercream-icing'}
                                  onChange={this.changeIcing} />
                                <img src="/radio/radio-pink.png" alt="pink cream png"/>
                  </label>
                </div>
                <div className="radio">
                  <label className="inputcard peanut">
                    <input id="peanut" type="radio" value="peanut-butter-icing"
                                  checked={this.state.icing === 'peanut-butter-icing'}
                                  onChange={this.changeIcing} />
                                <img src="/radio/radio-peanut.png" alt="peanut butter png"/>
                  </label>
                </div>
                <div className="radio">
                  <label className="inputcard mint">
                    <input id="mint" type="radio" value="mint-cream-icing"
                                  checked={this.state.icing === 'mint-cream-icing'}
                                  onChange={this.changeIcing} />
                                <img src="/radio/radio-mint.png" alt="mint cream png"/>
                  </label>
                </div>
                <h3>Choose some Toppings</h3>
                <div className="checkboxes">
                  <CheckboxGroup
                    name="toppings"
                    value={this.state.toppings}
                    onChange={this.changeToppings}>

                    <label className="inputcheck"><Checkbox value="blackberry"/><img src="/radio/input-blackberry.png" alt="blackberry png"/></label>
                    <label className="inputcheck"><Checkbox value="blueberry"/><img src="/radio/input-blueberry.png" alt="blueberry png"/></label>
                    <label className="inputcheck"><Checkbox value="cherry"/><img src="/radio/input-cherry.png" alt="cherry png"/></label>
                    <label className="inputcheck"><Checkbox value="chocolate-baubles"/><img src="/radio/input-chocolate-baubles.png" alt="chocolate png"/></label>
                    <label className="inputcheck"><Checkbox value="kiwi"/><img src="/radio/input-kiwi.png" alt="kiwi png"/></label>
                    <label className="inputcheck"><Checkbox value="rainbow-sprinkles"/><img src="/radio/input-rainbow.png" alt="sprinkles png"/></label>
                    <label className="inputcheck"><Checkbox value="raspberry"/><img src="/radio/input-raspberry.png"alt="raspberry png"/></label>
                    <label className="inputcheck"><Checkbox value="red-and-white-stars"/><img src="/radio/input-stars.png" alt="stars png"/></label>
                    <label className="inputcheck"><Checkbox value="red-baubles"/><img src="/radio/input-baubles.png" alt="baubles png"/></label>
                    <label className="inputcheck"><Checkbox value="reeses"/><img src="/radio/input-reeses.png" alt="reeses png"/></label>
                    <label className="inputcheck"><Checkbox value="smarties"/><img src="/radio/input-smarties.png" alt="smarties png"/></label>
                    <label className="inputcheck"><Checkbox value="strawberry"/><img src="/radio/input-strawberry.png" alt="strawberry png"/></label>
                  </CheckboxGroup>
                </div>
                <button type="submit">Add Cupcake To Order</button>
            </form>
          </div>
        </div>
      </div>

    )
  }
}

export default CreateCupcake;
