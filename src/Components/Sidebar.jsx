import React from "react";
import TestLinks from "../Sidebar/TestLinks";
import AuthorBox from "../Sidebar/AuthorBox";

const Sidebar = () => {
  return (
    <>
      <div className="mb-6">
        <TestLinks />
      </div>
      <div className="mb-6">
        <AuthorBox />
      </div>
    </>
  );
};

export default Sidebar;
