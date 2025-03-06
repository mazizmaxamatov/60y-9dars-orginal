import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Hommm from "./pages/Hommm";


const App = () => {
  const isAuthenticated = () => localStorage.getItem("accessToken") !== null;

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
  };

  return (
    <>

      <Hommm />

    </>
  );
};

export default App;







