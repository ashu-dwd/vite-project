import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };
  const handleShippingChange = (event) => {
    setShipping(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
      <p>Hello, {name}!</p>
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        placeholder="Enter quantity"
      />
      <p>Quantity: {quantity}!</p>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        name="comment"
        id="comment"
        rows="2"
        placeholder="Enter delivery instructions"
      ></textarea>
      <p>Instructions: {comment}!</p>
      <select
        name="payment"
        id="payment"
        value={payment}
        onChange={handlePaymentChange}
      >
        <option value="">Select payment method</option>
        <option value="VISA">VISA</option>
        <option value="MASTERCARD">MASTERCARD</option>
        <option value="PAYTM">PAYTM</option>
      </select>
      <p>PAYMENT GATEWAY: {payment}!</p>
      <label>
        <input
          type="radio"
          name="shipping"
          value="Pickup"
          checked={shipping === "Pickup"}
          onChange={handleShippingChange}
        />
        PickUp
      </label>
      <label>
        <input
          type="radio"
          name="shipping"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default MyComponent;
