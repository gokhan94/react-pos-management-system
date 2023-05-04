import React from 'react'

const CategoryItem = ({ category }) => {
  
  return (
              <li>
                <a href={`/category/${category.category}`}>
                    <img src={require('../images/pizza.png')} alt='...'/>
                    <span>{ category.category }</span>
                  </a>
              </li>
  )
}

export default CategoryItem