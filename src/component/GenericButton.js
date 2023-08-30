import { styled } from "styled-components";

const StyledButton = styled.button`
  width: 40%;
  margin: 10px auto;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: pink;
    color: black;
  }
`;
const GenericButton = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default GenericButton;
