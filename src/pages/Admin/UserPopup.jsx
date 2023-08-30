import React from "react";
import styled from "styled-components";
import { Call, Close, EmailTwoTone } from "@mui/icons-material";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px 30px 40px 30px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 25%;
  color: black;

  position: relative; /* Add relative positioning */
`;

const UserInfoContainer = styled.div`
  display: flex;
  padding: 5px 20px;
  justify-content: center;
`;

const UserPicture = styled.div`
  width: 100px;
  height: 100px;

  border: 4px solid teal;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UserDetails = styled.div`
  text-align: left;
`;

const UserInfo = styled.p`
  margin: 4px 2px;
  margin-left: 15px;
  padding: 2px;
  display: flex;
`;
const Link = styled.a`
  text-decoration: none;
  margin-left: 4px;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: gray;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;
const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  margin-right: 25px;
`;

const Info = styled.div`
  padding: 5px;
`;
const UserPopup = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h1 style={{ marginLeft: "6px" }}>User Profile</h1>
        <CloseButton onClick={onClose}>
          <Close />
        </CloseButton>

        <UserInfoContainer>
          <UserPicture>
            <Image src={user.img} />
          </UserPicture>
          <UserDetails>
            <UserInfo>
              <Label>Name:</Label>
              {user.name}
            </UserInfo>

            <UserInfo>
              <Label>Email:</Label>
              <EmailTwoTone style={{ color: "green", marginRight: "3px" }} />

              <Link href={`mailto:${user.email}`}>{user.email}</Link>
            </UserInfo>

            <UserInfo>
              <Label>Phone:</Label>
              <Call style={{ color: "green", marginRight: "3px" }} />
              <Link href={`tel:${user.num}`}>{user.num}</Link>
            </UserInfo>
          </UserDetails>
        </UserInfoContainer>

        <Info>
          <hr />
          <p>
            <b>Review:</b>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae
            ea molestias iusto, doloremque asperiores cupiditate iure! Itaque
            impedit illo ea quia aut.
          </p>
        </Info>
      </ModalContent>
    </ModalOverlay>
  );
};

export default UserPopup;
