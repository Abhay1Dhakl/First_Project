import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes,Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

 import LoginReg from './Components/Login/LoginReg';
 import ResetPassword from './Components/Login/ResetPassword';
 import SendPasswordResetEmail from './Components/Login/SendPasswordResetEmail';
import Navbar from './Components/Header_Footer/Navbar';
 import Home from './Components/Pages/Home';
 import Dashboard from './Components/Pages/Dashboard';
import Header from './Components/Pages/Header';
import SideBar from './Components/SideBar/SideBar';
import ProductAdd from './Components/Product/ProductAdd';
import ProductView from './Components/Product/ProductView';
import User from './Components/Pages/User Detail/User';
import ProductItinerary from './Components/Product/ProductItinerary';
import ProductInclusionExclusion from './Components/Product/ProductInclusionExclusion';
function App() {
  // Access the Redux state (ensure that your Redux store is set up correctly)
  const { access_token } = useSelector((state) => state.auth);

  return (
    <div className="App">
      
        <BrowserRouter>
        <Header/>
        <div className='main d-flex'>
          <div className='sideBarwrapper'>
              <SideBar/>
          </div>
          <div className='content'>

          <Routes>
         
            <Route path="productadd/product" element={<ProductAdd/>} />
            <Route path="productview/product" element={<ProductView/>} />
            <Route path='productitinerary/product' element={<ProductItinerary/>}/>
            <Route path='productincexc/product' element={<ProductInclusionExclusion/>}/>
            <Route path="userdetail/user" element={<User/>} />
              <Route path="/" element={<LoginReg/>}  /> 
             <Route path="/home" element={<Home/>}  /> 
             <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} /> 
            <Route path="/reset" element={<ResetPassword />} /> 
            <Route path="/login" element={!access_token ? <LoginReg /> : <Navigate to="/"/>} /> 
            {/* {<Route path="/" element={<Navigate to="/login" />} />} */}
          </Routes>
          </div>
        </div>
        </BrowserRouter>
  
    </div>
  );
}

export default App;
