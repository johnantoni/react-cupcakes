import React from 'react';

// const imageURL = [
//   {name: '', src: 2},
//   {name: 'bananas', quantity: 0},
//   {name: 'cherries', quantity: 5}
// ];
function rect(props) {
    const {ctx, x, y, width, height} = props;
    ctx.fillRect(x, y, width, height);
}



class CupcakeImage extends React.Component {

  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillStyle = "rgb(200,0,0)"; // sets the color to fill in the rectangle with
    var image = document.getElementById("source");

    ctx.drawImage(image, 0, 0);
  }

  render() {
   return (
      <div>
        <img id="source" src="assets/background.png"
       width="" height=""/>
     <canvas ref="canvas" width={360} height={480}/>

        </div>

   );
  }
}

export default CupcakeImage;
