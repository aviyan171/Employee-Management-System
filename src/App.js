import { Routes,Route} from "react-router-dom";
import Authentication from "./components/Authentication/Authentication";
import Dashboard from "./components/Dashboard/Dashboard";
import Employee from "./components/Employee/Employee";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Authentication/>} />
    <Route path="/dashboard" 
    element={
    <>
    <Navbar/>
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
