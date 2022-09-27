import { Routes,Route, json, Navigate} from "react-router-dom";
import Authentication from "./components/Authentication/Authentication";
import Dashboard from "./components/Dashboard/Dashboard";
import Employee from "./components/Employee/Employee";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { useData } from "./Context";

function App() {

  const {login}=useData()

  const[isAuth,setAuth]=useState(false)

  console.log(isAuth)

    let localItem = localStorage.getItem('User-details');
  useEffect(() => {
    if (localItem === null || localItem === undefined) {
      localStorage.setItem('User-details', JSON.stringify([]));
    }
  }, []);

  const getdata=localStorage.getItem('logindetails')
  useEffect(()=>{
   if(getdata!==null && getdata !==undefined){
    setAuth(true)
    console.log('no')
   }else{
    setAuth(false)
    console.log('yes')
   }
  },[getdata])
  

  return (
    <>
    <Routes>
    <Route path="/" element={
      !isAuth?   
    <Authentication/>:<Navigate replace to='/dashboard'/>
    
    } />
    <Route path="/dashboard" 
    element={
   
    
      isAuth?
    <Dashboard/>:
    <Navigate replace to='/'/>
    
    
    }/>
    <Route path="/home"
     element={
      isAuth?
      <>
      <Navbar isAuth={isAuth} setAuth={setAuth}/>
     <Employee/>
     </>:<Navigate replace to='/'/>
     }/>
    </Routes>
    </>
  );
}

export default App;
