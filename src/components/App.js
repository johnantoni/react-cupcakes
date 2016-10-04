import React from 'react'

import CreateCupcake from './CreateCupcake';

class App extends React.Component {
  constructor() {
    super();
    {/*getInitialState if using ES6*/}
    this.state = {
      cupcakes: {},
      order: {},
    };
  }

  // addCupcake(cupcake) {
  //   // update our state
  //   const cupcakes = {...this.state.cupcakes};
  //   console.log(cupcakes);
  //   // add in our new cupcake
  //   const timestamp = Date.now();
  //   cupcakes[`cupcake-${timestamp}`] = cupcake;
  //   // set state
  //   this.setState({ cupcakes });
  // }


  render() {
    return (
      <div><h1>here are my cupcakes</h1>
      <CreateCupcake />
      </div>

    )
  }
}

export default App;
