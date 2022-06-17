import React from 'react'
import Product from './Pages/Product/ProductSeller'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layouts from './Layouts/Layouts'
import ProductPreview from './Pages/Product/ProductPreview'
const App = () => {
  return (
    <BrowserRouter>
      <div className="font-main">
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route path="/ProductSeller" element={<Product />} />
            <Route path="/ProductPreview" element={<ProductPreview />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>


  )
}

export default App