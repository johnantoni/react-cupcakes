import React from 'react'

class Order extends React.Component {

// {console.log(this.props.cupcakes)};


render() {
  const cupcakes = this.props.cupcakes;
  // const toppings = cupcakes[].toppings || [];
    return (
      <div className="order">
        <h2>Order Form</h2>
        <ul>
        { Object.keys(cupcakes).map( (cupcake, id) => {
          let toppings = cupcakes[cupcake].toppings || [];
          let cake = cupcakes[cupcake].cake
          cake = cake.replace(/[-]/g, ' ');
          let icing = cupcakes[cupcake].icing
          icing = icing.replace(/[-]/g, ' ');
          var component = this;
          return <li key={ id } >



          <img width="40%" height="auto;" alt="star" src={cupcakes[cupcake].image }/>
          <div className="details">
            <div className="cakedetails">{ cake }</div>
            <div className="icingdetails">{ icing }</div>
            <div className="toppingsdetails">{toppings.join(" ")}</div>
            <div><button onClick={()=>this.props.deleteCupcake(cupcake) }><i className="fa fa-times" aria-hidden="true"></i></button></div>
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
