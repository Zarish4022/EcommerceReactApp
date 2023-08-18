import { useState } from "react";
import { styled } from "styled-components";

const FormContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
  height: 100%;
  background-color: white;
`;

const FormTitle = styled.h2`
  margin-bottom: 10px;
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
  width: 90%;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 95%;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const OrderForm = ({ onFormFilled }) => {
  const [formData, setFormData] = useState({
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      paymentMethod: "",
    });
    onFormFilled(true);
  };

  return (
    <FormContainer>
      <FormTitle>Place Order</FormTitle>
      <Form onSubmit={handleSubmit}>
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
      </Form>
    </FormContainer>
  );
};
export default OrderForm;
