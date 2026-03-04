import { createContext, useContext } from "react";

export const HomeContext = createContext(null);

export const useHome = () => {
  const context = useContext(HomeContext);
  if (!context) throw new Error("useHome must be used within a HomeProvider");
  return context;
};
