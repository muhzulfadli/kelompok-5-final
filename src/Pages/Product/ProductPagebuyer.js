import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Alert from "../../Components/Buyer/Alert";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalTawar from "../../Components/Buyer/ModalTawar";
import { AiFillStar } from "react-icons/ai";
import axios from 'axios';
import Responsive from '../../Components/Buyer/Responsive';
import Fade from   '../../Components/Buyer/ProductSlider';

const ProductPagebuyer = () => {

  const [product, setProduct] = useState(null);

  const params = useParams()

  useEffect(() => {
      axios.get(`https://binar-second-hand.herokuapp.com/api/v1/product/${params.id}`)
      .then( res => {
          if ( res.data !== null ) {
              setProduct({...res.data.product})
          } else {
            return Promise.reject({
              message: "error",
            });
          }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id])

  const [isOpen, setIsOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(true);
  const [buttonClick, setButtonClick] = useState(true);
  const [wishlistClicked, setWishlistClicked] = useState(false);

  const handleWishlist = () => {
    setWishlistClicked(current => !current);
  }

  return (
    <>
      {/* modal */}
      <ModalTawar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setAlertOpen={setAlertOpen}
        setButtonClick={setButtonClick}
      />

      {/* alert */}
      <Alert setAlertOpen={setAlertOpen} alertOpen={alertOpen} />

      <div className="container mx-auto w-full lg:max-w-4xl md:py-5" >
        {product !== null ?   (
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="col-span-3">
            <Fade />
            {/* responsive */}
            <Responsive handleWishlist={handleWishlist} wishlistClicked={wishlistClicked} product={product} />
            {/* responsive penjual */}
            <div className="container mx-auto max-w-4xl mt-3 -translate-y-11">
              <div className="flex md:hidden shadow-auto rounded-lg bg-white p-4 text-base font-medium  mx-4 px-3">
                <img className="w-12" src="/images/picprofile.png" alt="" />
                <div className="ml-4">
                  <h1 className="font-medium text-sm">Nama Penjual</h1>
                  <h1 className="text-sm font-normal text-neutral3">kota</h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:hidden items-center w-full right">
              {buttonClick ? (
                <button
                  onClick={() => setIsOpen(true)}
                  className="fixed left-46 w-[77%] bottom-6 z-20 shadow-lg shadow-purple4 text-neutral1 bg-purple4 focus:outline-none focus:ring-purple2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mx-auto lg:mr-2 dark:bg-purple4 dark:hover:bg-purple5 dark:focus:ring-purple4"
                >
                  <span className="w-full">Saya tertarik dan ingin nego</span>
                </button>
              ) : (
                <button
                  onClick={() => setIsOpen(true)}
                  className="fixed left-46 w-[77%] bottom-6 z-20 shadow-lg text-neutral1 bg-neutral2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mx-auto lg:mr-2"
                  disabled
                >
                  <span className="w-full">Saya tertarik dan ingin nego</span>
                </button>
              )}
            </div>

            <div className="container mx-auto max-w-4xl mt-3 lg:mt-5 -translate-y-9 lg:translate-y-0">
              <div className="col-span-3">
                <div className="shadow-auto rounded-lg p-4 text-sm lg:text-base mx-4 lg:-mx-6">
                  <h2>Deskripsi</h2>
                  <h1 className="py-2 text-neutral3">
                    {product.deskripsi}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="shadow-auto rounded-lg p-5 md:block hidden">
              <div className="flex justify-between">
                <div className="space-y-1" >
                  <h2 className="text-base font-medium">{product.nama}</h2>
                  <p className="text-sm font-normal text-neutral3">{product.categories}</p>
                  <p className="font-normal text-base">Rp {product.harga}</p>
                </div>
                  <div onClick={handleWishlist} className={`text-2xl ${wishlistClicked? "text-purple4" : "text-neutral2"} hover:text-purple4 cursor-pointer`}>
                    <AiFillStar />
                  </div>
              </div>

              {/* modal button */}
              {buttonClick ? (
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-purple4 hover:bg-purple5 w-full py-3 mt-2 rounded-2xl font-medium text-sm text-white transition ease-in-out duration-300"
                  id="tertarik-btn"
                >
                  Saya tertarik dan ingin nego
                </button>
              ) : (
                <button
                  className="bg-neutral2 w-full py-3 mt-2 rounded-2xl font-medium text-sm text-white"
                  id="tertarik-btn"
                >
                  Menunggu respon penjual
                </button>
              )}
            </div>
            {/* modal button end */}

            <div className="col-span-2 mt-5">
              <div className="md:flex hidden shadow-auto rounded-2xl p-4">
                <img className="w-12" src="/images/picprofile.png" alt="" />
                <div className="ml-4">
                  <h1 className="font-medium text-sm">Nama Penjual</h1>
                  <h1 className="text-sm font-normal text-neutral3">kota</h1>
                </div>
              </div>
            </div>
          </div>
        
        </div>
        ): ("Lagi loading coy...")}
      </div>
    </>
  );
};

export default ProductPagebuyer;
