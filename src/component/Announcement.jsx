import { styled, keyframes } from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  align-items: center;
  display: flex;
  overflow: hidden;
`;

const scrollText = keyframes`
  0%, 100% {
    transform: translateX(100%);
  }
50% {
    transform: translateX(-100%);
  }
`;
const TextWrapper = styled.div`
  animation: ${scrollText} 15s linear infinite;
  white-space: nowrap;
  animation-delay: -7.5s;
`;

const Announcement = () => {
  return (
    <Container>
      <TextWrapper>
        SuperDeal ! Freee Shipping on Orders over $50!!!!!!!!!!!!!
      </TextWrapper>
    </Container>
  );
};
export default Announcement;
