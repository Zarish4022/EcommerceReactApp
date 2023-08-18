import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GenericButton from "../component/GenericButton";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/images/login2.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 50%;
  text-align: center;
  padding: 10%;
  font-size: 24px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
`;

const Success = () => {
  return (
    <Container>
      <Wrapper>
        <h3>PAGE NOT FOUND</h3>

        <Link to={"/"}>
          <GenericButton>BACK TO HOME </GenericButton>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Success;
