import React, { Component } from "react";
import "./order.css";
import axios from "../../axiosApi";
import CartModel from "../../component/UI/cartModel/CartModel";

class Order extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get("/order.json").then((response) => {
      const data = Object.values(response.data);
      this.setState({ posts: data });
    });
  }

  render() {
    return (
      <div className="order">
        <h1>All Orders</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing <br /> and
          typesetting industry
        </p>
        <CartModel className="orderTable">
          <table>
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Adress</th>
                <th>Card Number</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((data) => {
                return (
                  <tr key={data.name + data.price}>
                    <th>{data.name}</th>
                    <th>{data.adress}</th>
                    <th>{data.cardNumber}</th>
                    <th>{data.price}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CartModel>
      </div>
    );
  }
}

export default Order;
