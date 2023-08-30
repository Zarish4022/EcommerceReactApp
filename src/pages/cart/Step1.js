import React from "react";
import styled from "styled-components";

const Step1Container = styled.div`
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: white;
  margin-bottom: 20px;
`;

const Step1Title = styled.h2`
  margin-bottom: 10px;
  text-align: center;
`;
const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
`;
const Button = styled.button`
  padding: 10px 10px;
  background-color: #333;
  color: white;
  width: 122px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  transition: background-color 0.3s;
  /* Remove the float property */
  &:hover {
    background-color: #555;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  /* Add margin:auto to center the button */
  margin-right: 12px;
`;
const Input = styled.input`
  width: 95%;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const Step1 = ({ formData, handleChange }) => {
  return (
    <Step1Container>
      <Step1Title>Step 1: Personal Information</Step1Title>
      <FormField>
        <Label>Name:</Label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FormField>
      <FormField>
        <Label>Email:</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </FormField>
      <FormField>
        <Label>Phone Number:</Label>
        <Input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </FormField>
      <ButtonContainer>
        <Button type="submit">Confirm Order</Button>
      </ButtonContainer>
    </Step1Container>
  );
};

export default Step1;
