import React from "react";
import Slider from "./Slider/Slider";
import Card from "./Card";
import Button from "./Button";
import Category from "./Category";

const Home = ({ product }) => {
  return (
    <section className="my-5 max-w-100% overflow-hidden">
      <div>
        <Slider className="h-60" />
        <div className="container">
          <div className="mt-10 font-bold">Telusuri Kategori</div>
          <Category />
          <Card product={product} />
        </div>
        <Button />
      </div>
    </section>
  )
}

export default Home