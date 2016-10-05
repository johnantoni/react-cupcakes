import React from 'react'
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
      urlType: "",
    };
    this.addCupcake = this.addCupcake.bind(this);
    // this.createURL = this.createURL.bind(this);
  }

  addCupcake(cupcake) {
    // update our state
    const cupcakes = {...this.state.cupcakes};
    console.log(cupcakes);
    // add in our new cupcake
    const timestamp = Date.now();
    cupcakes[`cupcake-${timestamp}`] = cupcake;
    // set state
    this.setState({ cupcakes });
  }

  // createURL(type, selectedOptionCake) {
  //   const src=`${selectedOptionCake}-cake.png`
  //   console.log(src);
  // }

  render() {
    return (
      <div><h1>here are my cupcakes</h1>
      <CreateCupcake addCupcake={this.addCupcake} createURL={this.createURL} />
      <CupcakeImage />
      </div>
    )
  }
}

export default App;
