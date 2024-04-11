import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../assets/products-and-images/products'
import Product from './Product'

const HomeScreen = () => {

  return (
    <>
      <h1>Latest Products:</h1>
      <Row>
        {products.map((item) => (
          <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
             <Product item={item}/>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
