import { BiCube, BiHeart, BiDollar, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import ProductCard from "../../Components/Product/ProductCard";
import { AiOutlineStar } from "react-icons/ai";

const History = () => {
  return (
    <div className="Product">
      <div className="container max-w-screen-lg mx-auto">
        <div className="flex items-center title text-xl font-bold py-4">
          <h1 className="hidden lg:block my-2 lg:w-full lg:text-left">
            Daftar Jual Saya
          </h1>
          <h1 className="text-right w-1/2 absolute lg:hidden top-8 left-16 z-50 ml-6">
            Daftar Jual Saya
          </h1>
        </div>

        {/* card nama penjual */}
        <div className="flex p-4 shadow-auto justify-between items-center rounded-3xl">
          <div className="flex">
            <img src="/images/picprofile.png" alt="" className="w-12 h-12" />
            <div className="text-profil ml-5">
              <h1 className="text-sm lg:text-xl font-medium">Nama Penjual</h1>
              <p className="text-tiny lg:text-sm text-gray-300">Kota</p>
            </div>
          </div>
          <Link to="/infoprofile">
            <button className="border border-purple4 rounded-xl px-5 lg:px-6 py-2 text-sm lg:text-base hover:bg-purple4 hover:text-white hover:font-semibold">
              Edit
            </button>
          </Link>
        </div>
        {/* card nama penjual end */}

        {/* kategori card start */}
        <div className="lg:hidden flex gap-4 h-full my-8">
          <Link to="/productlist">
            <button className="flex items-center gap-2 bg-purple1 hover:bg-purple4 hover:text-white px-4 py-4 rounded-xl">
              <BiCube className="font-bold text-xl" />
              <p className="text-sm">Produk</p>
            </button>
          </Link>
          <Link to="/diminati">
            <button className="flex items-center gap-2 bg-purple1 hover:bg-purple4 hover:text-white px-4 py-4 rounded-xl">
              <BiHeart className="font-bold text-xl" />
              <p className="text-sm">Diminati</p>
            </button>
          </Link>
          <div className="flex items-center gap-2 bg-purple4 px-4 py-4 rounded-xl text-white">
            <BiDollar className="font-bold text-xl" />
            <p className="text-sm">Terjual</p>
          </div>
          <Link to="/wishlistkosong">
            <button className="flex items-center gap-2 bg-purple1 hover:bg-purple4 hover:text-white px-4 py-4 rounded-xl">
              <AiOutlineStar className="font-bold text-xl" />
              <p className="text-sm">Wishlist</p>
            </button>
          </Link>
        </div>
        {/* kategori card end */}

        {/* Kategori start */}
        <div className="lg:flex mt-8 block">
          <div className="lg:w-1/3">
            <div className="hidden lg:flex justify-center md:justify-start">
              <div className="shadow-auto rounded-lg p-6 h-fit lg:w-60 w-11/12">
                <h2 className="text-xl pb-4">Kategori</h2>
                <Link to="/productlist">
                  <button className="flex items-center space-x-2 text-neutral3 py-3 w-full border-b border-neutral2">
                    <BiCube />
                    <div className="w-8/12 text-left text-neutral6">
                      Semua Produk
                    </div>
                    <BiChevronRight />
                  </button>
                </Link>

                <Link to="/diminati">
                  <button className="flex items-center space-x-2 text-neutral3 py-3 w-full border-b border-gray-300">
                    <BiHeart />
                    <div className="w-8/12 text-left text-neutral6">Diminati</div>
                    <BiChevronRight />
                  </button>
                </Link>
                <Link to="/history">
                  <button className="flex items-center space-x-2 text-purple4 py-3 w-full border-b border-purple3">
                    <BiDollar />
                    <div className="w-8/12 text-left">Terjual</div>
                    <BiChevronRight />
                  </button>
                </Link>

                <Link to="/wishlistkosong">
                  <button className="flex items-center space-x-2 text-neutral3 py-3 w-full border-b border-gray-300">
                    <AiOutlineStar />
                    <div className="w-8/12 text-left text-neutral6">
                      Wishlist
                    </div>
                    <BiChevronRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
    /* Kategori end */
  );
};

export default History;
