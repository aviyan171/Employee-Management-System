import React, { useContext, createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useData = () => {
  return useContext(Appcontext);
};
const Appcontext = createContext();

export const Appprovider = ({ children }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [LoginDetails, setLoginDetails] = useState([]);

  const addNotify = () => {
    toast("Successfully Added! ");
  };

  const editNotify = () => {
    toast("Successfully Edited! ");
  };

  const deleteNotify = () => {
    toast("Successfully Deleted! ");
  };

  const error = () => {
    toast.error("Please Insert Email and Password");
  };

  const Passworderror = () => {
    toast.error("Please Insert Password");
  };

  const EmptyEmailerror = () => {
    toast.error("Please Insert Email");
  };

  const validEmailError = () => {
    toast.error("Please Insert Valid Email");
  };

  const passwordLengthError = () => {
    toast.error("Password must of 8 Characters");
  };

  const specialCharacter = () => {
    toast.error("You must have atleast 1 special characters and 1 uppercase");
  };

  const [details, setDetails] = useState({
    Name: "",
    Email: "",
    Department: "",
    Gender: "",
  });

  const localStorageData = () => {
    const localdata = localStorage.getItem("User-details");
    return JSON.parse(localdata);
  };

  const [people, setPeople] = useState(localStorageData || []);
  const [Edit, setEditItem] = useState(null);
  const [showAdd, setAdd] = useState(false);
  const [toggle, setToggle] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!toggle && details) {
      setPeople(
        people.map((item) => {
          if (item.id === Edit) {
            return { ...details, id: item.id };
          }
          return item;
        })
      );
      setDetails({ Name: "", Email: "", Department: "", Gender: "" });
      setAdd(false);
      setToggle(true);
      editNotify();
      // setAdd(true);
    } else if (
      details.Name &&
      details.Email &&
      details.Department &&
      details.Gender
    ) {
      const newData = { ...details, id: new Date().getTime().toString() };
      setPeople([...people, newData]);
      addNotify();
      setDetails({ Name: "", Email: "", Department: "", Gender: "" });
      setAdd(false);
    }
  };

  const [login, isLogin] = useState(false);
  return (
    <Appcontext.Provider
      value={{
        Email,
        Password,
        LoginDetails,
        setEmail,
        setPassword,
        setLoginDetails,
        addNotify,
        editNotify,
        deleteNotify,
        error,
        Passworderror,
        EmptyEmailerror,
        validEmailError,
        passwordLengthError,
        specialCharacter,
        handleSubmit,
        details,
        setDetails,
        people,
        setPeople,
        setEditItem,
        showAdd,
        setAdd,
        toggle,
        setToggle,
        login,
        isLogin,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export default Appprovider;
