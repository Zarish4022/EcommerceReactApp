import React from "react";
import styled from "styled-components";

const Step2Container = styled.div`
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: white;
  margin-bottom: 20px;
`;

const Step2Title = styled.h2`
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

const Step2 = ({ formData, handleChange }) => {
  return (
    <Step2Container>
      <Step2Title>Step 2: Contact Information</Step2Title>
      <FormField>
        <Label>Address:</Label>
        <Input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </FormField>
      <FormField>
        <Label>City Name:</Label>
        <Input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </FormField>
      <FormField>
        <Label>Zip/Postal Code:</Label>
        <Input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          required
        />
      </FormField>
      <ButtonContainer>
        <Button type="submit">Confirm Order</Button>
      </ButtonContainer>
    </Step2Container>
  );
};

export default Step2;
