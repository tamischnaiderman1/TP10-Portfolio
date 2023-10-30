import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [creaciones, setCreaciones] = useState([]);
  const [contacto, setContacto] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("https://dummyjson.com/products");
      setContacto(data.contacto);
    }
    fetchData();
  }, []);

 

  return (
    <APIContext.Provider
      value={{
        creaciones,
        contacto,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}