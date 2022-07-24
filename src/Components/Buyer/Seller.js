import axios from "axios";
import React, { useEffect, useState } from "react";

const Seller = () => {  

  const [user, setUser] = useState({})

  useEffect(() => {
    axios.get("https://binar-second-hand.herokuapp.com/api/v1/profile", 
    {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    })
    .then(res => {
      setUser(res.data.userProfile)
    })
  }, [])

  return (
    <div className="col-span-2 mt-5">
      <div className="md:flex hidden shadow-auto rounded-2xl p-4">
        <img className="w-12" src={user.image_url} alt="foto profile" />
        <div className="ml-4">
          <h1 className="font-medium text-sm">{user.nama}</h1>
          <h1 className="text-sm font-normal text-neutral3">kota</h1>
        </div>
      </div>
    </div>
  );
};

export default Seller;
