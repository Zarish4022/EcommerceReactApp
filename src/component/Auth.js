import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children, setCartCount, setWishCount }) => {
  const storedUser = JSON.parse(localStorage.getItem("user" || {}));
  const storedIsAdmin = localStorage.getItem("isAdmin") === "true";
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(storedUser || {});
  const [isAdmin, setIsAdmin] = useState(storedIsAdmin);

  const login = (user) => {
    setIsAuthenticated(true);
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));

    if (user.role === "admin") {
      setIsAdmin(true);
      localStorage.setItem("isAdmin", "true");
    }
  };
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("user");
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
    localStorage.removeItem("cartItems");
    setCartCount(0);

    localStorage.removeItem("wishItems");

    setWishCount(0);
  };
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.role) {
      login(storedUser);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated, isAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
