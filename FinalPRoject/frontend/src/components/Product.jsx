import React from 'react'
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';




const Product = ({item}) => {
  return (
    <Card className="my-3 p-3 rounded">
        <Link to={`/product/${item._id}`}>
            <Card.Img src={item.image} variant="top" />
        </Link>
        <Card.Body>
            <Link to={`/product/${item._id}`}>
                <Card.Title as="div" className='product-title'>
                 
                 <strong>{item.name}</strong>
                </Card.Title>
                <Card.Text as="div">
                  <Rating value={item.rating} text={`${item.numReviews} reviews`}/>
                </Card.Text>

            </Link>
            <Card.Text as="h3">
               ${item.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product