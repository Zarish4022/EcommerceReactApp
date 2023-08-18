import { Close } from "@mui/icons-material";
import React, { useState } from "react";
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
  border-radius: 7px;
  margin-left: 10px;
  border: none;
  cursor: pointer;
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

const EditUserPopup = ({ user, onClose, onUpdateUser }) => {
  const [editedName, setEditedName] = useState(user.name);
  const [editedEmail, setEditedEmail] = useState(user.email);

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({ ...user, name: editedName, email: editedEmail });
    onClose();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>Edit User</h2>
        <Form onSubmit={handleEditFormSubmit}>
          <FormGroup>
            <Label>Name:</Label>
            <Input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Email:</Label>
            <Input
              type="email"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
            />
          </FormGroup>
          <ButtonContainer>
            <Button type="submit">Save</Button>
            <Button onClick={onClose}>Cancel</Button>
          </ButtonContainer>
        </Form>
        <CloseButton onClick={onClose}>
          <Close />
        </CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EditUserPopup;
