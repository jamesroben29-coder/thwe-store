import React from 'react'
import ProductCard from './ProductCard';
import { products } from "../data/products"
import "./components.css";

const ProductList = ({filteredProducts}) => {


  return (
        <>
            <div className='product-list-group'>
                <h2 className='product-header'>Our Products</h2>
                <p className='product-desc'>Explore our product and best quilities</p>
                <div className='product-list'>
                    {
                        filteredProducts && filteredProducts.length > 0 ? (
                            filteredProducts.map(product => 
                                <ProductCard product={product} key={product.id}/>
                            ) 
                        )
                        :
                        (
                            <div>No products found match your search...</div>
                        ) 
                    }
                  
                </div>
            </div>
        </>
  )
}

export default ProductList;