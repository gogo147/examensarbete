import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/Explore.css';

const Product3 = () => {

  const home = () => {
    window.location.href = "./";
  };

  const [ post, setPost ] = useState([]);
  
    const fetchPost = async() => {
      const responsePost = await axios.get(`http://localhost:3000/user`)
      setPost(responsePost.data)
  
    }
  
    useEffect(() => {
      fetchPost();
    }, [])

  return (    
    <>
      {
        post.map((post, index) => 
        <div className='Section' name='info' key={index}>
              <div className='Container'>
              <div className='ColumnLeft'>
                <h1 className='info_h1'>{post.title3}</h1>
                <p className='info_p'>{post.text2}</p>
                <h1 className='info_h1'>{post.price3} kr</h1>
                <div onClick={home} className='Button_product'>
                  {post.button}   
                </div>
                <div className='contact_btn'>
                  {post.contact}   
                </div>

              </div>
              <div className='ColumnRight'>
                <img className='img' src={post.img4} />
              </div>
              
            </div>
           
            </div>
        )
      }
    </> 
  )
}

export default Product3