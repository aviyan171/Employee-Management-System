import React from "react";
import "./Dashboard.css";
import Home from "../../Assets/Home.png";
import { Link } from "react-router-dom";
import { useData } from "../../Context";
import maleProfile from "../../Assets/maleProfile.jpg";
import femaleProfile from "../../Assets/femaleProfile.jpg";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";

const Dashboard = () => {
  const { people } = useData();
  return (
    <div>
      <p className="Welcome">Welcome to Employee Management System</p>
      <div className="home-container">
        <Link to="/home">
          <img src={Home} alt="Home" className="home-icon" />
        </Link>
        <p className="Home"> Home</p>
      </div>
      <section className="Members">
        {people.map((users) => {
          const { Name, Department, Gender } = users;
          return (
            <div className="member-details">
              <div className="emp-img-container">
                <img
                  src={Gender === "Male" ? maleProfile : femaleProfile}
                  alt=""
                  className="emp-img"
                />
              </div>
              <p className="emp-name">{Name}</p>
              <p className="emp-department">{Department}</p>
            </div>
          );
        })}
        <h4 style={{ margin: "0 auto" }}>List of employees</h4>
      </section>

      <section>
        {/* <h1 className="chart-Heading">Line Charts</h1>
        <ResponsiveContainer width="50%" aspect={3}>
          <LineChart data={people}>
            <XAxis dataKey="Gender" interval={"preserveStartEnd"} />
            <YAxis />
            <Line dataKey={people.Department} />
          </LineChart>
        </ResponsiveContainer> */}
      </section>
    </div>
  );
};

export default Dashboard;
