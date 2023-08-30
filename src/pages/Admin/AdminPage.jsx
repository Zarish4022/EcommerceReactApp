import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavbarFooter from "./NavbarFooter";
import { Delete, Edit, Preview, Button } from "@mui/icons-material";

import UserPopup from "./UserPopup";
import EditUserPopup from "./EditUserPopup";
import AddNewUserPopup from "./AddNewUser";
import DeleteUserPopup from "./DeleteUserPopup";
import { Pagination, Stack } from "@mui/material";
import axios from "axios";
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

const New2Button = styled.button`
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

const Upper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 12px;
`;

const NewButton = styled.button`
  margin: 5px;
  color: white;
  display: flex;
  width: 115px;
  height: 40px;
  background-color: teal;
  border: none;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 7px;
  font-size: 14px;

  cursor: pointer;
  &:hover {
    background-color: #045d5d;
  }
`;

const AdminPage = () => {
  const [editingUser, setEditingUser] = useState(null);
  const [userLogin, setUserLogin] = useState([]); // Use the state variable for products
  const [previewUser, setPreviewUser] = useState(null);
  const [addingUser, setAddingUser] = useState(false);
  const [deletingUser, setDeletingUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const userPerPage = 2;

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

  const userCount = userLogin.filter((user) => user.role === "user").length;
  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUser = userLogin
    .filter((user) => user.role === "user")
    .slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(userCount / userPerPage);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/UserLogin");
      return response.data;
    } catch (error) {
      console.error("Error fetching data", error);
      return [];
    }
  };
  const fetchProducts = async () => {
    const data = await fetchData();
    setUserLogin(data);
    console.log(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <NavbarFooter />
      <Container>
        <Wrapper>
          <Upper>
            <Title>USER</Title>
            <NewButton onClick={() => setAddingUser(true)}>Add New</NewButton>
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
              {currentUser.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <b>{user.id}</b>
                  </TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <ButtonGroup>
                      <New2Button onClick={() => setEditingUser(user)}>
                        <Edit />
                      </New2Button>
                      <New2Button
                        onClick={() => handleShowDeleteConfirmation(user)}
                      >
                        <Delete />
                      </New2Button>
                      <New2Button onClick={() => handlePreviewUser(user)}>
                        <Preview />
                      </New2Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>

          <Stack spacing={2} mt={4} justifyContent="center" alignItems="center">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </Stack>
          <Total>Total Users: {userCount}</Total>
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
        </Wrapper>
      </Container>
    </>
  );
};

export default AdminPage;
