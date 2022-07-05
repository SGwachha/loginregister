import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../components/register/Register";
import Login from "../components/login/Login";
import LandingPage from "../LandingPage";
import ResetPassword from "../components/resetpassword/ResetPassword";
import ForgetPass from "../components/forget/ForgetPass";

const Routing = () => {
  return (
    <Routes>
      <Route path="/landingpage" element={<LandingPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/forget" element={<ForgetPass />} />
    </Routes>
  );
};

export default Routing;
