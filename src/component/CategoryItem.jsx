import styled from "styled-components";

import GenericButton from "./GenericButton";
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 10px;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const CustomButton = styled(GenericButton)`
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  width: auto;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link to={`/products`}>
          <CustomButton>Shop Now</CustomButton>
        </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
