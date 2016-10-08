import React from 'react';

// const imageURL = [
//   {name: '', src: 2},
//   {name: 'bananas', quantity: 0},
//   {name: 'cherries', quantity: 5}
// ];

class CupcakeImage extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  loadBackground(ctx) {
    var background = new Image();
    background.src = "assets/background.png"
    ctx.drawImage(background, 0, 0);
  }

  addImages(ctx, imgSrc) {
    var image = new Image();
    image.src = `assets/${imgSrc}`

    console.log(image.src )
    // var image = new Image();

    image.onload = function()  {
        ctx.drawImage(image, 0, 0);
        // ctx.drawImage(image2, 0, 0);
    }
  }

  updateCanvas(imgSrc) {
    console.log(imgSrc);
    const ctx = this.refs.canvas.getContext('2d');
    this.loadBackground(ctx);
    this.addImages(ctx, imgSrc);
  }

  render() {
   return (
     <canvas ref="canvas" width={360} height={480}/>
   );
  }
}

export default CupcakeImage;
