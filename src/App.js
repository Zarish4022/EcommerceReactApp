import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { CartProvider } from "./pages/cart/ContextCart";
import PrivateAdminRoute from "./component/PrivateAdminRoute";
import PrivateUserRoute from "./component/PrivateUserRoute";
import AdminPage from "./pages/Admin/AdminPage";
import AdminProduct from "./pages/adminProduct";

import Cart from "./pages/cart/Cart";
import ProductList from "./pages/ProductListView/ProductList";
import Product from "./component/ProductHomeList/Product";
import Success from "./pages/Success";
import OrderSummary from "./pages/cart/OrderSummary.jsx";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />

          <Route exact path="/user" element={<PrivateAdminRoute />}>
            <Route exact path="/user" element={<AdminPage />} />
          </Route>
          <Route exact path="/productA" element={<PrivateAdminRoute />}>
            <Route exact path="/productA" element={<AdminProduct />} />
          </Route>
          <Route exact path="/summary" element={<PrivateUserRoute />}>
            <Route exact path="/summary" element={<OrderSummary />} />
          </Route>

          <Route path="/singleproduct" element={<Product />} />
          <Route path="/success" element={<Success />} />
          <Route path="/summary" element={<OrderSummary />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
