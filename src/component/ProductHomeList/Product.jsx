import React, { useState } from "react";
import {
  CheckCircle,
  Delete,
  Favorite,
  FavoriteBorderRounded,
  Preview,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { styled } from "styled-components";
import { useCart } from "../../pages/cart/ContextCart";
import { useAuth } from "../Auth";
import DeleteProduct from "../../pages/Admin/DeleteProduct";
import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  overflow: hidden;

  &:hover ${Info} {
    opacity: 1;
    transition: all 0.5s ease;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
  object-fit: cover;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.2);
  }
  &:disabled {
    background-color: teal;
  }
`;

const Product = ({ item, onDelete }) => {
  const {
    addToCart,
    addToWish,
    isProductInCart,
    isProductInWish,
    removeItem,
    removeCartItem,
  } = useCart();

  const [deletingProduct, setDeletingProduct] = useState(false);
  const { isAdmin } = useAuth();
  const isAlreadyInCart = isProductInCart(item.id);
  const handleCartClick = () => {
    if (isAlreadyInCart) {
      removeCartItem(item.id);
    } else {
      addToCart(item);
    }
  };
  const isAlreadyInWish = isProductInWish(item.id);
  const handleWishClick = () => {
    if (isAlreadyInWish) {
      removeItem(item.id);
    } else {
      addToWish(item);
    }
  };

  const handleDeletClick = () => {
    setDeletingProduct(true);
  };

  return (
    <Container>
      <Circle />
      <Image src={item.img} alt={item.name} />
      <Info>
        <Icon
          onClick={handleCartClick}
          disabled={isAlreadyInCart} // Pass the result of isProductInCart
        >
          {isAlreadyInCart ? (
            <CheckCircle style={{ color: "teal" }} />
          ) : (
            <ShoppingCartOutlined />
          )}
        </Icon>
        <Link to={`/singleProduct/${item.id}`} style={{ color: "black" }}>
          <Icon>
            <Preview />
          </Icon>
        </Link>
        {isAdmin && (
          <Icon>
            <Delete onClick={handleDeletClick} />
          </Icon>
        )}
        <Icon onClick={handleWishClick}>
          {isAlreadyInWish ? (
            <Favorite style={{ color: "red" }} />
          ) : (
            <FavoriteBorderRounded />
          )}
        </Icon>
      </Info>
      {deletingProduct && (
        <DeleteProduct
          onDelete={() => {
            onDelete(item.id);
            setDeletingProduct(false);
          }}
          onClose={() => {
            setDeletingProduct(false);
          }}
        />
      )}
    </Container>
  );
};

export default Product;
