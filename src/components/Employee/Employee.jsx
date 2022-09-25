import React, { useState } from "react";
import { useEffect } from "react";
import Add from "./Add";
import "./Employee.css";

const Employee = () => {
  const localStorageData = () => {
    const localdata = localStorage.getItem("User-details");
    return JSON.parse(localdata);
  };

  const [details, setDetails] = useState({
    Name: "",
    Email: "",
    Department: "",
  });

  const [people, setPeople] = useState(localStorageData || []);
  const [showAdd, setAdd] = useState(false);
  const [Edit, setEditItem] = useState(null);
  const [toggle, setToggle] = useState(true);
  const [query, setQuery] = useState("");

  const handleonChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
    //  console.log(Name);
  };

  const displayAdd = () => {
    setAdd(!showAdd);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!toggle && details) {
      setPeople(
        people.map((item) => {
          if (item.id === Edit) {
            console.log({ ...item, details });
          }
          return item;
        })
      );
      setAdd(false);
    } else if (details.Name && details.Email && details.Department) {
      const newData = { ...details, id: new Date().getTime().toString() };
      setPeople([...people, newData]);
      setDetails({ Name: "", Email: "", Department: "" });
      setAdd(false);
    }
  };

  const handleDelete = (id) => {
    const filteredItem = people.filter((item) => item.id !== id);
    setPeople(filteredItem);
  };

  const handleEdit = (id) => {
    const EditItem = people.find((item) => item.id === id);
    setDetails({
      Department: EditItem.Department,
      Name: EditItem.Name,
      Email: EditItem.Email,
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

  const SearchedUsers = people.filter((user) =>
    user.Name.toLowerCase().includes(`${query}`)
  );

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
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
            {SearchedUsers.map((item) => {
              return (
                <>
                  <tr key={item.id}>
                    <td>{item.Name}</td>
                    <td>{item.Email}</td>
                    <td>{item.Department}</td>
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
    </div>
  );
};

export default Employee;
