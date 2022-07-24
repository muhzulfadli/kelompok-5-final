import React from "react";
import Title from "../../Components/Notification/Title";
import Content from "../../Components/Notification/Content";

const Notification = () => {
  return (
    <div className="flex w-full">
      <div className="container">
        <Title />
        <Content />
      </div>
    </div>
  );
};

export default Notification;
