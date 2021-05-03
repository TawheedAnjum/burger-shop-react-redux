import React, { Component } from "react";
import {connect} from "react-redux";

import Aux from "../../hoc/Auxi";
import CartModel from "../../component/UI/cartModel/CartModel";
import Checkout from "../../component/chekout/Checkout";


class CheckoutBuilder extends Component {
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
              <Checkout checkoutPrice={this.props.tPrice} key="checkout" />
            </CartModel>
          </Aux>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    tPrice: state.ing.totalPrice,
  };
};

export default connect(mapStateToProps)(CheckoutBuilder);
