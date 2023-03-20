import React, { useEffect, useState } from 'react'

const ProductPage = (props) => {

    const [data, setData] = useState([])
    useEffect(() => {
        setData(props.products)
    }, [props])

    function removeProduct(id) {
        // console.log(id);
        props.onRemove(id)
    }
    return (
        <div>
            {data.map(item => {
                return (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <button onClick={() => removeProduct(item.id)}>Remove</button>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductPage