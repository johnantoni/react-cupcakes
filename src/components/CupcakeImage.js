import React from 'react';

const imageURL = [
  {name: '', src: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

class CupcakeImage extends React.Component {
  render() {
    return (
      <div className = "cupcakeImg">
        <img src="assets/background.png" />
      </div>

    )
  }
}

export default CupcakeImage;
