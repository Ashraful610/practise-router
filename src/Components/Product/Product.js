import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {strMeal,idMeal,strMealThumb,strYoutube,strArea} = product
    const navigate = useNavigate()
    const handler = () => {
        navigate('/product/' + idMeal)
    }
    return (
    <Card>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <h2 className='text-3xl'>Name : {strMeal}</h2>
          <h3 className='text-2xl'>Food : {strArea}</h3>
         <a className='text-2xl no-underline' href={strYoutube}>See Youtube</a>
        </Card.Body>
        <Card.Footer>
        <Button variant="outline-primary" onClick={handler}  size='lg'>Food Detail</Button>
        </Card.Footer>
      </Card>
    );
};

export default Product;