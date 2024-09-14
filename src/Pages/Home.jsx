// Home.jsx
import React from "react";
import Sidebar from "../Components/Sidebar";
import ArticlesIndex from "../Components/ArticlesIndex";

const Home = () => {
  return (
    <div className="flex md:flex-row flex-col md:items-start mx-auto px-4 py-8 w-full max-w-6xl container">
      <div className="md:order-1 md:mx-8 lg:mx-2 md:w-full lg:w-2/3">
        <ArticlesIndex />
      </div>

      <div className="lg:block md:order-2 hidden ml-4 lg:w-1/3">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
