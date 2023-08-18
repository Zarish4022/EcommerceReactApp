import React from "react";
import styled from "styled-components";

import { Close } from "@mui/icons-material";

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
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 35%;
  color: black;
  text-align: center;
  height: auto; /* Adjust height to accommodate dynamic content */
  position: relative;
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

const UserHeading = styled.h2`
  margin-bottom: 10px;
`;

const UserDetails = styled.div`
  margin-top: 20px;
`;

const UserPopup = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <Close />
        </CloseButton>
        <UserHeading>User Preview</UserHeading>
        <UserDetails>
          <h2>
            <strong>Name:</strong>
          </h2>
          <p> {user.name}</p>
          <h2>
            <strong>Email:</strong>
          </h2>
          <p>{user.email}</p>
        </UserDetails>
      </ModalContent>
    </ModalOverlay>
  );
};

export default UserPopup;
