import React from 'react';

class CupcakeImage extends React.Component {
  constructor() {
    super();
    {/*getInitialState if using ES6*/}
    this.state = {
      images: ["blackberry.png", "blueberry.png", "cherry.png",
            "chocolate-baubles.png", "chocolate-cake.png", "chocolate-icing.png", "cream-cheese-icing.png",
            "kiwi.png", "mint-cream-icing.png", "peanut-butter-icing.png", "pink-buttercream-icing.png",
            "rainbow-sprinkles.png", "raspberry.png", "red-and-white-stars.png", "red-baubles.png",
            "red-velvet-cake.png", "reeses.png", "smarties.png", "strawberry.png", "vanilla-cake.png"]
    };
  }

  // Preload images at the earliest possible lifecycle event
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

  loadBackground(ctx) {
    var background = new Image();
    background.src = "background.png"
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
    image.src = `${imgSrc}`

    this.state.images.map((img) => {
      return `<img src=${img.src}></img>`
    })

    image.onload = function()  {
      ctx.drawImage(image, 0, 0);
    }
  }

  updateCanvas(cakeImgSrc, icingImgSrc, loadedimages) {
    let cakeSrc = this.props.cakeImgSrc;
    let icingSrc = this.props.icingImgSrc;

    console.log(loadedimages);

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
