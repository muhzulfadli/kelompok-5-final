import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "../../Components/Homepage/Home";

const Homepage = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://binar-second-hand.herokuapp.com/api/v1/product")
      .then((res) => {
        // console.log(res);
        if (res.data.products !== null) {
          setProduct([...res.data.products]);
        } else {
          return Promise.reject({
            message: "error",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Home product={product} />
  );
};

export default Homepage;
