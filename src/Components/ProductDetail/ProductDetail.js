import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {productId} = useParams()
    console.log(productId)
    const [product , setProduct] = useState({})
    useEffect(()=> {
        const url = `www.themealdb.com/api/json/v1/1/lookup.php?i=/${productId}`
        fetch(url)
         .then(res => res.json())
         .then(data =>setProduct(data))
    },[product])
    console.log(product)
    return (
        <Card className="bg-dark text-white">
        <Card.Img src={product.strMealThumb} alt="Card image" />
        <Card.ImgOverlay>
          <h2 className='text-2xl text-white'> Name : {product.strMeal}</h2>
          <h2 className='text-2xl text-white'> Food : {product.strArea}</h2>
    
        </Card.ImgOverlay>
      </Card>
    );
};

export default ProductDetail;