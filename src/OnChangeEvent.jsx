import React, { useState } from "react";

const OnChangeEvent = () => {
  const [name, setName] = useState("Customer");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [shipment, setShipment] = useState("Delivery");
  const [payment, setPayment] = useState("Visa");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };
  const handlePayment = (e) => {
    setPayment(e.target.value);
  };
  const handleShipment = (e) => {
    setShipment(e.target.value);
  };
  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Customer Name:{name}</p>
      <input type="number" value={quantity} onChange={handleQuantity} />
      <p>Quantity:{quantity}</p>

      <textarea
        value={comment}
        onChange={handleComment}
        name="comment"
        id=""
        cols="50"
        rows="8"
        placeholder="Delivery instructions"
      ></textarea>
      <p>Delivery instructions: {comment}</p>
      <label htmlFor="Delivery">
      
        <input
          type="radio"
          value="Delivery"
          onChange={handleShipment}
          checked={shipment === "Delivery"}
        />
       Delivery
      </label>
      <label htmlFor="Pick up">
     
        <input type="radio" value="Pick up" checked={shipment === "Pick up"}  onChange={handleShipment} />
        Pick up
      </label>
      <p>Shipment:{shipment}</p>
      <br />
      <select
        value={payment}
        name="payment"
        id="payment"
        onChange={handlePayment}
      >
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Debit">Debit</option>
        <option value="Gift Card">Gift Card</option>
      </select>

      <p>Payment Method: {payment}</p>
    </div>
  );
};

export default OnChangeEvent;
