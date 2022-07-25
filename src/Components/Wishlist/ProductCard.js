import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (product) => {

  return (
    <Link to={`/product/productdetail/${product.product.Product.id}`}>
      <div className="h-60 rounded-2xl border border-slate-300 p-3 shadow-md">
        <div className="flex h-1/2 items-center justify-center rounded-md ">
          <img src={product.product.Product.product_photos[0]} alt="" className="object-contain scale-50"/>
        </div>
        <div className="mt-3 text-sm lg:text-base">{product.product.Product.nama}</div>
        <div className="text-xs my-2 text-neutral3">{product.product.Product.categories}</div>
        <div className="text-xs lg:text-sm">Rp. {product.product.Product.harga}</div>
      </div>
    </Link>
  )
}

export default ProductCard