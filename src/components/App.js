import React from 'react'
import $ from 'jquery';
import '../css/style.css';
import CreateCupcake from './CreateCupcake';
import Order from './Order';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cupcakes: {},
      order: {},
    };
    this.addCupcake = this.addCupcake.bind(this);
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

  render() {
    return (
      <div>
      <CreateCupcake addCupcake={this.addCupcake}/>
      <Order cupcakes={this.state.cupcakes}/>
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
