import React, { useEffect, useState } from 'react'
interface IProduct {
    id: number,
    name: string,
    price: number
}
interface IProps {
    products: IProduct[],
    onRemove: (id: number) => void
}

const ProductPage = (props: IProps) => {
    /*
        {
            products:[
                {},
                {}
            ]
        }
    */
    const [data, setData] = useState<IProduct[]>([])
    useEffect(() => {
        setData(props.products)
    }, [props])

    function removeProduct(id: number) {
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