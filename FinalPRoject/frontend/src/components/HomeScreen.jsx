import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Product from './Product';

const HomeScreen = () => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    const fetchProducts = async () => {
    
        const { data } = await axios.get('http://localhost:5000/api/products');
        
        setProducts(data);
       
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products:</h1>
      <Row>
        {products.map((item) => (
          <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
            <Product item={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;

