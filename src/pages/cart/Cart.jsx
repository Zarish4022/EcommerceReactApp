import { styled } from "styled-components";
import Announcement from "../../component/Announcement";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
import { useCart } from "./ContextCart";
import QuantityCounter from "./QuantityCounter";
import { Delete } from "@mui/icons-material";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 10px;
`;
const Title = styled.h1`
  font-weight: 600;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filed" && "none"};
  background-color: ${(props) =>
    props.type === "filed" ? "black" : "transparent"};
  color: ${(props) => props.type === "filed" && "white"};
  &:hover {
    background-color: teal;
    color: white;
  }
  &:disabled {
    background-color: white;
    color: gray;
    cursor: not-allowed;
  }
`;

const TopTexts = styled.div``;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 5px;
`;

const Info = styled.div`
  flex: 1;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 16px;
`;
const ProductDetail = styled.div`
  flex: 3;
  display: flex;
`;
const Image = styled.img`
  width: 100px;
`;
const Deatils = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductSize = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
const Price = styled.span`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 12px;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: red;
  cursor: pointer;

  &:hover {
    color: darkred;
  }
`;
const CartEmpty = styled.p`
  text-align: center;
  font-size: 20px;
  margin-top: 25px;
  padding: 60px;
`;

const Cart = () => {
  const { cartItems, setCartItems, removeCartItem, isCartEmpty } = useCart();
  console.log(cartItems);
  const updateQuantity = (itemId, newQuantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, cartquantity: newQuantity } : item
    );

    setCartItems(updatedItems);
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Top>
          <Link to={`/products`}>
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts></TopTexts>
          <Link to="/summary">
            <TopButton disabled={isCartEmpty}>CHECKOUT NOW</TopButton>
          </Link>
        </Top>
        <Bottom>
          <Info>
            {cartItems.length === 0 ? (
              <CartEmpty>Your cart is empty</CartEmpty>
            ) : (
              cartItems.map((item) => (
                <Product key={item.id}>
                  <ProductDetail>
                    <Image src={item.img} />

                    <Deatils>
                      <ProductName>
                        <b>Product:</b> {item.name}
                      </ProductName>
                      <ProductId>
                        <b>Desc:</b> {item.desc}
                      </ProductId>
                      <ProductColor>
                        <b>Color:</b>
                        {item.color}
                      </ProductColor>
                      <ProductSize>
                        <b>Size:</b> {item.size}
                      </ProductSize>
                    </Deatils>
                  </ProductDetail>
                  <hr />
                  <PriceDetail>
                    <Price>
                      <u>Quantity</u>
                    </Price>
                    <AmountContainer>
                      <QuantityCounter
                        onQuantityChange={updateQuantity}
                        initialValue={item.quantity} // Pass the initial quantity value from your item
                        QuantityItem={item.cartquantity}
                        productId={item.id}
                      />
                    </AmountContainer>
                    <ProductPrice>
                      $ {item.price * item.cartquantity}
                    </ProductPrice>
                  </PriceDetail>
                  <hr />
                  <PriceDetail>
                    <DeleteButton onClick={() => removeCartItem(item.id)}>
                      <Delete />
                    </DeleteButton>
                  </PriceDetail>
                </Product>
              ))
            )}
          </Info>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Cart;
