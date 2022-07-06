import { BiCube, BiHeart, BiDollar, BiChevronRight } from "react-icons/bi";
import {AiOutlineStar} from "react-icons/ai";
function  WishlistKosong() {
    return (
    <div className="Product">
      <div className="container max-w-screen-lg mx-auto">
        <div className="flex items-center title text-xl font-bold py-6">
          <h1 className="text-center lg:text-left w-full">Daftar Jual Saya</h1>
        </div>

        {/* card nama penjual */}
        <div className="flex p-4 shadow-auto justify-between rounded-3xl">
          <div className="flex">
            <img src="/images/picprofile.png" alt="" className="w-12 h-12" />
            <div className="text-profil ml-5">
              <h1 className="text-sm lg:text-xl font-medium">Nama Penjual</h1>
              <p className="text-tiny lg:text-sm text-gray-300">Kota</p>
            </div>
          </div>
          <button className="border border-purple4 rounded-xl px-5 lg:px-6 lg:py-2 text-sm lg:text-base hover:bg-purple4 hover:text-white hover:font-semibold">
            Edit
          </button>
        </div>
        {/* card nama penjual end */}
        
        {/* mobile kategori card start */}
        <div className="lg:hidden flex gap-4 h-full my-8">
          <div className="flex items-center gap-2 bg-purple1 px-4 py-4 rounded-xl">
            <BiCube className="font-bold text-xl" />
            <p className="text-sm">Produk</p>
          </div>
          <div className="flex items-center gap-2 bg-purple1 px-4 py-4 rounded-xl">
            <BiHeart className="font-bold text-xl" />
            <p className="text-sm">Diminati</p>
          </div>
          <div className="flex items-center gap-2 bg-purple1 px-4 py-4 rounded-xl">
            <BiDollar className="font-bold text-xl" />
            <p className="text-sm">Terjual</p>
          </div>
          <div className="flex items-center gap-2 bg-purple4 px-4 py-4 rounded-xl text-white">
            <AiOutlineStar className="font-bold text-xl" />
            <p className="text-sm">Wishlist</p>
          </div>
        </div>
        {/* mobile kategori card end */}

        {/* Kategori start */}
        <div className="lg:flex mt-8 block">
          <div className="lg:w-1/3">
          <div className="hidden lg:flex justify-center md:justify-start">
              <div className="shadow-auto rounded-lg p-6 h-fit lg:w-60 w-11/12">
                <h2 className="text-xl pb-4">Kategori</h2>
                <button className="flex items-center space-x-2 py-3 w-full border-b border-gray-300">
                  <BiCube />
                  <div className="w-8/12 text-left text-black">Semua Produk</div>
                  <BiChevronRight className="text-gray-400" />
                </button>

                <button className="flex items-center space-x-2 py-3 w-full ">
                  <BiHeart />
                  <div className="w-8/12 text-left">Diminati</div>
                  <BiChevronRight className="text-gray-400" />
                </button>
                <hr className=""></hr>

                <button className="flex items-center space-x-2 py-3 w-full border-b border-gray-300">
                  <BiDollar />
                  <div className="w-8/12 text-left text-black">Terjual</div>
                  <BiChevronRight className="text-gray-400" />
                </button>

                <button className="flex items-center space-x-2 text-purple4 py-3 w-full">
                  <AiOutlineStar />
                  <div className="w-8/12 text-left">Wishlist</div>
                  <BiChevronRight/>
                </button>
              </div>
            </div>
          </div>
             <div className="flex text-center justify-center w-full">
             <p>Kamu Belum Punya Barang Impian</p>
            </div> 
        </div>
      </div>
    </div>
    /* Kategori end */
  );
};

export default WishlistKosong;