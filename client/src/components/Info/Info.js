import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/Info.css';

function Info() {

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
        <div className='Section' name='info'>
          <div className='Container'>
            <div className='ColumnLeft'>
              <h1 className='info_h1'>{post.title2}</h1>
              <p className='info_p'>{post.text2}</p>
            </div>
            <div className='ColumnRight'>
              <img className='img' src={post.img2} />
            </div>
          </div>
        </div>  
        )
      }
    </>
    );
  }
  
  export default Info;