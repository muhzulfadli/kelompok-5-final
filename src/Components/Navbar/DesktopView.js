import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import LoginButton from "./LoginButton";
import Menu from "./Menu";

const DesktopView = ({ user }) => {
  return (
    <div className="hidden lg:flex items-center justify-between">
      <div className="flex w-5/12 items-center justify-between gap-6">
        <Logo />
        <SearchBar />
      </div>
      {user === null ? <LoginButton /> : <Menu />}
    </div>
  );
};

export default DesktopView;
