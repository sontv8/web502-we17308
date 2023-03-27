import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getAllProduct } from './api/product'
import './App.css'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getAllProduct().then(({ data }) => setProducts(data))
  }, [])
  const onHandleRemove = (id: number) => {

  }
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
