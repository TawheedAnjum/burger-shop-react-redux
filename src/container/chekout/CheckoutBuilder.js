import React, { Component } from "react";

import Aux from "../../hoc/Auxi";
import CartModel from "../../component/UI/cartModel/CartModel";
import Checkout from "../../component/chekout/Checkout";


class CheckoutBuilder extends Component {
  state={
    totalPrice: 0
  }
  componentDidMount(){
    const pram = new URLSearchParams(this.props.location.search);
    this.setState({totalPrice: pram})
  }
    render() {
        return (
          <Aux>
            <div style={{textAlign:"center", color:"#333333", marginBottom:"1.5rem"}}>
              <h1>
                Checkout
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing <br /> and typesetting
                industry
              </p>
            </div>
            <CartModel>
              <Checkout checkoutPrice={this.state.totalPrice}/>
            </CartModel>
          </Aux>
        );
    }
}

export default CheckoutBuilder;
