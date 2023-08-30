import { InsertEmoticon } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { useCart } from "./ContextCart";
const CounterContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DecreseButton = styled.button`
  border: 1px solid gray;
  border-radius: 50%;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  padding: 5px 10px;
  font-size: 20px;
  font-weight: 600;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;
const IncreaseButton = styled.button`
  border: 1px solid gray;
  border-radius: 50%;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: 600;
`;

const Quantity = styled.span`
  font-size: 20px;
  margin: 0 10px;
  font-weight: 600;
`;
const QuantityCounter = ({
  onQuantityChange,
  initialValue,
  QuantityItem,
  productId,
}) => {
  const [quantity, setQuantity] = useState(QuantityItem);
  const { cartCount, setCartCount } = useCart();

  const increment = () => {
    const newQuantity = QuantityItem + 1;
    setQuantity(newQuantity);
    onQuantityChange(productId, newQuantity);
    let newCartCount = cartCount + 1;
    setCartCount(newCartCount);
  };

  const decrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(productId, newQuantity);

      let newCartDec = cartCount - 1;
      setCartCount(newCartDec);
    }
  };

  return (
    <CounterContainer>
      <DecreseButton onClick={decrement} disabled={quantity <= 1}>
        -
      </DecreseButton>
      <Quantity>{quantity ? quantity : 1}</Quantity>
      <IncreaseButton onClick={increment} disabled={quantity === initialValue}>
        +
      </IncreaseButton>
    </CounterContainer>
  );
};

export default QuantityCounter;
