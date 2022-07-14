import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../Components//Product/ProductCard";
import { FaPlus } from "react-icons/fa";
import Slider from "../../Components/Slider/Slider";
import axios from "axios";
import CategoryButton from "../../Components/Homepage/CategoryButton";

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
    <section className="my-5 max-w-100% overflow-hidden">
      <div className="">
        <Slider className="h-60" />
        <div className="container">
          <div className="mt-10 font-bold">Telusuri Kategori</div>
          <div className="lg:flex my-4 grid grid-cols-3 gap-2">
            <CategoryButton category="Semua" />
            <CategoryButton category="Hobi" />
            <CategoryButton category="Kendaraan" />
            <CategoryButton category="Baju" />
            <CategoryButton category="Elektronik" />
            <CategoryButton category="Kesehatan" />
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6  ">
            {product.map((data) => {
              return (
                  <ProductCard key={data.id} data={data} />
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-center -ml-24">
          <Link to="/product/addproduct">
            <button
              type="button"
              className="fixed bottom-6 shadow-lg shadow-purple4 hover:shadow-purple5 text-neutral1 bg-purple4 hover:bg-purple5 focus:ring-4 focus:outline-none focus:ring-purple2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center transition ease-in-out duration-300"
            >
              <FaPlus className="mr-2" />
              Jual
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
