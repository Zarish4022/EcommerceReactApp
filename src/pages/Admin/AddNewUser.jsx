import React, { useState } from "react";
import styled from "styled-components";
import { UserLogin } from "../data";
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
  padding: 20px 30px 40px 30px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 25%;
  color: black;
  text-align: center;
  position: relative; /* Add relative positioning */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  text-align: left;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid gray;
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`;

const Button = styled.button`
  background-color: teal;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 7px;
  margin-left: 10px;
  border: none;
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

const AddNewUserPopup = ({ onClose, onAddNewUser }) => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const handleAddNewUser = (e) => {
    e.preventDefault();
    if (newName && newEmail) {
      const maxId = UserLogin.reduce((max, user) => Math.max(max, user.id), 0);
      const newUser = {
        id: maxId + 1,
        name: newName,
        email: newEmail,
      };
      onAddNewUser(newUser);
      onClose();
    }
  };
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <Close />
        </CloseButton>
        <h2>Add New User</h2>
        <Form onSubmit={handleAddNewUser}>
          <FormGroup>
            <Label>Name:</Label>
            <Input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Email:</Label>
            <Input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </FormGroup>
          <ButtonContainer>
            <Button type="submit">Add</Button>
            <Button onClick={onClose}>Cancel</Button>
          </ButtonContainer>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddNewUserPopup;
