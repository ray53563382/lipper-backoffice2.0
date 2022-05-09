import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery';
import 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './pages/auth/login/Login';
import AuthSteps from './pages/auth/authSteps/authSteps';
import MenuDashboard from './pages/dashboard/menu-dashboard/menu-dashboard';
import LocalStorage from './services/local-storage';
import { SESSION } from './constants';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

const PrivateRoute = () => {
  const session = LocalStorage.get(SESSION);
  return session ? <Outlet /> : <Navigate to="/auth/login" />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/auth" >
        <Route path="login" element={<Login />} />
        <Route path="authentication" element={<AuthSteps />} />
        <Route path="dashboard/*" element={<MenuDashboard />} />
        {/* <Route path="forgot-password" element={<ForgotPassword />} /> */}
      </Route>
      <Route path="/" element={<PrivateRoute/>} >
        {/* <Route path="" element={<IndividualChallenge />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
