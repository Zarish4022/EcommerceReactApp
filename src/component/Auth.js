import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children, setCartCount }) => {
  const storedUser = localStorage.getItem("user");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(storedUser || {});

  const login = (user) => {
    setIsAuthenticated(true);
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };
  const logout = () => {
    setIsAuthenticated(false);
    setUser({});
    localStorage.removeItem("user");
    localStorage.removeItem("cartItems");
    setCartCount(0);
  };
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.role) {
      login(storedUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
