import { Close } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px 30px 40px 30px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 25%;
  color: black;
  text-align: center;
  position: relative;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Message = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: teal;
  color: white;
  padding: 10px 20px;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  margin: 0 10px;
  &:hover {
    background-color: #045d5d;
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: gray;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

const DeleteProduct = ({ onClose, onDelete }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <Close />
        </CloseButton>
        <Title>Delete Product</Title>
        <Message>Are you sure you want to delete this Product?</Message>
        <ButtonContainer>
          <Button style={{ backgroundColor: "red" }} onClick={onDelete}>
            Delete
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default DeleteProduct;
