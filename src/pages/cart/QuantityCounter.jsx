import { InsertEmoticon } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
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
const QuantityCounter = ({ initialValue, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialValue);

  const increment = () => {
    setQuantity(quantity + 1);
    onQuantityChange(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <CounterContainer>
      <DecreseButton onClick={decrement} disabled={quantity <= 1}>
        -
      </DecreseButton>
      <Quantity>{quantity}</Quantity>
      <IncreaseButton onClick={increment}>+</IncreaseButton>
    </CounterContainer>
  );
};

export default QuantityCounter;
