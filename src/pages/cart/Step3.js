import React from "react";
import styled from "styled-components";

const Step3Container = styled.div`
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: white;
  margin-bottom: 20px;
`;

const Step3Title = styled.h2`
  margin-bottom: 10px;
  text-align: center;
`;
const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: 95%;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
`;
const Select = styled.select`
  width: 99%;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
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
const Step3 = ({ formData, handleChange }) => {
  return (
    <Step3Container>
      <Step3Title>Step 3: Payment Method</Step3Title>
      <FormField>
        <Label>Payment Method:</Label>
        <Select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          required
        >
          <option value="">Select payment method</option>
          <option value="credit">Credit Card</option>
          <option value="easypaisa">EasyPaisa</option>
          <option value="jazzcash">JazzCash</option>
          <option value="cashondelievry">Cash On Delievry</option>
        </Select>
      </FormField>
      <ButtonContainer>
        <Button type="submit">Confirm Order</Button>
      </ButtonContainer>
    </Step3Container>
  );
};

export default Step3;
