import React from 'react';

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

  addCake(ctx, imgSrc)  {
    this.addImage(ctx, imgSrc);
  }

  addIcing(ctx, imgSrc)  {
    this.addImage(ctx, imgSrc);
  }

  addImage(ctx, imgSrc) {
    var image = new Image();
    image.src = `assets/${imgSrc}`
    image.onload = function()  {
      ctx.drawImage(image, 0, 0);
    }
  }

  updateCanvas(cakeImgSrc, icingImgSrc) {
    let cakeSrc = this.props.cakeImgSrc;
    let icingSrc = this.props.icingImgSrc;

    const ctx = this.refs.canvas.getContext('2d');
    this.loadBackground(ctx);

    // console.log(cakeImgSrc);
    this.addCake(ctx, cakeSrc);
    this.addIcing(ctx, icingSrc);
  }

  render() {
   return (
     <canvas ref="canvas" width={360} height={480}/>
   );
  }
}

export default CupcakeImage;
