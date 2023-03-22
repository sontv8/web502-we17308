import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import { useState, useEffect } from 'react'
import ProductDetailPage from './pages/ProductDetail'
import Dashboard from './pages/admin/Dashboard'
import { delteProduct, getAllProduct } from './api/product'
import ProductAdd from './pages/admin/ProductAdd'
import UpdateProductPage from './pages/admin/UpdateProduct'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    // fetch('http://localhost:3000/products')
    //   .then(response => response.json())
    //   .then(data => setProducts(data))
    getAllProduct().then(({ data }) => setProducts(data))
  }, [])
  const onHandleRemove = (id) => {
    // fetch('http://localhost:3000/products/' + id, {
    //   method: 'DELETE'
    // }).then(() => setProducts(products.filter(item => item.id !== id)))
    delteProduct(id).then(() => setProducts(products.filter(item => item.id !== id)))
  }

  const onHandleAdd = (product) => {
    console.log('app.js', product)
    setProducts([...products, { ...product, id: 1 }])
  }

  const onHandleUpdate = (product) => {

  }

  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path="/product/add" element={<ProductAdd onAdd={onHandleAdd} />} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/admin/products/:id/update' element={<UpdateProductPage products={products} />} />
      </Routes>

    </div>
  )
}

export default App





// ví dụ app.js
// function onHandleAdd(product){
//   console.log(product)
// }
// productAdd({onAdd: onHandleAdd, products: []}); // 3





// // ví dụ add.js
// function productAdd({onAdd, products }){
//   onAdd(a + b);
// }