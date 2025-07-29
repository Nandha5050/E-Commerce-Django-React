import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const ShowProducts = () => {

  const[products,setProducts] = useState([])

  const getProducts = async () => {

      try {
        const response = await axios.get('http://127.0.0.1:8000/api/');
        setProducts(response.data);
      } catch (error) {
        console.error("Axios Error:", error.message);
      }
    };
    
  

  useEffect(() =>{
    getProducts();
  },[])

  return (
    <div className='product-card-info'>
       
        {
          products.map((product,index) =>(
            <Card className='m-2 rounded shadow-lg product-card-info' style={{ width: '22rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text className='product-price-info'>${product.price}</Card.Text>
              <Card.Text className='product-catogory-info'>{product.description}</Card.Text>
              <Card.Text>{product.category}</Card.Text>
              <Link className='btn btn-primary' to={`/${product.id}/`}>Show Details</Link>
            </Card.Body>
            </Card>
          )
            
          )
          
            
        }
    </div>
   

  )
}
