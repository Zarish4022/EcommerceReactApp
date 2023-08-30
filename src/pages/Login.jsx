import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../component/Auth";
import { UserLogin } from "./data";
import GenericInput from "../component/GenericInput";
import GenericButton from "../component/GenericButton";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/images/Reg .jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 255);
  border-radius: 10px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

const CustomButton = styled(GenericButton)``;
const CustomInput = styled(GenericInput)`
  margin: 10px 0;
  border: 2px solid lightgray;
`;

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogin = () => {
    const existingUser = UserLogin.find((u) => u.name === user.username);

    if (existingUser) {
      auth.login({ ...existingUser });
      navigate(existingUser.role === "admin" ? "/dashboard" : "/");
    } else {
      alert("User does not exist");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <StyledForm onSubmit={handleLogin}>
          <CustomInput
            placeholder="UserName"
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
            required
          />
          <CustomInput
            placeholder="Password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
            required
          />
          <CustomButton type="submit">login</CustomButton>
        </StyledForm>
      </Wrapper>
    </Container>
  );
};

export default Login;
