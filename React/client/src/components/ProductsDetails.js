import axios from 'axios'
import React ,{useState,useEffect} from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";


export const ProductsDetails = () => {

    const [product,setProduct] = useState("")
    const {id} = useParams();
    const navigate = useNavigate();

    const getSingleProduct = async () => {
      try {
          const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}/`);
          console.log("Product Data:", data);
          setProduct(data);
      } catch (error) {
          console.error("Axios Error:", error.message);
      }
  };

  const deleteProduct = async (id) => {
    try {
        const { data } = await axios.delete(`http://127.0.0.1:8000/api/${id}/`);
        navigate('/');
        
    } catch (error) {
        console.error("Axios Error:", error.message);
    }
};

    useEffect(()=>{
        getSingleProduct();
    },[])

  return (
    <div>
       <h1>Product Details</h1>
       <div className='single-product-info'>
        <img src={product.image} height="400" width="250"/>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <p>{product.category}</p>

        <Link className='btn btn-primary' m-2 to={`/${product.id}/update/`}> Update </Link>
        <Link className='btn btn-danger' m-2 onClick={() => deleteProduct(product.id)}> Delete </Link>
       </div>
    </div>
  )
}
