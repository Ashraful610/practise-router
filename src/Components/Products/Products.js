import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products ,setProduct] = useState([]) 
     useEffect(() => {
         fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
          .then(res => res.json())
          .then(data => setProduct(data.meals))
     },[])
     console.log(products)
    return (
        <div className='p-4'>
            <h2 className='text-5xl text-white'>Welcome to our Resturant</h2>
             <div className='grid md:grid-cols-3 grid-cols-1 gap-4 m-4'>
                 {
                     products.map(product => <Product key={product.idMeal} product={product}></Product>)
                 }

             </div>
        </div>
    );
};

export default Products;