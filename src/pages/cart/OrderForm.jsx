import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useCart } from "./ContextCart";

const FormContainer = styled.div`
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: white;
`;

const FormTitle = styled.h1`
  margin-bottom: 10px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
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

const OrderForm = ({ onFormFilled }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.name && storedUser.email) {
      setFormData((prevData) => ({
        ...prevData,
        name: storedUser.name,
        email: storedUser.email,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const Navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    clearCart();
    onFormFilled(true);
    Navigate("/success");
  };
  const { clearCart } = useCart();
  return (
    <FormContainer>
      <FormTitle>PLACE ORDER</FormTitle>
      <Form onSubmit={handleSubmit}>
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
      </Form>
    </FormContainer>
  );
};

export default OrderForm;
