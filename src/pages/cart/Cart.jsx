import { styled } from "styled-components";
import Announcement from "../../component/Announcement";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./ContextCart";
import QuantityCounter from "./QuantityCounter";
import { Delete } from "@mui/icons-material";
import { useAuth } from "../../component/Auth";
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

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
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
  padding: 2px;
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

const Cart = () => {
  const { cartItems, setCartItems, cartCount, wishCount, setCartCount } =
    useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const updateQuantity = (itemId, newQuantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
    const newCartCount = updatedItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartCount(newCartCount);
  };
  const removeItem = (itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
    setCartCount(cartCount - 1);
  };

  const handleCheckout = () => {
    if (isAuthenticated) {
      navigate("/summary");
    } else {
      navigate("/login");
    }
  };

  const isCartEmpty = cartItems.length === 0;
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to={`/products`}>
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>YOUR WISHLIST {wishCount}!</TopText>
          </TopTexts>

          <TopButton onClick={handleCheckout} disabled={isCartEmpty}>
            CHECKOUT NOW
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
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
                      <u>Price</u>
                    </Price>
                    <AmountContainer>
                      <QuantityCounter
                        initialValue={item.quantity}
                        onQuantityChange={(newQuantity) =>
                          updateQuantity(item.id, newQuantity)
                        }
                      />
                    </AmountContainer>
                    <ProductPrice>$ {item.price}</ProductPrice>
                  </PriceDetail>
                  <hr />
                  <PriceDetail>
                    <DeleteButton onClick={() => removeItem(item.id)}>
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
