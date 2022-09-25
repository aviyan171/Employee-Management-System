import React, { useContext, createContext, useState } from "react";

export const useData = () => {
  return useContext(Appcontext);
};
const Appcontext = createContext();

export const Appprovider = ({ children }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [LoginDetails, setLoginDetails] = useState([]);

  return (
    <Appcontext.Provider
      value={{
        Email,
        Password,
        LoginDetails,
        setEmail,
        setPassword,
        setLoginDetails,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export default Appprovider;
