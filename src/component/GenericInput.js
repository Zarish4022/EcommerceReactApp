import React from "react";
import { styled } from "styled-components";

const StyledInput = styled.input`
  border: none;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 2px 2px silver;
  border: 1px solid lightgray;
  font-size: 16px;
  outline: none;
`;

const GenericInput = ({ placeholder, type, ...rest }) => {
  return <StyledInput placeholder={placeholder} type={type} {...rest} />;
};

export default GenericInput;
