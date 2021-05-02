import React, { Component } from "react";
import Aux from "../../hoc/Auxi";

import Ingredients from "../../component/burger/ingredients/Ingredients";
import BurgerControll from "../../component/burger/burgerControll/BurgerControll";
import Model from "../../component/UI/model/Model";
import OrderSummary from "../../component/orderSummary/OrderSummary";

class App extends Component {
  price = {
    salad: 30,
    chees: 50,
    meat: 80,
  };
  state = {
    ingredients: {
      salad: 0,
      chees: 0,
      meat: 0,
    },
    totalPrice: 20,
    btnEnable: false,
    purchasable: false,
    purchasing: false,
  };

  render() {
    return (
      <Aux>
        <div className="main">
          <Ingredients ingredientValue={this.state.ingredients} />
          <BurgerControll
            less={this.lessHandaler}
            more={this.addHandaler}
            number={this.state.ingredients}
            btnStatus={this.state.btnEnable}
            orderShow={this.orderSummaryHandeler}
            orderBtn={this.state.purchasing}
          />
          <Model show={this.state.purchasable}>
            <OrderSummary
              totalPrice={this.state.totalPrice}
              items={this.state.ingredients}
              itemPrice={this.price}
              cancel={this.cancelHandeler}
              submit={this.submitHandeler}
            />
          </Model>
        </div>
      </Aux>
    );
  }

  orderSummaryHandeler = () => {
    this.setState({ purchasable: true });
  };
  cancelHandeler = () => {
    this.setState({ purchasable: false });
  };
  submitHandeler = () => {
    this.props.history.push({
      pathname: '/chechout',
      search:"?" +this.state.totalPrice
    });
  };

  btnEnableState = (ingredient) => {
    const updateIngredients = Object.keys(this.state.ingredients)
      .map((igkey) => {
        return ingredient[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    if (updateIngredients > 0) {
      this.setState({ btnEnable: true });
    } else {
      this.setState({ btnEnable: false });
    }
  };

  lessHandaler = (type) => {
    const oldCount = this.state.ingredients[type];

    if (oldCount > 0) {
      const updateCount = oldCount - 1;
      const updateIngredients = {
        ...this.state.ingredients,
      };
      updateIngredients[type] = updateCount;

      const oldPrice = this.price[type];
      const updateTotalPrice = this.state.totalPrice - oldPrice;

      this.setState({
        ingredients: updateIngredients,
        totalPrice: updateTotalPrice,
        purchasing: true,
      });
      this.btnEnableState(updateIngredients);
    } else {
      alert("you didn't added " + type + " yet");
    }
  };

  addHandaler = (type) => {
    const oldCount = this.state.ingredients[type];

    if (oldCount < 2) {
      const updateCount = oldCount + 1;
      const updateIngredients = {
        ...this.state.ingredients,
      };
      updateIngredients[type] = updateCount;

      const oldPrice = this.price[type];
      const updateTotalPrice = this.state.totalPrice + oldPrice;

      this.setState({
        ingredients: updateIngredients,
        totalPrice: updateTotalPrice,
        purchasing: true,
      });
      this.btnEnableState(updateIngredients);
    } else {
      alert("you can add only 2 " + type);
    }
  };
}

export default App;
