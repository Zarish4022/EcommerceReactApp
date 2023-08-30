import { Send } from "@mui/icons-material";
import { styled } from "styled-components";
import GenericInput from "./GenericInput";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  justify-content: space-between;
  display: flex;
  border: 1px solid lightgray;
`;
const CustomInput = styled(GenericInput)`
  flex: 8;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;
const Newsletter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Description>Get Timely from your products.</Description>
      <InputContainer>
        <CustomInput placeholder="your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
