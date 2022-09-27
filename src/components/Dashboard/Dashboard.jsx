import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Home from "../../Assets/Home.png";
import { Link } from "react-router-dom";
import { useData } from "../../Context";
import maleProfile from "../../Assets/maleProfile.jpg";
import femaleProfile from "../../Assets/femaleProfile.jpg";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  Legend,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Dashboard = () => {
  const COLORS = [" #0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF3939"];

  const convert = (a) => {
    const res = {};
    a.forEach((obj) => {
      const key = `${obj.Department}`;
      if (!res[key]) {
        res[key] = { ...obj, count: 0 };
      }
      res[key].count += 1;
    });
    return Object.values(res);
  };

  const { people } = useData();
  const [departments, setDepartments] = useState([]);

  const newData = people.map((data) => {
    return { Department: data.Department };
  });
  useEffect(() => {
    setDepartments(convert(newData));
  }, []);
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
          const { Name, Department, Gender, id } = users;
          return (
            <div key={id} className="member-details">
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
        <h1 className="chart-Heading">Line Charts</h1>
        <div>
          <ResponsiveContainer width="50%" aspect={3}>
            {/* <LineChart data={people}>
            <XAxis dataKey="Department" interval={'preserveStartEnd'} />
            <YAxis />
            <Line dataKey={people.Department} />
          </LineChart> */}
            <LineChart
              width={500}
              height={200}
              data={departments}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 1" />
              <XAxis dataKey="Department" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h1>Pie Chart</h1>
          <ResponsiveContainer width="100%" aspect={3}>
            <PieChart height={"100%"} width={"100%"}>
              <Pie
                data={departments}
                dataKey="count"
                nameKey="Department"
                cx="50%"
                cy="50%"
                fill="#8884d8"
                innerRadius={20}
                label
              >
                {departments.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
