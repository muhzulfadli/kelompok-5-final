import { BiCube, BiHeart, BiDollar, BiChevronRight } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import ProductCard from "../../Components/Product/ProductCard";

const Product = () => {
  return (
    <div className="Product">
      <div className="container max-w-screen-lg mx-auto">
        <div className="flex items-center title text-xl font-bold py-6">
          <FiMenu className="text-xl font-bold lg:hidden mr-4" />
          <h1>Daftar Jual Saya</h1>
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
        
        {/* kategori card start */}
        <div className="lg:hidden flex gap-4 h-full my-8">
          <div className="flex items-center gap-2 bg-purple4 px-4 py-4 rounded-xl text-white">
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
        </div>
        {/* kategori card end */}

        {/* Kategori start */}
        <div className="lg:flex mt-8 block">
          <div className="lg:w-1/3">
            <div className="hidden lg:flex justify-center md:justify-start">
              <div className="shadow-auto rounded-lg p-6 h-fit lg:w-60 w-11/12">
                <h2 className="text-xl pb-4">Kategori</h2>
                <button className="flex items-center space-x-2 text-purple4 py-3  w-full">
                  <BiCube />
                  <div className="w-8/12 text-left">Semua Produk</div>
                  <BiChevronRight />
                </button>
                <hr className=""></hr>

                <button className="flex items-center space-x-2 text-purple4 py-3  w-full">
                  <BiHeart />
                  <div className="w-8/12 text-left">Diminati</div>
                  <BiChevronRight />
                </button>
                <hr className=""></hr>

                <button className="flex items-center space-x-2 text-purple4 py-3  w-full">
                  <BiDollar />
                  <div className="w-8/12 text-left">Terjual</div>
                  <BiChevronRight />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex min-h-full lg:h-48 items-center justify-center rounded-2xl border-4 border-dashed border-slate-300 p-5 shadow-md">
              <div className="w-full">
                <div className="flex justify-center text-3xl font-bold">+</div>
                <div className="flex justify-center">Tambah Produk</div>
              </div>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
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

export default Product;
