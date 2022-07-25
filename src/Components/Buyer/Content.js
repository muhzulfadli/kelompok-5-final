import React, { useEffect, useState } from "react";
import Fade from "../Buyer/ProductSlider"
import { AiFillStar } from "react-icons/ai";
import Mobile from "./Mobile";
import Seller from "./Seller";
import Detail from "./Detail";
import axios from "axios";
import { useParams } from "react-router-dom";
import wishlistSlice from "../../store/wishlist";
import { useDispatch, useSelector } from "react-redux";

const Content = ({setIsOpen, buttonClick }) => {

  const param = useParams()
  const [profile, setProfile] = useState();
  const [wishlistClicked, setWishlistClicked] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://binar-second-hand.herokuapp.com/api/v1/profile`, {
          headers: {
            Authorization: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        setProfile(res.data.userProfile)
      });
  }, [param.id]);

  const [product, setProduct] = useState(null);
  const params = useParams()
  
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    axios.get("https://binar-second-hand.herokuapp.com/api/v1/wishlist", 
    {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    })
    .then(res => {
      // console.log(res)
      setWishlist(res.data.wishlistAll)
    })
  }, [])

  const handleWishlist = () => {   

    
    const postData = {
      user_id: profile.user_id,
      product_id: product.id
    }

    if (wishlistClicked === false) {
      axios.post("https://binar-second-hand.herokuapp.com/api/v1/wishlist", postData,
      {
        headers: {
          Authorization: localStorage.getItem("accessToken"),
        }
      })
      .then((res) => {
        console.log("ini",res)
        console.log("Berhasil ditambahkan ke wishlist");
        setWishlistClicked(true);
      })
      .catch((err) => {
        console.log("Gagal menambahkan ke wishlist")
      });
    } else if (wishlistClicked === true) {
      axios.delete(`https://binar-second-hand.herokuapp.com/api/v1/wishlist/${param.id}`, {
        headers: {
          Authorization: localStorage.getItem("accessToken"),
        }
      })
      .then((res) => {
        console.log("Berhasil dihapus dari wishlist");
        setWishlistClicked(false)
      })
      .catch((err) => {
        console.log("gagal menghapus dari wishlist")
      })
    } 
  }

  return (
    <div className="container mx-auto w-full lg:max-w-4xl md:py-5">
      {product !== null ? (
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="col-span-3">
            <Fade product ={product} />
            {/* Mobile View */}
            <Mobile
              handleWishlist={handleWishlist}
              wishlistClicked={wishlistClicked}
              product={product}
              buttonClick={buttonClick}
              setIsOpen={setIsOpen}
            />

            <div className="container mx-auto max-w-4xl mt-3 lg:mt-5 -translate-y-9 lg:translate-y-0">
              <div className="col-span-3">
                <div className="shadow-auto rounded-lg p-4 text-sm lg:text-base mx-4 lg:-mx-6">
                  <h2>Deskripsi</h2>
                  <h1 className="py-2 text-neutral3">{product.deskripsi}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            {/* Detail dan Button */}
            <Detail
              wishlist={wishlist}
              product={product}
              handleWishlist={handleWishlist}
              wishlistClicked={wishlistClicked}
              buttonClick={buttonClick}
              AiFillStar={AiFillStar}
              setIsOpen={setIsOpen}
            />
            <Seller product={product}/>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src="/images/loading2.gif" alt="" />
          <p className="text-purple4">Lagi loading coy...</p>
        </div>
      )}
    </div>
  );
};

export default Content;