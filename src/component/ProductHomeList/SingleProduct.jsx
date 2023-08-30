import { styled } from "styled-components";
import Navbar from "../Navbar";
import Announcement from "../Announcement";
import Newsletter from "../Newsletter";
import Footer from "../Footer";
import { useCart } from "../../pages/cart/ContextCart";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { popularProducts } from "../../pages/data";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 90%;
  height: 90vh;
`;
const InfoContainer = styled.div`
  flex: 2;
  padding: 60px 50px;
`;
const Title = styled.h1`
  font-weight: 600;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  display: flex;

  width: 50%;
  padding: 5px;
  margin: 30px 0px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: teal;
  border-radius: 5px;
  color: white;

  cursor: pointer;
  font-size: 17px;
  font-weight: 700;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  &:hover {
    backgroud-color: lightteal;
    color: white;
  }
`;
const DecreseButton = styled.button`
  border: 1px solid gray;
  border-radius: 50%;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  padding: 5px 10px;
  font-size: 20px;
  font-weight: 600;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)}; //for fade appearance
`;
const IncreaseButton = styled.button`
  border: 1px solid gray;
  border-radius: 50%;
  cursor: pointer;
  padding: 5px 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 20px;
  font-weight: 600;
`;

const Quantity = styled.span`
  font-size: 20px;
  margin: 0 10px;
  font-weight: 600;
`;
const NotFount = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-top: 25px;
  padding: 60px;
`;
const SingleProduct = () => {
  const { cartItems, isProductInCart, addToCart, setCartItems } = useCart();
  const { itemId } = useParams();

  const [product, setProduct] = useState({});
  const [counter, setCounter] = useState(1);
  const [isProductFound, setIsProductFound] = useState(false);
  const handleAddToCart = () => {
    const productWithQuantity = {
      ...product,
      cartquantity: counter, // Store the counter value as cartquantity
    };

    if (isProductInCart(product.id)) {
      // Remove the existing item from the cart
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? productWithQuantity : item
      );

      setCartItems(updatedCart);
    } else {
      // Add the product to the cart
      setCartItems((prevItems) => [...prevItems, productWithQuantity]);
    }
  };

  const getCartItemQuantity = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    return item ? item.cartquantity : 0;
  };
  console.log(product);

  useEffect(() => {
    const selectedItem = popularProducts.find((item) => item.id == itemId);

    console.log("selected item", selectedItem);

    setProduct(selectedItem);
    if (selectedItem) {
      setIsProductFound(true);
      if (isProductInCart(selectedItem.id)) {
        const cartQuantity = getCartItemQuantity(selectedItem.id);
        setCounter(cartQuantity);
      } else {
        setCounter(1);
      }
    } else {
      setIsProductFound(false);
    }
  }, [itemId]);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  const colorOptions = [
    { color: "Black" },
    { color: "Red" },
    { color: "Blue" },
    { color: "Yellow" },
    { color: "Green" },
    { color: "White" },
  ];

  const sizeOptions = [
    { label: "XS" },
    { label: "S" },
    { label: "M" },
    { label: "L" },
    { label: "XL" },
  ];

  return (
    <Container>
      <Announcement />
      <Navbar />
      {isProductFound ? (
        <Wrapper>
          <React.Fragment key={itemId}>
            <ImageContainer>
              <Image src={`http://localhost:3000/${product?.img}`} />
              {/* <img
              src={"http://localhost:3000/images/white%20(2).jfif"}
              alt={product?.name}
            /> */}
            </ImageContainer>
            <InfoContainer>
              <Title>{product?.name}</Title>
              <Desc>{product?.desc}</Desc>
              <Price>${product?.price}</Price>
              <Filter>
                <DecreseButton onClick={decrement} disabled={counter <= 1}>
                  -
                </DecreseButton>
                <Quantity>{counter}</Quantity>
                <IncreaseButton
                  onClick={increment}
                  disabled={counter === product.quantity}
                >
                  +
                </IncreaseButton>
              </Filter>
              <FilterContainer>
                <Filter>
                  <FilterTitle>Color</FilterTitle>
                  <FilterColor disabled>
                    {colorOptions.map((option, index) => (
                      <FilterSizeOption key={index} disabled>
                        {option.color}
                      </FilterSizeOption>
                    ))}
                  </FilterColor>
                </Filter>
                <Filter>
                  <FilterTitle>Size</FilterTitle>
                  <FilterSize disabled>
                    {sizeOptions.map((option, index) => (
                      <FilterSizeOption key={index} disabled>
                        {option.label}
                      </FilterSizeOption>
                    ))}
                  </FilterSize>
                </Filter>
              </FilterContainer>
              <Button onClick={handleAddToCart}>
                {isProductInCart(product.id)
                  ? "Update In Cart "
                  : "Add To Cart"}
              </Button>
            </InfoContainer>
          </React.Fragment>
        </Wrapper>
      ) : (
        <NotFount>Product not found</NotFount>
      )}
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
