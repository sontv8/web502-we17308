import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1)
  }
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
  function removeProduct(id) {
    // console.log(id);
    fetch('http://localhost:3000/products/' + id, {
      method: 'DELETE'
    }).then(() => setProducts(products.filter(item => item.id !== id)))
  }
  return (
    <div className="App">
      {count}
      <button onClick={handleClick}>Click</button>
      {products.map((item) => {
        return <div key={item.id}>
          <h3>{item.name}</h3>
          <button onClick={() => removeProduct(item.id)}>Remove</button>
        </div>
      })}
    </div>
  )
}

export default App
