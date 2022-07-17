import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import DesktopView from "../../Components/Navbar/DesktopView";
import MobileView from "../../Components/Navbar/MobileView/MobileView";
import Menu from "../../Components/Navbar/MobileView/Menu";

const Navbar = () => {

  const [click, setClick] = useState(true);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
   
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(true);
    } else {
      setButton(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const user = useSelector((store) => store.user.data);

  return (
    <div className="z-40 sticky top-0">
      <div className="flex justify-center bg-white px-0 py-5 lg:shadow-lg">
        <div className="container">
          {/* web view start */}
          <DesktopView user={user} />
          {/* web view end */}

          {/* mobile view start */}
          {click ? (
            <MobileView handleClick={handleClick} click={click} />
          ) : (
            <Menu button={button} handleClick={handleClick} user={user} setClick={setClick} />
          )}
          {/* mobile view end */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;