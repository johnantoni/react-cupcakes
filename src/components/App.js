import React from 'react'
import $ from 'jquery';
import '../css/style.css';
import CreateCupcake from './CreateCupcake';
import CupcakeImage from './CupcakeImage';

class App extends React.Component {
  constructor() {
    super();
    {/*getInitialState if using ES6*/}
    this.state = {
      cupcakes: {},
      order: {},
      cakeImgSrc: '',
      icingImgSrc: '',
      chosenToppings: [],
      dataURL: ''
    };
    this.addCupcake = this.addCupcake.bind(this);
    this.updateCakeSrc = this.updateCakeSrc.bind(this);
    this.updateIcingSrc = this.updateIcingSrc.bind(this);
    this.updateToppingsSrc = this.updateToppingsSrc.bind(this);
    this.passURL = this.passURL.bind(this);
  }

  passURL() {
    console.log(this.state);
    var dataURL = this.props.saveCanvas();
    this.setState({dataURL});
    console.log(this.state.dataURL);
  }

  addCupcake(cupcake) {
    // update our state
    const cupcakes = {...this.state.cupcakes};
    // add in our new cupcake
    cupcakes.cake = cupcake;
    $.ajax({
      url: "https://cupcakes-16999.firebaseio.com/.json",
      method: "POST",
      data: JSON.stringify(cupcake),
      success: (data) => {
        this.setState({cupcakes});

      }
    })
  }

  updateCakeSrc(cakeImgSrc) {
    this.setState({cakeImgSrc});
    // console.log(cakeImgSrc);
  }

  updateIcingSrc(icingImgSrc) {
    this.setState({icingImgSrc});
    // console.log(icingImgSrc);
  }

  updateToppingsSrc(chosenToppings) {
    this.setState({chosenToppings});
      console.log(chosenToppings);
  }




  render() {
    return (
      <div>
      <CupcakeImage cakeImgSrc={this.state.cakeImgSrc}
                    icingImgSrc={this.state.icingImgSrc}
                    chosenToppings={this.state.chosenToppings}
                    dataURL={this.state.dataURL}/>
      <CreateCupcake addCupcake={this.addCupcake}
                    updateCakeSrc={this.updateCakeSrc}
                    updateIcingSrc={this.updateIcingSrc}
                    updateToppingsSrc={this.updateToppingsSrc}
                    passURL={this.passURL}
                    dataURL={this.state.dataURL}/>
    </div>
    )
  }

  componentDidMount() {
    $.ajax({
      url: "https://cupcakes-16999.firebaseio.com/.json",
      method: "GET",
      success: (data) => {
        this.setState({ cupcakes: data });
        // console.log(data);
      }
    })
  }
}

export default App;
