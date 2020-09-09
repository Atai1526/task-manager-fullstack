import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CategoryList = ({ categories, addCategory }) => {
  const [categoryInput, setCategoryInput] = useState('')
  return (
    <div>
      {categories.map((category, index) => (
        <div key={index}>
          <Link to={`/${category}`}>{category}</Link>
        </div>
      ))}
      <input type="text" onChange={(el) => setCategoryInput(el.target.value)} />
      <button type="button" onClick={() => addCategory(categoryInput)}>
        Add category
      </button>
    </div>
  )
}

export default CategoryList
