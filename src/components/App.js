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
    };
    this.addCupcake = this.addCupcake.bind(this);
    this.updateCakeSrc = this.updateCakeSrc.bind(this);
    this.updateIcingSrc = this.updateIcingSrc.bind(this);
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


  render() {
    return (
      <div><h1>here are my cupcakes</h1>
      <CreateCupcake addCupcake={this.addCupcake} updateCakeSrc={this.updateCakeSrc} updateIcingSrc={this.updateIcingSrc}/>
      <CupcakeImage cakeImgSrc={this.state.cakeImgSrc} icingImgSrc={this.state.icingImgSrc}/>
      </div>
    )
  }

  componentDidMount() {
    $.ajax({
      url: "https://cupcakes-16999.firebaseio.com/.json",
      method: "GET",
      success: (data) => {
        this.setState({ cupcakes: data });
        console.log(data);
      }
    })
  }
}

export default App;
