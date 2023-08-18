import { styled } from "styled-components";
import GenericInput from "../component/GenericInput";
import GenericButton from "../component/GenericButton";
import { Link } from "react-router-dom";
import { useState } from "react";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/images/login2.jpg"); /* Make sure the path to the image is correct */
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
`;

const CustomInput = styled(GenericInput)`
  margin: 10px 5px;
  font-size: 16px;
  outline: none;
  flex: 1;
  ::placeholder {
    color: #aaa;
  }
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  display: block;
  text-align: center;
  color: #555;

  b {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const HaveAccountText = styled.span`
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
`;

const Register = ({ onFormSubmit, onFormSwitch }) => {
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    username: "",
    password: "",
    confirmpassword: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("submitted");
  };
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form onSubmit={handleSubmit}>
          <CustomInput
            placeholder="Name"
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            required
          />
          <CustomInput
            placeholder="Last Name"
            type="text"
            name="lastname"
            value={user.lastname}
            onChange={handleInputChange}
            required
          />
          <CustomInput
            placeholder="Username"
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
            required
          />
          <CustomInput
            placeholder="Email"
            type="email"
            name="email"
            value={user.email}
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
          <CustomInput
            placeholder="Confirm Password"
            type="password"
            name="confirmpassword"
            value={user.confirmpassword}
            onChange={handleInputChange}
            required
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with <b>PRIVACY POLICY</b>
          </Agreement>

          <GenericButton type="submit">Create</GenericButton>
        </Form>
        <HaveAccountText>
          Already have an account?{" "}
          <Link to="/login" style={{ fontWeight: "bold" }}>
            LOGIN
          </Link>
        </HaveAccountText>
      </Wrapper>
    </Container>
  );
};

export default Register;
