import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { IProduct } from '../../types/product'
interface IProps {
    products: IProduct[],
    onUpdate: (product: IProduct) => void
}
const UpdateProductPage = (props: IProps) => {
    const { id } = useParams()
    const { register, handleSubmit, reset } = useForm()
    useEffect(() => {
        const currentProduct = props.products.find((product) => product.id === Number(id))
        reset(currentProduct)
    }, [props])
    const onHandleSubmit = data => {
        props.onUpdate(data);
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register('name')} />
                <input type="number" {...register('price')} />
                <button type="submit">Update Product</button>
            </form>
        </div>
    )
}

export default UpdateProductPage