import React, { Component } from "react";
import Aux from "../../hoc/Auxi";

import Ingredients from "../../component/burger/ingredients/Ingredients";
import BurgerControll from "../../component/burger/burgerControll/BurgerControll";
import Model from "../../component/UI/model/Model";
import OrderSummary from "../../component/orderSummary/OrderSummary";
import * as actionType from "../../store/action";

import {connect} from "react-redux";

class BurgerBuilder extends Component {
  price = {
    salad: 30,
    chees: 50,
    meat: 80,
  };
  state = {
    purchasable: false,
  };

  render() {
    return (
      <Aux>
        <div className="main">
          <Ingredients ingredientValue={this.props.ingredients} />
          <BurgerControll
            less={this.props.lessHandaler}
            more={this.props.addHandaler}
            number={this.props.ingredients}
            orderShow={this.orderSummaryHandeler}
            orderBtn={this.updatePurchaseState(this.props.ingredients)}
          />
          <Model show={this.state.purchasable}>
            <OrderSummary
              totalPrice={this.props.tPrice}
              items={this.props.ingredients}
              itemPrice={this.price}
              cancel={this.cancelHandeler}
              submit={this.submitHandeler}
            />
          </Model>
        </div>
      </Aux>
    );
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }

  orderSummaryHandeler = () => {
    this.setState({ purchasable: true });
  };
  cancelHandeler = () => {
    this.setState({ purchasable: false });
  };
  submitHandeler = () => {
    this.props.history.push({
      pathname: "/checkout",
    });
  };
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ing.ingredient,
    tPrice: state.ing.totalPrice
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addHandaler : (ing) => dispatch({ type: actionType.ADD, ingredientName: ing }),
    lessHandaler : (ing) => dispatch({ type: actionType.LESS, ingredientName: ing }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
