import React, { useState } from "react";
import styled from "styled-components";
import NavbarFooter from "./NavbarFooter";
import { Delete, Edit, Preview } from "@mui/icons-material";
import { UserLogin } from "../data";
import UserPopup from "./UserPopup"; // Import the UserPopup component
import EditUserPopup from "./EditUserPopup"; // Import the EditUserPopup component
import AddNewUserPopup from "./AddNewUser";
import DeleteUserPopup from "./DeleteUserPopup";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 5%;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-decoration: underline;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  height: auto;
`;

const TableHead = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
  width: 30%;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;
`;

const TableCell = styled.td`
  padding: 10px;
  width: 25%;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 5px;
`;

const Button = styled.button`
  background-color: teal;
  color: white;
  padding: 5px;
  border-radius: 7px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #045d5d;
  }
`;

const Total = styled.p`
  font-size: 15px;
  margin: 20px 0;
  font-weight: bold;
`;
const AddButton = styled.button`
  background-color: teal;
  color: white;
  width: 115px;
  height: 40px;
  border-radius: 7px;
  border: none;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    background-color: #045d5d;
  }
`;
const Upper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 12px;
`;
const AdminPage = () => {
  const [editingUser, setEditingUser] = useState(null);
  const [userLogin, setUserLogin] = useState(UserLogin);
  const [previewUser, setPreviewUser] = useState(null);
  const [addingUser, setAddingUser] = useState(false);
  const [deletingUser, setDeletingUser] = useState(null);

  const handlePreviewUser = (user) => {
    setPreviewUser(user);
  };
  const handleShowDeleteConfirmation = (user) => {
    setDeletingUser(user);
  };
  const handleDeleteUser = (userId) => {
    const updatedUserList = userLogin.filter((user) => user.id !== userId);
    setUserLogin(updatedUserList);
  };
  const handleClosePreview = () => {
    setPreviewUser(null);
  };
  const handleAddNewUser = (newUser) => {
    setUserLogin([...userLogin, newUser]);
  };
  return (
    <>
      <NavbarFooter />
      {/* <p>{JSON.stringify(userLogin)}</p> */}
      <Container>
        <Wrapper>
          <Upper>
            <Title>USER</Title>
            <AddButton onClick={() => setAddingUser(true)}>Add New</AddButton>
          </Upper>

          <Table>
            <thead>
              <TableRow>
                <TableHead>
                  <b>ID</b>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </thead>
            <tbody>
              {userLogin.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <b>{user.id}</b>
                  </TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <ButtonGroup>
                      <Button onClick={() => setEditingUser(user)}>
                        <Edit />
                      </Button>
                      <Button
                        onClick={() => handleShowDeleteConfirmation(user)}
                      >
                        <Delete />
                      </Button>
                      <Button onClick={() => handlePreviewUser(user)}>
                        <Preview />
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
          {editingUser && (
            <EditUserPopup
              user={editingUser}
              onClose={() => setEditingUser(null)}
              onUpdateUser={(updatedUser) => {
                const updatedUserList = userLogin.map((u) =>
                  u.id === updatedUser.id ? updatedUser : u
                );
                setUserLogin(updatedUserList);
                setEditingUser(null);
              }}
            />
          )}
          {previewUser && (
            <UserPopup user={previewUser} onClose={handleClosePreview} />
          )}
          {addingUser && (
            <AddNewUserPopup
              onClose={() => setAddingUser(false)}
              onAddNewUser={handleAddNewUser}
            />
          )}
          {deletingUser && (
            <DeleteUserPopup
              user={deletingUser}
              onClose={() => setDeletingUser(null)}
              onDeleteUser={handleDeleteUser}
            />
          )}

          <Total>Total Users: {userLogin.length}</Total>
        </Wrapper>
      </Container>
    </>
  );
};

export default AdminPage;
