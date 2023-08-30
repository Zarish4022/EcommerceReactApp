import { styled } from "styled-components";
import Products from "../../component/ProductHomeList/Products";
import Announcement from "../../component/Announcement";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { useState } from "react";
import { useAuth } from "../../component/Auth";
import { popularProducts } from "../data";
import AddNewProduct from "../Admin/AddNewProduct";
const Container = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  display: flex;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Button = styled.button`
  margin: 25px;
  justify-content: center;
  align-items: center;
  color: white;
  display: flex;
  width: 115px;
  height: 40px;
  background-color: teal;
  border: none;
  padding: 5px;
  border-radius: 7px;
  font-size: 14px;

  cursor: pointer;
  &:hover {
    background-color: #045d5d;
  }
`;
const Upper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;
`;
const optionsMap = [
  { label: "color", disabled: true, selected: true },
  { label: "White" },
  { label: "Black" },
  { label: "Red" },
  { label: "Blue" },
  { label: "Yellow" },
  { label: "Green" },
  { label: "All" },
];

const sizesMap = [
  { label: "Size", disabled: true, selected: true },
  { label: "S" },
  { label: "XS" },
  { label: "M" },
  { label: "L" },
  { label: "XL" },
  { label: "Default" },
];

const sortOptionsMap = [
  { label: "Newest", selected: true },
  { label: "High to Low" },
  { label: "Low to High" },
];

const ProductList = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedSize, setSelectedSize] = useState("Default");
  const [sortOption, setSortOption] = useState("Newest");
  const [addingProduct, setAddingProduct] = useState(false);

  const [newPopularProduct, setnewPopularProduct] = useState(
    JSON.parse(localStorage.getItem("popularProducts")) || popularProducts
  );
  const handleAddNewProduct = (newProduct) => {
    const updatedProducts = [...newPopularProduct, newProduct];
    setnewPopularProduct(updatedProducts);
    localStorage.setItem("popularProducts", JSON.stringify(updatedProducts));
  };
  const { isAdmin } = useAuth();
  const handleDelete = (productId) => {
    // Implement the logic to delete the product with the given productId
    // For example, you can filter out the product from the state or API data
    const updatedProducts = newPopularProduct.filter(
      (product) => product.id !== productId
    );
    setnewPopularProduct(updatedProducts);
    localStorage.setItem("popularProducts", JSON.stringify(updatedProducts));
  };
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Upper>
        <h1>Dresses</h1>

        {isAdmin && (
          <Button onClick={() => setAddingProduct(true)}> New Product</Button>
        )}
      </Upper>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select onChange={(e) => setSelectedFilter(e.target.value)}>
            {optionsMap.map((option, index) => (
              <Option
                key={index}
                disabled={option.disabled}
                selected={option.selected}
              >
                {option.label}
              </Option>
            ))}
          </Select>
          <Select onChange={(s) => setSelectedSize(s.target.value)}>
            {sizesMap.map((option, index) => (
              <Option
                key={index}
                disabled={option.disabled}
                selected={option.selected}
              >
                {option.label}
              </Option>
            ))}
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSortOption(e.target.value)}>
            {sortOptionsMap.map((option, index) => (
              <Option key={index} selected={sortOption === option.label}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Filter>
      </FilterContainer>

      <Products
        selectedFilter={selectedFilter}
        selectedSize={selectedSize}
        sortOption={sortOption}
        products={newPopularProduct}
        isAdmin={isAdmin}
        onDelete={handleDelete}
      />
      {addingProduct && (
        <AddNewProduct
          onClose={() => setAddingProduct(false)}
          onAddNewProduct={handleAddNewProduct}
        />
      )}

      <Footer />
    </Container>
  );
};

export default ProductList;
