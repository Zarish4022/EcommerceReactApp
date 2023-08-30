import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import GenericButton from "../component/GenericButton";
const Container = styled.div`
  width: auto;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/images/login2.jpg");s
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: auto;
  text-align: center;
  padding: 5%;
  font-size: 20px;
  background-color: rgba(255, 255, 255, 255);
  border-radius: 10px;
`;

const Success = () => {
  return (
    <Container>
      <Wrapper>
        <h2>YOUR ORDER HAS BEEN PLACED SUCCESSFULLY</h2>
        <p> Thanks For Trusting Us!</p>
        <p>Want Some More !!</p>
        <p> Whats You Waiting For??</p>
        <Link to={"/"}>
          <GenericButton>Continue Shopping </GenericButton>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Success;
