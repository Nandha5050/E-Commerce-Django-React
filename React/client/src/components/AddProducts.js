import axios from 'axios'
import React ,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Button } from 'react-bootstrap'

export const AddProducts = () => {

  const [image,setImage] = useState(null)
  const [name,setName] = useState("")
  const [price,setPrice] = useState("")
  const [description,setDescription] = useState("")
  const [category,setCategory] = useState("")
  const navigate = useNavigate();

  const AddProductInfo = async () => {
    let formField = new FormData();
    formField.append('name', name);
    formField.append('price', price);
    formField.append('description', description);
    formField.append('category', category);
    if (image !== null) {
      formField.append('image', image);
    }
  
    console.log([...formField.entries()]); // Debugging
  
    try {
      const response = await axios.post('http://localhost:8000/api/', formField, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Success:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error Response:', error.response?.data || error.message);
    }
  };
  
    
  
  return (
    <div>
        <h1>Add the Products</h1>
        <div className='container'>
          <div className='form-group'>
            <div className='form-group'>
             
              <label>Select image to Upload</label>
              <img src={image}/>
              
              <input  
                  type='file'
                  className='form-control form-control-lg'
                  name='image'
                  src={image}
                  onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className='form-group'>
              <input  
                  type='text'
                  className='form-control form-control-lg'
                  placeholder='Enter Product Name'
                  name='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input  
                  type='text'
                  className='form-control form-control-lg'
                  placeholder='Enter the Product Price'
                  name='price'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <textarea  
                  type='text'
                  className='form-control form-control-lg'
                  placeholder='About the Product '
                  name='description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input  
                  type='text'
                  className='form-control form-control-lg'
                  placeholder='Enter the Product Category'
                  name='category'
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <button className='btn-btn-success' onClick={AddProductInfo}>Add Product</button>

          </div>
        </div>
    </div>
  )
}
