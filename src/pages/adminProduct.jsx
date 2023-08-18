import { styled } from "styled-components";
import Products from "../component/ProductHomeList/Products";
import Announcement from "../component/Announcement";
import NavbarFooter from "./Admin/NavbarFooter";

import { useState } from "react";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
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

const optionsMap = [
  { label: "color", disabled: true, selected: true },
  { label: "White" },
  { label: "Black" },
  { label: "Red" },
  { label: "Blue" },
  { label: "Yellow" },
  { label: "Green" },
  { label: "all" },
];

const sizesMap = [
  { label: "Size", disabled: true, selected: true },
  { label: "S" },
  { label: "XS" },
  { label: "M" },
  { label: "L" },
  { label: "XL" },
];

const sortOptionsMap = [
  { label: "Newest", selected: true },
  { label: "High to Low" },
  { label: "Low to High" },
];

const AdminProduct = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [sortOption, setSortOption] = useState("Newest");

  return (
    <Container>
      <Announcement />
      <NavbarFooter />
      <Title>Dresses</Title>
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
      />
    </Container>
  );
};

export default AdminProduct;
