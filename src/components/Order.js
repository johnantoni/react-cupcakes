import React from 'react'

class Order extends React.Component {

// {console.log(this.props.cupcakes)};


render() {
  const cupcakes = this.props.cupcakes;
    return (
      <div>
        <h2>Order Form</h2>
        <ul>
        { Object.keys(cupcakes).map( (cupcake, id) => {
          var items = [];
          return <li key={ id } >
          <img width="auto" height="100px;" alt="star" src={cupcakes[cupcake].image }/>
          <div className="details">{cupcakes[cupcake].cake}, {cupcakes[cupcake].icing}, {cupcakes[cupcake].toppings.join(" ")}

          </div>
          </li>
          })
        }
        </ul>

    </div>
    )
  }
}

export default Order;
