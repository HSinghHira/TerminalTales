import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import NoPage from "../Pages/NoPage";
import Post from "../Pages/Post";

const RoutesIndex = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="post" element={<Post />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesIndex;
