import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../../Components//Product/ProductCard'
import { FaPlus } from 'react-icons/fa'
import Slider from '../../Components/Slider/Slider'
import { BiSearch } from 'react-icons/bi'

const Homepage = () => {

  return (
    <section className="my-5 max-w-100% overflow-hidden">
      <div className=''>
        <Slider className="h-60" />
        <div className='container'>
          <div className="mt-10 font-bold">Telusuri Kategori</div>
          <div className="lg:flex my-4 grid grid-cols-3 gap-2">
            <button type="button" class="text-neutral4 bg-purple1 hover:bg-purple4 hover:text-neutral1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-purple1 dark:focus:ring-purple4"><BiSearch className="mr-2"/>Semua</button>
            <button type="button" class="text-neutral4 bg-purple1 hover:bg-purple4 hover:text-neutral1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-purple1 dark:focus:ring-purple4"><BiSearch className="mr-2"/>Hobi</button>
            <button type="button" class="text-neutral4 bg-purple1 hover:bg-purple4 hover:text-neutral1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-purple1 dark:focus:ring-purple4"><BiSearch className="mr-2"/>Kendaraan</button>
            <button type="button" class="text-neutral4 bg-purple1 hover:bg-purple4 hover:text-neutral1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-purple1 dark:focus:ring-purple4"><BiSearch className="mr-2"/>Baju</button>
            <button type="button" class="text-neutral4 bg-purple1 hover:bg-purple4 hover:text-neutral1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-purple1 dark:focus:ring-purple4"><BiSearch className="mr-2"/>Elektronik</button>
            <button type="button" class="text-neutral4 bg-purple1 hover:bg-purple4 hover:text-neutral1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-purple1 dark:focus:ring-purple4"><BiSearch className="mr-2"/>Kesehatan</button>
          </div>
          <Link to="/productdetail">
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-6">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </Link>
        </div>
        <div className='flex items-center justify-center -ml-24'>
          <Link to='/addproduct'>
            <button type="button" className="fixed bottom-6 shadow-lg shadow-purple4 text-neutral1 bg-purple4 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-purple4 dark:hover:bg-purple4 dark:focus:ring-blue-300"><FaPlus className="mr-2"/>Jual</button>
          </Link>
        </div>

      </div> 
    </section>
  )
}

export default Homepage

