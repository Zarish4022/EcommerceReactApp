import { ShoppingCartOutlined, WavingHand } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "../pages/cart/ContextCart";
import { useAuth } from "./Auth";

const Container = styled.div`
  height: 70px;
  margin: auto;
  background-color: #fcf5f5;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 33.33333%;
  flex: 1;
  padding: 0px;
`;

const Logo = styled.div`
  flex: 1;
  font-weight: 700;
  font-size: 28px;
`;

const Right = styled.div`
  width: 33.33333%;
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 17px;
  cursor: pointer;
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 80px;
  height: 42px;

  &:hover {
    background-color: pink;
  }
`;

// Define styles for active NavLink
const ActiveNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 600;
  &.active {
    color: teal;
    font-weight: bold;
  }
`;

const Navbar = () => {
  const { cartCount } = useCart();
  const auth = useAuth();

  return (
    <Container>
      <Wrapper>
        <Left>
          <ActiveNavLink to="/">
            <Logo>ZARI.STORE</Logo>
          </ActiveNavLink>
        </Left>

        <Right>
          <MenuItem>
            <ActiveNavLink to="/products">Products</ActiveNavLink>
          </MenuItem>
          <MenuItem>
            <ActiveNavLink to="/cart">
              <ShoppingCartOutlined />
              {cartCount}
            </ActiveNavLink>
          </MenuItem>
          <MenuItem>
            <h3>
              <WavingHand /> {auth.user.name}
            </h3>
          </MenuItem>
          {auth.isAuthenticated ? (
            <>
              {auth.user && auth.user.role === "admin" && (
                <MenuItem>
                  <ActiveNavLink to="/dashboard">Admin</ActiveNavLink>
                </MenuItem>
              )}

              <MenuItem>
                <NavLink
                  style={{
                    textDecoration: "none",
                    padding: "7px",
                    borderRadius: "5px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  to="/login"
                  onClick={auth.logout}
                >
                  Logout
                </NavLink>
              </MenuItem>
            </>
          ) : (
            <MenuItem>
              <NavLink
                to="/login"
                style={{
                  textDecoration: "none",
                  padding: "7px",
                  borderRadius: "5px",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Login
              </NavLink>
            </MenuItem>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
