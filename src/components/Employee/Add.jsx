import React from "react";
import { Link } from "react-router-dom";

const Add = ({
  details,
  displayAdd,
  showAdd,
  handleSubmit,
  handleonChange,
  toggle,
}) => {
  //   console.log(details);
  return (
    <div>
      {showAdd ? (
        ""
      ) : (
        <button className="add-item" onClick={displayAdd}>
          Add Items
        </button>
      )}
      {showAdd ? (
        <form className="form-control">
          <p className="employee">Add Employee</p>
          <input
            className="Add-Items"
            type="text"
            placeholder="Name"
            value={details.Name}
            name="Name"
            onChange={handleonChange}
          />
          <input
            className="Add-Items"
            type="email"
            placeholder="Email"
            value={details.Email}
            name="Email"
            onChange={handleonChange}
          />
          <input
            className="Add-Items"
            type="text"
            placeholder="Department"
            value={details.Department}
            name="Department"
            onChange={handleonChange}
          />
          {
            <button type="submit" className="submit" onClick={handleSubmit}>
              {toggle ? "Add" : "Edit"}
            </button>
          }
          <button className="submit" style={{ backgroundColor: "red" }}>
            <Link
              to="/home"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Cancel
            </Link>
          </button>
        </form>
      ) : (
        " "
      )}
    </div>
  );
};

export default Add;
