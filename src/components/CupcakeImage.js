import React from 'react';


class CupcakeImage extends React.Component {
    constructor() {
      super();
      this.state = {
        color: 'green'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        color: Konva.Util.getRandomColor()
      });
    }
    render() {
        return (
            <Rect
                x={10} y={10} width={50} height={50}
                fill={this.state.color}
                shadowBlur={10}
                onClick={this.handleClick}
            />
        );
    }
}

      // <div className = "cupcakeImg">
      //   <img src="assets/background.png" />
      // </div>

export default CupcakeImage;
