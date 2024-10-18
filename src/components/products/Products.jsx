import React from 'react'
import Product from '../product/product'

export default function Products({info}) {
  return (
    <div>
      <h1>I am come from Products.</h1>
      <Product info={info}></Product>
      
    </div>
  )
}
