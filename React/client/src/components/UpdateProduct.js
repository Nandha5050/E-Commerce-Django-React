import axios from 'axios'
import React ,{useEffect, useState} from 'react'
import {useNavigate ,useParams} from 'react-router-dom'

export const UpdateProduct = () => {
  const [image,setImage] = useState(null)
  const [name,setName] = useState("")
  const [price,setPrice] = useState("")
  const [description,setDescription] = useState("")
  const [category,setCategory] = useState("")

  const {id} = useParams();
  const navigate = useNavigate();

  const loadProducts = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/api/${id}`);
      console.log(data);
      setImage(data.image);
      setName(data.name);
      setPrice(data.price);
      setDescription(data.description);
      setCategory(data.category);
    } catch (error) {
      console.error("Error loading product:", error);
    }
  };
  

  useEffect(() => {
    loadProducts()
  },[])

  const UpdateProductInfo = async () => {
    try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('category', category);
        if (image) {
            formData.append('image', image);
        }

        await axios.put(`http://127.0.0.1:8000/api/${id}/`, formData, {
            headers: { "Content-Type": "multipart/form-data" }
        });

        alert('Product updated successfully!');
        navigate('/');
    } catch (error) {
        console.error("Update error:", error);
        alert("Failed to update product.");
    }
};


  return (
    <div>
        <h1>Update Page </h1>
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
            <button className='btn-btn-success' onClick={UpdateProductInfo}>Update</button>
          </div>
    </div>
  )
}
