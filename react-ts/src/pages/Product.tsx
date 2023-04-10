import React, { useState, useEffect } from 'react'
import { IProduct } from '../types/product'

interface IProps {
    products: IProduct[],
    onRemove: (id: string) => void
}
const ProductPage = (props: IProps) => {

    const [data, setData] = useState<IProduct[]>([])
    useEffect(() => {
        setData(props.products)
    }, [props])
    const removeProduct = (id: string) => {
        props.onRemove(id)
    }

    return (
        <div>
            <h1>ProductPage</h1>
            <div>
                {data.map((item) => {
                    return (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <button onClick={() => removeProduct(item.id)}>Remove</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductPage