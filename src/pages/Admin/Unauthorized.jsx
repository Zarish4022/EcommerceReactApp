import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 50%;
  text-align: center;
  padding: 2%;
  font-size: 24px;
`;
const Image = styled.img`
  width: 20%;
`;
const Unauthorized = () => {
  return (
    <Container>
      <Wrapper>
        <Image src="\images\error1.png" alt="error" />
        <h1>Warning!</h1>
        <p>Your Are Unauthorized To this page!</p>
        <p>
          Go to our <Link to="/">home page</Link> , and use the menus to
          navigate to a specific section.
        </p>
      </Wrapper>
    </Container>
  );
};

export default Unauthorized;
