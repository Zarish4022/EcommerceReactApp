import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react"; // Import useState
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
  padding: 0px 20px;
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
  margin-bottom: 3px;
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
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
  display: flex;
  margin-left: 7px;
  justify-content: center;
  margin-right: 10px;

  cursor: pointer;
  overflow: hidden;
`;
const Count = styled.div`
  position: absolute;
  top: 47px;
  margin-left: 15px;
  background-color: teal;
  border-radius: 50%;
  width: 15px;
  overflow: hidden;
  font-size: 12px;
  height: 15px;
  color: white;
`;
const ActiveNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 600;
  padding: 7px;
  &:hover {
    color: teal;
    font-weight: bold;
  }
  &.active {
    color: teal;
    font-weight: bold;
  }
`;
const Dropdown = styled.div`
  position: absolute;
  top: 95px;
  right: 12px;
  width: auto;
  background-color: white;
  overflow: hidden;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: ${(props) => (props.visible ? "block" : "none")};
  z-index: 2;
`;
const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
    color: black;
  }
`;
const Navbar = () => {
  const { cartCount, wishCount } = useCart();
  const auth = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
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
              <Count> {cartCount}</Count>
            </ActiveNavLink>
          </MenuItem>
          <MenuItem>
            <ActiveNavLink to="/wishlist">
              <FavoriteBorderOutlined />
              <Count> {wishCount}</Count>
            </ActiveNavLink>
          </MenuItem>

          {auth?.user?.name ? (
            <MenuItem>
              <UserAvatar
                username={auth.user.name}
                onClick={() => setShowDropdown(!showDropdown)}
                ref={dropdownRef} // Toggle dropdown on click
              >
                <img
                  src={`http://localhost:3000/${auth.user?.img}`}
                  alt="User Avatar"
                />
              </UserAvatar>
              <Dropdown visible={showDropdown}>
                <DropdownItem>
                  <MenuItem style={{ fontWeight: "bold" }}>
                    {auth.user.name}
                  </MenuItem>
                </DropdownItem>
                {auth.isAuthenticated && (
                  <>
                    {auth.user && auth.user.role === "admin" && (
                      <DropdownItem>
                        <ActiveNavLink
                          to="/dashboard"
                          style={{ fontWeight: "bold" }}
                        >
                          Dashboard
                        </ActiveNavLink>
                      </DropdownItem>
                    )}
                    <DropdownItem>
                      <ActiveNavLink
                        style={{ color: "red" }}
                        to="/login"
                        onClick={auth.logout}
                      >
                        Logout
                      </ActiveNavLink>
                    </DropdownItem>
                  </>
                )}
              </Dropdown>
            </MenuItem>
          ) : (
            <MenuItem>
              <ActiveNavLink to="/login">Login</ActiveNavLink>
            </MenuItem>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
