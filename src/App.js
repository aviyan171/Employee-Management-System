import { Routes,Route} from "react-router-dom";
import Authentication from "./components/Authentication/Authentication";
import Dashboard from "./components/Dashboard/Dashboard";
import Employee from "./components/Employee/Employee";
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";

function App() {

    let localItem = localStorage.getItem('User-details');
  useEffect(() => {
    if (localItem === null || localItem === undefined) {
      localStorage.setItem('User-details', JSON.stringify([]));
    }
  }, []);
  return (
    <>
    <Routes>
    <Route path="/" element={<Authentication/>} />
    <Route path="/dashboard" 
    element={
    <>
    <Dashboard/>
    </>
    }/>
    <Route path="/home"
     element={
      <>
      <Navbar/>
     <Employee/>
     </>
     }/>
    </Routes>
    </>
  );
}

export default App;
