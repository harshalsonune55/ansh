import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Pages/Main/main";
import RegistrationModal from "./Components/Pages/signup/signup"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Components/Pages/login/login";
import ProfileCards from "./Components/Pages/Profile/Profile";
import ProtectedRoute from "./Components/Protect_route/protect_route";
import UserInfo from "./Components/Pages/personal_info/info";
import ProfileCardp from "./Components/Pages/Profile/demoProfile";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<RegistrationModal />} />
            <Route path="/login" element={<Login />} />
            <Route
        path="/people"
        element={
          <ProtectedRoute>
            <ProfileCards />
          </ProtectedRoute>
        }
      />
        <Route path="/profile" element={<UserInfo/>}/> 
        <Route path="/toprofile" element={<ProfileCardp/>}/> 

        <Route path="/toprofile/:id" element={<ProfileCardp />} />
        </Routes>
          <ToastContainer position="top-center" />

        </div>
      </div>
    </Router>
  );
}

export default App;
