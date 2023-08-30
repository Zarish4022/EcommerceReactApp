import React, { useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import { Close } from "@mui/icons-material";

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
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 70%;
  max-width: 500px;
  text-align: center;
  position: relative;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  text-align: left;
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: 10px;
  flex-basis: 20%; /* Adjust the label width */
`;

const InputContainer = styled.div`
  flex-grow: 1;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 80%;
`;
const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 80%;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;
const Button = styled.button`
  background-color: teal;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 7px;
  border: none;
  font-size: 14px;
  margin: 2px;
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
const AddNewProduct = ({ onClose, onAddNewProduct }) => {
  const [newName, setNewName] = useState("");
  const [newImg, setNewImg] = useState("");
  const [newColor, setNewColor] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newQuantity, setNewQuantity] = useState("");
  const [newSize, setNewSize] = useState("");
  const [newDesc, setNewDesc] = useState("");

  const handleAddNewProduct = (e) => {
    e.preventDefault();

    if (
      newName &&
      newImg &&
      newColor &&
      newPrice &&
      newQuantity &&
      newSize &&
      newDesc
    ) {
      const maxId = popularProducts.reduce(
        (max, user) => Math.max(max, user.id),
        0
      );
      const newProduct = {
        id: maxId + 1,
        img: newImg,
        name: newName,
        color: newColor,
        price: newPrice,
        quantity: newQuantity,
        size: newSize,
        desc: newDesc,
      };
      onAddNewProduct(newProduct);
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <Close />
        </CloseButton>
        <h2>Add New Product</h2>
        <Form onSubmit={handleAddNewProduct}>
          <FormRow>
            <Label>Name:</Label>
            <InputContainer>
              <Input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </InputContainer>
          </FormRow>
          <FormRow>
            <Label>Color:</Label>
            <InputContainer>
              <Select
                value={newColor}
                onChange={(e) => setNewColor(e.target.value)}
              >
                <option value="" disabled>
                  Color
                </option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Yellow">Yellow</option>
                <option value="Green">Green</option>
                <option value="White">White</option>
              </Select>
            </InputContainer>
          </FormRow>
          <FormRow>
            <Label>Price:</Label>
            <InputContainer>
              <Input
                type="text"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
              />
            </InputContainer>
          </FormRow>
          <FormRow>
            <Label>Quantity:</Label>
            <InputContainer>
              <Input
                type="text"
                value={newQuantity}
                onChange={(e) => setNewQuantity(e.target.value)}
              />
            </InputContainer>
          </FormRow>
          <FormRow>
            <Label>Size:</Label>
            <InputContainer>
              <Select
                value={newSize}
                onChange={(e) => setNewSize(e.target.value)}
              >
                <option value="" disabled>
                  Size
                </option>
                <option value="S">S</option>
                <option value="XS">XS</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </Select>
            </InputContainer>
          </FormRow>
          <FormRow>
            <Label>Desc:</Label>
            <InputContainer>
              <Input
                type="text"
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
              />
            </InputContainer>
          </FormRow>
          <FormRow>
            <Label>Img:</Label>
            <InputContainer>
              <Input
                type="file"
                onChange={(e) =>
                  setNewImg(URL.createObjectURL(e.target.files[0]))
                }
              />
            </InputContainer>
          </FormRow>
          <ButtonContainer>
            <Button type="submit">Add</Button>
            <Button onClick={onClose}>Cancel</Button>
          </ButtonContainer>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddNewProduct;
