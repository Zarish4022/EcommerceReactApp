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
  padding: 5%;
  font-size: 20px;
`;
const Image = styled.img`
  width: 40%;
`;
const Success = () => {
  return (
    <Container>
      <Wrapper>
        <Image src="\images\error.png" alt="error" />
        <h1>Sorry!</h1>
        <h2>Page Not Found</h2>
        <p>
          Please check that the Web site address is spelled correctly. Or got to
          our <Link to="/">home page</Link> , and use the menus to navigate to a
          specific section.
        </p>
      </Wrapper>
    </Container>
  );
};

export default Success;
