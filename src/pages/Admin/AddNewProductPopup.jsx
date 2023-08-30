import React, { useState } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: #888;
  font-size: 18px;
  cursor: pointer;
`;

const ImageUpload = styled.input`
  margin-top: 10px;
`;

const AddNewProductPopup = ({ onClose, onAddNewProduct }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      image: imageFile,
    }));
  };

  const handleAddProduct = () => {
    onAddNewProduct(newProduct);
    onClose();
  };

  return (
    <Overlay>
      <PopupContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <h2>Add New Product</h2>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <label>Price: </label>
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <label>Image: </label>
        <ImageUpload
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </PopupContent>
    </Overlay>
  );
};

export default AddNewProductPopup;
