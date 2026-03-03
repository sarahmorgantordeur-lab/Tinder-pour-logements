import { createContext, useContext, useState } from "react";
import api from "../api";

const HomeContext = createContext(null);

export const HomeProvider = ({ children }) => {
  const [home, setHome] = useState(() => {
    const stored = localStorage.getItem("home");
    return stored ? JSON.parse(stored) : null;
  });

  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  const [loading, setLoading] = useState(false);

  const register = async (type, price, number, street, city, country) => {
    setLoading(true);
    try {
      const response = await api.post("/home/register", {
        type,
        price,
        number,
        street,
        city,
        country
      });

      const { home: newHome, token: newToken } = response.data;

      setHome(newHome);
      setToken(newToken);

      localStorage.setItem("home", JSON.stringify(newHome));
      localStorage.setItem("token", newToken);

      return { success: true };
    } catch (error) {
      return {
        success: false,
        error:
          error.response?.data?.message ||
          "Une erreur est survenue",
      };
    } finally {
      setLoading(false);
    }
  };

  const deleteHome = () => {
    setHome(null);
    setToken(null);
    localStorage.removeItem("home");
    localStorage.removeItem("token");
  };

  return (
    <HomeContext.Provider
      value={{
        home,
        token,
        loading,
        register,
        deleteHome,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHome = () => {
  const context = useContext(HomeContext);

  if (!context) {
    throw new Error(
      "useHome must be used within a HomeProvider"
    );
  }

  return context;
};


  
