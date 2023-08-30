import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../component/Auth";

const Container = styled.div`
  height: 70px;
  margin: 0;
  background-color: #fcf5f5;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  padding: 0;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 28px;
  margin-left: 20px;
`;

const MenuItem = styled(Link)`
  font-size: 17px;
  cursor: pointer;
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 80px;
  height: 42px;
  text-decoration: none;
  color: black;
  font-weight: 600;
  background-color: ${(props) => (props.active ? "pink" : "transparent")};

  &:hover {
    background-color: pink;
  }
`;

const Right = styled.div`
  width: 33.33333%;
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: flex-end;
`;
// Define styles for active NavLink
const ActiveNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-size: 22px;
  margin-left: 30px;
  padding-top: 9px;
  cursor: pointer;
  &.active {
    color: teal;
    font-weight: bold;
  }
`;
const NavbarFooter = () => {
  const auth = useAuth();
  return (
    <Container>
      <Wrapper>
        <Left>
          <ActiveNavLink to="/">
            <Logo>Admin</Logo>
          </ActiveNavLink>
          <ActiveNavLink to={`/dashboard`}>User</ActiveNavLink>
          <ActiveNavLink to={`/products`}>Products</ActiveNavLink>
        </Left>
        <Right>
          <MenuItem to="/login" onClick={auth.logout}>
            LogOut
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavbarFooter;
