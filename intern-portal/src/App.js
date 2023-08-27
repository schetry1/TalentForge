import Login from "./components/Gate/Login";
import Landing from "./components/Landing/Landing";
import Secret from "./components/Gate/Secret";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ResNavbar from "./components/Responsive/ResNavbar";
import StudentProfile from "./components/student-profile/StudentProfile";
import StudentEdit from "./components/EditProfile/EditStudent/StudentEdit";
import CompLanding from "./components/CompanyProfile/CompLanding";
import JobListing from "./components/Jobs/JobListing";
import CompanyProfile from "./components/CompanyProfile/CompanyProfile";
import ManageJobs from "./components/ManageJobs/ManageJobs";
import Comp from "./components/company-profile/Comp";
import SearchPage from "./components/SearchPage/SearchPage"
import Test from "./components/Test";
import ViewResponses from "./components/ManageJobs/ViewResonses";
import OpportunityDetails from "./components/OpportunityDetails/OpportunityDetails"
import ManageStudent from "./components/ManageStudent/ManageStudent";
import StudentLanding from "./components/student-profile/StudentLanding";

function App() {

  const [user,setUser]= useState(null)
  
useEffect(()=>{
  const getUser=()=>{
    fetch("http://localhost:5000/auth/login/success",{
      method:"GET",
      credentials: "include",
      headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    }).then(response=>{
      if(response.status===200)
      return response.json();
      throw new Error("authentication failed")
    }).then(resObject=>{
       setUser(resObject.user)
       console.log(resObject.user)
    }).catch((err) => {
      console.log(err);
    }); 
  }
  getUser();
},[]);
function RequireAuth({ children, redirectTo }) {
  
  return user ? children : <Navigate to={redirectTo} />;
}

console.log("---",user);

  return (
    <BrowserRouter>
    <div>
      <ResNavbar user={user}/>
      <Routes>
      <Route exact path="/" element={<Landing />}/>
      <Route path="/login" element={<Login />}  />
      <Route exact path="/company/register"  element={ <CompLanding/>} />
      <Route  path="/company/:id" element={<Comp />} />
      <Route path="/student/:id" element={ <StudentProfile/>} />
      <Route path='/student/landing' element={< StudentLanding />} />
      <Route path='/student/edit' element={< StudentEdit />} />
      <Route exact path='/manage/:userid' element={<ManageJobs/>} />
      <Route exact path='/jobs' element={ <RequireAuth redirectTo="/login">
            <SearchPage />
          </RequireAuth>} />
      <Route  path='/manage/:jobid/response' element={<ViewResponses/>}/>
      <Route exact path='/jobs/:jobid' element={<OpportunityDetails/>} />
      <Route exact path='/student/manage/:userid' element={<ManageStudent/>} />
    </Routes> 
    </div>
      
    </BrowserRouter>
  );
}



export default App;
