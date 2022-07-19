import React from "react";
import Form from "../../Components/EditProduct/Form";
import BackButton from "../../Components/Product/BackButton";

const EditProduct = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="container">
        <div className="w-full flex flex-col lg:flex-row justify-center gap-8 lg:gap-16 my-10">
          <BackButton />
          <Form />
        </div>
      </div>
    </div>
  );
};

export default EditProduct;