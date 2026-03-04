import { createContext, useContext, useState } from "react";
import api from "../api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);

  const register = async (userName, email, password) => {
    setLoading(true);
    try {
      const response = await api.post("/auth/register", {
        userName,
        email,
        password,
      });
      const { user: newUser } = response.data;
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Une erreur est survenue",
      };
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await api.post("/auth/login", { email, password });
      const { token: newToken, user: newUser } = response.data;
      setUser(newUser);
      setToken(newToken);
      localStorage.setItem("user", JSON.stringify(newUser));
      localStorage.setItem("token", newToken);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Une erreur est survenue",
      };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
