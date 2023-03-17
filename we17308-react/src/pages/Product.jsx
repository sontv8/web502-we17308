import React from 'react'

const ProductPage = (props) => {

    // function removeProduct(id) {
    //     // console.log(id);
    //     fetch('http://localhost:3000/products/' + id, {
    //         method: 'DELETE'
    //     }).then(() => setProducts(products.filter(item => item.id !== id)))
    // }
    return (
        <div>
            {props.products.map(item => {
                return (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <button>Remove</button>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductPage