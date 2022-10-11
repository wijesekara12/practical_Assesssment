import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

//components
import AdminViewAds from "./components/Products/AdminViewAds"
import AdvertiserForm from "./components/Products/AdvertiserForm";
import AdminRegistration from "./components/Products/AdminRegistration";
import EditAd from "./components/Products/EditAd";



import Login from "./components/Users/Login";
import Register from "./components/Users/Register";
import Profile from "./components/Users/Profile";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
          <Routes>
           
            <Route path="/" element={<AdvertiserForm />} />
            <Route path="/adminReg" element={<AdminRegistration />} />
            <Route path="/Product/edit/:id/:name/:brand/:price/:category/:smallDesc/:image" element={<EditAd />}
        />
        <Route path="/Product/admin" element={<AdminViewAds />} />
        <Route path="/Product/edit/:id/:name/:brand/:price/:category/:smallDesc/:image" element={<EditAd />}
        />
          
            {/* Users */}
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Register />} />
            <Route path="/profile" element={<Profile />} />

          </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
