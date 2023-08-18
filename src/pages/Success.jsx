import React from "react";
import { styled } from "styled-components";

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
  padding: 10%;
  font-size: 24px;
  background-color: rgba(255, 255, 255, 255);
  border-radius: 10px;
`;
const Success = () => {
  return (
    <Container>
      <Wrapper>YOUR ORDER HAS BEEN PLACED SUCCESSFULLY</Wrapper>
    </Container>
  );
};

export default Success;
