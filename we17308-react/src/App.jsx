import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import { useState, useEffect } from 'react'
import ProductDetailPage from './pages/ProductDetail'
import Dashboard from './pages/admin/Dashboard'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <div className="App">
      {/* 
        / - Home Page
        /products - Product Page
        /products/:id  - Product Detail Page
      */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage products={products} />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path='/admin' element={<Dashboard />} />
      </Routes>

    </div>
  )
}

export default App
