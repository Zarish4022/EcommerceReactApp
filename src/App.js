import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { CartProvider } from "./pages/cart/ContextCart"; // Import useCart
import AdminPage from "./pages/Admin/AdminPage";
import Cart from "./pages/cart/Cart";
import ProductList from "./pages/ProductListView/ProductList";
import Product from "./component/ProductHomeList/Product";
import Success from "./pages/Success";
import OrderSummary from "./pages/cart/OrderSummary.jsx";
import { useAuth } from "./component/Auth";
import Wish from "./pages/cart/Wish";
import Unauthorized from "./pages/Admin/Unauthorized";
import SingleProduct from "./component/ProductHomeList/SingleProduct";

const App = () => {
  const { isAdmin } = useAuth();

  // Custom route guard for admin page
  const AdminPageGuard = ({ element }) => {
    return isAdmin ? element : <Navigate to="/login" />;
  };

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/singleProduct/:itemId" element={<SingleProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
          <Route path="/wishlist" element={<Wish />} />

          {/* Use the AdminPageGuard for the private admin page */}
          <Route
            exact
            path="/dashboard"
            element={<AdminPageGuard element={<AdminPage />} />}
          />

          <Route exact path="/summary" element={<OrderSummary />} />

          <Route path="/singleproduct" element={<Product />} />
          <Route path="/success" element={<Success />} />
          <Route path="/summary" element={<OrderSummary />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
