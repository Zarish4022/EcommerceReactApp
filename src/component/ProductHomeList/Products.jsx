import React, { useEffect, useState } from "react"; // Import useState and useEffect
import axios from "axios";
import styled from "styled-components";
import Product from "./Product";
import { Pagination, Stack } from "@mui/material";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const NoProduct = styled.p`
  text-align: center;
  font-size: 20px;
  margin-top: 25px;
  padding: 60px;
`;

const ProductsPerPage = 12;

const Products = ({ selectedFilter, selectedSize, sortOption, onDelete }) => {
  const [products, setProducts] = useState([]); // Use the state variable for products

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      return response.data;
    } catch (error) {
      console.error("Error fetching data", error);
      return [];
    }
  };
  const fetchProducts = async () => {
    const data = await fetchData();
    setProducts(data);
    console.log(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      (selectedFilter === "All" || product.color === selectedFilter) &&
      (selectedSize === "Default" || product.size === selectedSize)
  );

  const sortedProducts = sortProducts(filteredProducts, sortOption);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(sortedProducts.length / ProductsPerPage);
  const startIndex = (currentPage - 1) * ProductsPerPage;
  const endIndex = startIndex + ProductsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  if (currentProducts.length === 0) {
    return <NoProduct>Out Of Stock</NoProduct>;
  }

  return (
    <>
      <Container>
        {currentProducts.map((item) => (
          <Product item={item} key={item.id} onDelete={onDelete} />
        ))}
      </Container>
      <Stack spacing={2} mt={4} justifyContent="center" alignItems="center">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Stack>
    </>
  );
};

const sortProducts = (products, sortOption) => {
  if (sortOption === "High to Low") {
    return products.slice().sort((a, b) => b.price - a.price);
  } else if (sortOption === "Low to High") {
    return products.slice().sort((a, b) => a.price - b.price);
  }
  return products;
};

export default Products;
