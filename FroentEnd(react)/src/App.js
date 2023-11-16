import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginReg from "./components/Login/LoginReg";
import ResetPassword from "./components/Login/ResetPassword";
import SendPasswordResetEmail from "./components/Login/SendPasswordResetEmail";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Home from "./components/Sub_pages/Home";
import Navbar from "./components/Header_Footer/Navbar";
import Everest from "./components/Sub_pages/Everest"
import Footer from "./components/Header_Footer/Footer";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

function App() {
  const {access_token} = useSelector(state => state.auth)
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>  </Route>
          <Route path="/Everest" element={<Everest />}/> 
          <Route path="contact" element={<Contact />} />
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
