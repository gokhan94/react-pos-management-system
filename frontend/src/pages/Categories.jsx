import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories } from '../features/category/categorySlice'
import CategoryItem from '../components/CategoryItem'

const Categories = () => {

    const { categories } = useSelector((state) => state.category)
    const dispatch = useDispatch()

    useEffect(() => {
         dispatch(getCategories())
    }, [dispatch])
    
  return (
    <div className='category-menu'>
        <ul>
            {categories ? (
                 categories.map((category) => <CategoryItem key={category._id} category={category} />)
            ) : (
                "Loading..."
            )}
        </ul>
    </div>
  )
}

export default Categories