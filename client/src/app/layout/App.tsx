import { useEffect, useState } from "react"
import type Product from "../models/product";


function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])


  const addProduct = () => {
    setProducts(prevState => {
      const product: Product = {
        id: prevState.length + 1,
        name: 'product' + (prevState.length + 1),
        price: (prevState.length * 100) + 100,
        description: 'test',
        pictureUrl: 'https://picsum.photo/200',
        type: 'test',
        brand: 'test',
        quantityInStock: 100
      }

      return [...prevState, product]
    })
  }

  return (
    <div>
      <h1>Re-Store</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
      <button onClick={() => addProduct()}>Add product</button>
      <h1></h1>
    </div>
  )
}

export default App
