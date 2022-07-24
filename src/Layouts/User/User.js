import React from "react";
import { Outlet } from "react-router-dom";
import Cover from "./Cover";

const User = () => {
  return (
    <div className="h-screen overflow-hidden font-main">
      <div className="flex flex-row h-full">
        <Cover />
        <Outlet />
      </div>
    </div>
  )
}

export default User