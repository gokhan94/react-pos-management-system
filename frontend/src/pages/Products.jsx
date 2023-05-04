import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../features/product/productSlice'
import ProductItem from '../components/ProductItem'

const Products = () => {

    const { products } = useSelector((state) => state.product)
    const dispatch = useDispatch()

    useEffect(() => {
         dispatch(getProducts())
    }, [dispatch])

  return (
          <div className='product-content'>
            {products ? (
                 products.map((product) => <ProductItem key={product._id} product={product} />)
            ) : (
                "Loading..."
            )}
          </div>
  )
}

export default Products