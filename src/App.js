import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Layout from "./Components/Layout";
import Register from "./Components/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Layout />}>
            <Route index element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="register" element={<Register/>} />
           
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
