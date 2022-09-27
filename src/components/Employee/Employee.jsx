import React, { useState } from "react";
import { useEffect } from "react";
import Add from "./Add";
import "./Employee.css";
import { useData } from "../../Context";
import { ToastContainer } from "react-toastify";
import { AiOutlineSortDescending } from "react-icons/ai";
import { BsSortAlphaUpAlt } from "react-icons/bs";

const Employee = () => {
  const {
    deleteNotify,
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
  } = useData();

  const [query, setQuery] = useState("");
  const [order, setorder] = useState("ASC");

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...people].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setPeople(sorted);
      setorder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...people].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setPeople(sorted);
      setorder("ASC");
    }
  };

  const handleonChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
    //  console.log(Name);
  };

  const displayAdd = () => {
    setAdd(!showAdd);
  };

  //delete-Items
  const handleDelete = (id) => {
    const filteredItem = people.filter((item) => item.id !== id);
    setPeople(filteredItem);
    deleteNotify();
  };

  //Edit-Items
  const handleEdit = (id) => {
    const EditItem = people.find((item) => item.id === id);
    setDetails({
      Department: EditItem.Department,
      Name: EditItem.Name,
      Email: EditItem.Email,
      Gender: EditItem.Gender,
    });
    setAdd(true);
    setEditItem(id);
    setToggle(false);
  };

  useEffect(() => {
    localStorage.setItem("User-details", JSON.stringify(people));
  }, [people]);

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  //search-Item
  const SearchedUsers = people.filter((user) =>
    user.Name.toLowerCase().includes(`${query}`)
  );

  console.log();

  return (
    <div>
      <div className="search-container">
        <input
          className="search-array"
          type="text"
          placeholder={`search`}
          value={query}
          onChange={handleQuery}
        />
      </div>
      <Add
        details={details}
        setDetails={setDetails}
        handleonChange={handleonChange}
        people={people}
        setPeople={setPeople}
        handleSubmit={handleSubmit}
        displayAdd={displayAdd}
        showAdd={showAdd}
        setAdd={setAdd}
        toggle={toggle}
      />
      {!showAdd ? (
        <table>
          <tbody>
            <tr>
              <th>
                {order === "DSC" ? (
                  <AiOutlineSortDescending
                    onClick={() => sorting("Name")}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <BsSortAlphaUpAlt
                    onClick={() => sorting("Name")}
                    style={{ cursor: "pointer" }}
                  />
                )}{" "}
                Name
              </th>
              <th>Email</th>
              <th>Department</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
            {SearchedUsers.map((item) => {
              return (
                <>
                  <tr key={item.id}>
                    <td>{item.Name}</td>
                    <td>{item.Email}</td>
                    <td>{item.Department}</td>
                    <td>{item.Gender}</td>
                    <td className="btn-tble">
                      <button
                        className="btn-item delete"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn-item edit"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      ) : (
        " "
      )}
      <ToastContainer />
    </div>
  );
};

export default Employee;
