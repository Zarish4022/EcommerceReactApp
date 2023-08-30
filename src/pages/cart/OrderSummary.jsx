import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCart } from "./ContextCart";
import OrderForm from "./OrderForm";
import Navbar from "../../component/Navbar";
import Announcement from "../../component/Announcement";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 5px;
`;
const SummaryTotal = styled.div`
  border: 2px solid lightgray;
  padding: 10px;
  border-radius: 9px;
`;
const SummaryContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 7px;
  background-color: white;
`;

const SummarTitle = styled.h1`
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  border-bottom: 2px solid lightgray;
`;

const SummaryItemText = styled.span`
  flex: 1;
  font-weight: 700;
  margin-left: 10px;
`;

const SummarItemPrice = styled.span`
  flex: 0.5;
  text-align: right;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 1px;

  &:hover {
    background-color: #555;
  }
  &:disabled {
    background-color: white;
    color: gray;
    cursor: not-allowed;
  }
`;
const SummaryImage = styled.img`
  width: 60px;
`;

const OrderSummary = () => {
  const { cartItems, clearCart } = useCart();
  const [isFormFilled, setIsFormFilled] = useState(false);
  const calculateTotal = (items) => {
    const subtotal = calculateSubtotal(items);
    const shipping = 250;
    return subtotal + shipping;
  };

  const calculateSubtotal = (items) => {
    return items.reduce(
      (total, item) => total + item.cartquantity * item.price,
      0
    );
  };

  return (
    <>
      <Announcement />
      <Navbar />
      <Container>
        <Wrapper>
          <Column>
            <SummaryContainer>
              <SummarTitle>ORDER SUMMARY</SummarTitle>
              {cartItems.map((item) => (
                <SummaryItem key={item.id}>
                  <SummaryImage src={item.img} />
                  <SummaryItemText>
                    {item.name} ({item.quantity})
                  </SummaryItemText>
                  <SummarItemPrice>${item.price.toFixed(2)}</SummarItemPrice>
                </SummaryItem>
              ))}
              <SummaryTotal>
                <SummaryItem style={{ border: "none" }}>
                  <SummaryItemText>Subtotal:</SummaryItemText>
                  <SummarItemPrice>
                    ${calculateSubtotal(cartItems).toFixed(2)}
                  </SummarItemPrice>
                </SummaryItem>
                <SummaryItem style={{ border: "none" }}>
                  <SummaryItemText>Shipping:</SummaryItemText>
                  <SummarItemPrice>$250</SummarItemPrice>
                </SummaryItem>
                <SummaryItem type="total" style={{ border: "none" }}>
                  <SummaryItemText>Total:</SummaryItemText>
                  <SummarItemPrice>
                    ${calculateTotal(cartItems).toFixed(2)}
                  </SummarItemPrice>
                </SummaryItem>
              </SummaryTotal>
            </SummaryContainer>
          </Column>
          <Column>
            <OrderForm onFormFilled={setIsFormFilled} />
          </Column>
        </Wrapper>
      </Container>
    </>
  );
};

export default OrderSummary;
