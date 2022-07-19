import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard";
import { AiOutlineClose } from "react-icons/ai";

const Card = () => {
  
  const [alertOpen, setAlertOpen] = useState(true);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://binar-second-hand.herokuapp.com/api/v1/product")
      .then((res) => {
        console.log(res);
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
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
      <Link to="/product/addproduct">
        <div className="flex min-h-full lg:h-48 items-center justify-center rounded-2xl border-4 border-dashed border-slate-300 p-8">
          <div className="w-full">
            <div className="flex justify-center text-3xl font-bold">+</div>
            <div className="flex justify-center">Tambah Produk</div>
          </div>
          {/* alert */}
          <div
            className={`bg-successAlert rounded-xl fixed top-32 w-[500px] inset-x-1/2 -translate-x-1/2 px-6 py-2 justify-between flex text-neutral1 ${
              alertOpen ? "hidden" : ""
            }`}
          >
            <h2 className="text-neutral1 my-auto">
              Produk berhasil diterbitkan.
            </h2>
            <div
              role="button"
              onClick={() => setAlertOpen(true)}
              className="my-auto"
            >
              <AiOutlineClose />
            </div>
          </div>
        </div>
      </Link>
      {product.map((data) => {
        return (
          // <Link to="/editproduct">
          <ProductCard key={data.id} data={data} />
          // </Link>
        );
      })}
    </div>
  );
};

export default Card;
