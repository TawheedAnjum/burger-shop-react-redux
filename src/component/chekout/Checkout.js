import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import axios from "../../axiosApi";

import "./checkout.css";
import FormInput from "../../component/UI/formInput/FormInput";

const Checkout = (props) => {
  let history = useHistory();

  const [nameState, setNameState] = useState("Jon Day");
  const [adressState, setAdressState] = useState("Dhaka Bangladesh");
  const [cardState, setCardState] = useState("1235743");
  
  const sendingPrice = props.checkoutPrice
  const handleSubmit = () =>{
    const values = {
      name: nameState,
      adress: adressState,
      cardNumber: cardState,
      price: sendingPrice
    };
    axios
      .post("/order.json", values)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      history.push("/order");
  }

    return (
      <div>
        <form>
          <FormInput
            label="Customer Name"
            IdName="CName"
            inputType="text"
            inputValue={nameState}
            changeValue={(event) => setNameState(event.target.value)}
          />
          <FormInput
            label="Adress"
            IdName="adress"
            inputType="text"
            inputValue={adressState}
            changeValue={(event) => setAdressState(event.target.value)}
          />
          <FormInput
            label="Card Number"
            IdName="card"
            inputType="number"
            inputValue={cardState}
            changeValue={(event) => setCardState(event.target.value)}
          />
        </form>
        <div className="cartAction">
          <div className="cartTotalPeice">Total Price: {sendingPrice}tk</div>
          <button className="submitOrder" type="submit" onClick={handleSubmit}>
            Submit Order
          </button>
        </div>
      </div>
    );
}

export default Checkout;
