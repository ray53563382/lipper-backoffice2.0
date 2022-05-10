import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "jquery";
import "popper.js";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Login from "./pages/auth/login/login";
import AuthSteps from "./pages/auth/authSteps/authSteps";
import Recovery from "./pages/auth/recovery/recovery";
import SetPassword from "./pages/auth/setPassword/setPassword";
import Loader from "./pages/auth/loader/loader";
import MenuDashboard from "./pages/dashboard/menu-dashboard/menu-dashboard";
import LocalStorage from "./services/local-storage";
import { SESSION } from "./constants";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import "./index.css";

const PrivateRoute = () => {
  const session = LocalStorage.get(SESSION);
  return session ? <Outlet /> : <Navigate to="/auth/login" />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/auth">
        <Route path="login" element={<Login />} />
        <Route path="authentication" element={<AuthSteps />} />
        <Route path="recovery" element={<Recovery />} />
        <Route path="newPassword" element={<SetPassword />} />
        <Route path="loader" element={<Loader />} />
      </Route>
      <Route path="dashboard/*" element={<MenuDashboard />} />
      <Route path="/" element={<PrivateRoute />}></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
