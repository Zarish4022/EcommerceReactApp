import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCart } from "./ContextCart";
import OrderForm from "./OrderForm";
import Navbar from "../../component/Navbar";
import Announcement from "../../component/Announcement";
const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: teal;
  min-height: 100vh;
  padding: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
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
`;

const SummaryItemText = styled.span`
  flex: 1;
  font-weight: 700;
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
`;

const OrderSummary = () => {
  const { cartItems } = useCart();
  const calculateTotal = (items) => {
    const subtotal = calculateSubtotal(items);
    const shipping = 250;
    return subtotal + shipping;
  };

  const calculateSubtotal = (items) => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
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
                  <SummaryItemText>{item.name}:</SummaryItemText>
                  <SummarItemPrice>${item.price.toFixed(2)}</SummarItemPrice>
                </SummaryItem>
              ))}
              <SummaryTotal>
                <SummaryItem>
                  <SummaryItemText>Subtotal:</SummaryItemText>
                  <SummarItemPrice>
                    ${calculateSubtotal(cartItems).toFixed(2)}
                  </SummarItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Shipping:</SummaryItemText>
                  <SummarItemPrice>$250</SummarItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                  <SummaryItemText>Total:</SummaryItemText>
                  <SummarItemPrice>
                    ${calculateTotal(cartItems).toFixed(2)}
                  </SummarItemPrice>
                </SummaryItem>
              </SummaryTotal>
              <ButtonContainer>
                <Link to={`/products`}>
                  <Button>Add More</Button>
                </Link>
              </ButtonContainer>
            </SummaryContainer>
          </Column>
          <Column>
            <OrderForm />
          </Column>
        </Wrapper>
      </Container>
    </>
  );
};

export default OrderSummary;
