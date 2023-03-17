import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
    const { id } = useParams(); //{id: "1"}
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch('http://localhost:3000/products/' + id)
            .then(response => response.json())
            .then(data => setProduct(data))
    })
    return (
        <div>
            {product.name}
        </div>
    )
}

export default ProductDetailPage