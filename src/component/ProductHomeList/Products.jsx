import styled from "styled-components";
import { popularProducts } from "../../pages/data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Products = ({ selectedFilter, selectedSize, sortOption }) => {
  const filteredProducts = popularProducts.filter(
    (product) =>
      (selectedFilter === "" || product.color === selectedFilter) &&
      (selectedSize === "" || product.size === selectedSize)
  );

  const sortedProducts = sortProducts(filteredProducts, sortOption);

  return (
    <Container>
      {sortedProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

const sortProducts = (products, sortOption) => {
  if (sortOption === "High to Low") {
    return products.sort((a, b) => b.price - a.price);
  } else if (sortOption === "Low to High") {
    return products.sort((a, b) => a.price - b.price);
  }

  return products;
};

export default Products;
