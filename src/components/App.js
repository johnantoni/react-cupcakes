import React from 'react';
import {RadioGroup, Radio} from 'react-radio-group'

import CreateCupcakeForm from './CreateCupcakeForm';

class App extends React.Component {
  constructor() {
    super();
    {/*getInitialState if using ES6*/}
    this.state = {
      cupcake: {},
      order: {},
    };
  }

  render() {
    return (
      <div><h1>here are my cupcakes</h1>
      <CreateCupcakeForm /></div>
    )
  }
}

export default App;
