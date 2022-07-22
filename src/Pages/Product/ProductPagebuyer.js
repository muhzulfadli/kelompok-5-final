import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Alert from "../../Components/Buyer/Alert";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalTawar from "../../Components/Buyer/ModalTawar";
import axios from "axios";
import Content from "../../Components/Buyer/Content";

const ProductPagebuyer = () => {
  const [product, setProduct] = useState(null);

  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `https://binar-second-hand.herokuapp.com/api/v1/product/${params.id}`
      )
      .then((res) => {
        if (res.data !== null) {
          setProduct({ ...res.data.product });
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

  const [isOpen, setIsOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(true);
  const [buttonClick, setButtonClick] = useState(true);

  return (
    <div>
      <ModalTawar
        product={product}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setAlertOpen={setAlertOpen}
        setButtonClick={setButtonClick}
      />
      <Alert setAlertOpen={setAlertOpen} alertOpen={alertOpen} />
      <Content
        product={product}
        setIsOpen={setIsOpen}
        buttonClick={buttonClick}
      />
    </div>
  );
};

export default ProductPagebuyer;
