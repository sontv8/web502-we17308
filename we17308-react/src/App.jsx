import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import { useState, useEffect } from 'react'
import ProductDetailPage from './pages/ProductDetail'
import Dashboard from './pages/admin/Dashboard'
import { deleteProduct, getAllProduct, updateProduct, addProduct } from './api/product'
import ProductAdd from './pages/admin/ProductAdd'
import UpdateProductPage from './pages/admin/UpdateProduct'
import ProductManagement from './pages/admin/ProductManagement'
import WebsiteLayout from './pages/layouts/WebsiteLayout'

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
    deleteProduct(id).then(() => setProducts(products.filter(item => item.id !== id)))
  }

  const onHandleAdd = (product) => {
    console.log('app.js', product)
    addProduct(product).then(() => setProducts([...products, product]))
  }

  const onHandleUpdate = (product) => {
    updateProduct(product).then(() => setProducts(products.map(item => item.id === product.id ? product : item)))
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path='products'>
            <Route index element={<ProductPage products={products} onRemove={onHandleRemove} />} />
            <Route path=':id' element={<ProductDetailPage />} />
          </Route>
        </Route>


        {/* <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path="/product/add" element={<ProductAdd onAdd={onHandleAdd} />} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/admin/products' element={<ProductManagement />} />
        <Route path='/admin/products/:id/update' element={<UpdateProductPage products={products} onUpdate={onHandleUpdate} />} /> */}
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