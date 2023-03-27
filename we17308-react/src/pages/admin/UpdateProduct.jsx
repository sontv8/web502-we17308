import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateProductPage = (props) => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        const product = props.products.find(item => item.id == id)
        setProduct(product)
    })

    const [inputValue, setInputValue] = useState({})
    const onHandleChange = (e) => {
        // const name = e.target.name
        // const value = e.target.value
        const { name, value } = e.target
        setInputValue({ ...inputValue, [name]: value })
    }
    const onHandleSubmit = (e) => {
        e.preventDefault()
        const updateData = { ...product, ...inputValue }
        /*
            id, name, prive

            id, name, price
        */
        props.onUpdate(updateData);
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" defaultValue={product?.name} onChange={onHandleChange} name='name' />
                <input type="number" defaultValue={product?.price} onChange={onHandleChange} name='price' />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default UpdateProductPage