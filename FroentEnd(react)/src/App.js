import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginReg from "./components/Login/LoginReg";
import ResetPassword from "./components/Login/ResetPassword";
import SendPasswordResetEmail from "./components/Login/SendPasswordResetEmail";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Home from "./components/Sub_pages/Home";
import Navbar from "./components/Header_Footer/Navbar";
import Everest from "./components/Sub_pages/Everest";
import Pokhara from "./components/Sub_pages/Pokhara"
import Footer from "./components/Header_Footer/Footer";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import Main from "./components/new_page/Main"
function App() {
  const {access_token} = useSelector(state => state.auth)
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={!access_token ? <LoginReg /> : <Home></Home>}>  </Route>
          <Route path="/Everest" element={!access_token ? <LoginReg /> : <Everest></Everest>}/> 
          <Route path="/Pokhara" element={!access_token ? <LoginReg /> : <Pokhara></Pokhara>}/> 
          <Route path="/Annapurna" element ={!access_token ? <LoginReg /> : <Main></Main>}></Route>
          <Route path="contact" element={!access_token ? <LoginReg /> : <Contact></Contact>} />
          <Route path="login" element={!access_token ? <LoginReg /> : <Navigate to="/"/>} />
          <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
          <Route path="reset" element={<ResetPassword />} />
          <Route path="/dashboard" element={access_token ? <Dashboard /> : <Navigate to="/login"/>}  />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
