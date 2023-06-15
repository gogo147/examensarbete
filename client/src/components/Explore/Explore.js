import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/Explore.css';

function Explore() {

    const product = () => {
        window.location.href = "./product";
    };

    const product2 = () => {
        window.location.href = "./product2";
    };

    const product3 = () => {
        window.location.href = "./product3";
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
      <div className="App">
        {
          post.map((post, index) => 
          <div div name='explore' key={index}>
          <div className='con_ex'>
          <div onClick={product}>
          <div className='card'>
              <div className='image-content'>
                  <img className='overlay' src={post.img3} />
                  <div className='card-image'>
                  </div>
              </div>
  
              <div className='card-content'>
              <h2 className='name'>{post.title}</h2>
                  <p className='description'>
                      {post.text}
                  </p>
  
                  <button className='button'>{post.price} kr</button>
              </div>
          </div> 
          </div>
  
          <div onClick={product2}>
          <div className='card2'>
              <div className='image-content'>
              <img className='overlay2' src={post.img2} />
  
                  <div className='card-image'>
                  </div>
              </div>
  
              <div className='card-content'>
                  <h2 className='name'>{post.title2}</h2>
                  <p className='description'>
                      {post.text}
                  </p>
  
                  <button className='button'>{post.price2} kr</button>
              </div>
          </div>
          </div>
  
          <div onClick={product3}>
          <div className='card3'>
              <div className='image-content'>
              <img className='overlay2' src={post.img4}  />
  
                  <div className='card-image'>
                  </div>
              </div>
  
              <div className='card-content'>
                  <h2 className='name'>{post.title3}</h2>
                  <p className='description'>
                      {post.text}
                  </p>
  
                  <button className='button'>{post.price3} kr</button>
              </div>
          </div>
          </div>;
      </div>

      <div className='con_ex2' >
        <div onClick={product}>
          <div className='card'>
              <div className='image-content'>
                  <img className='overlay' src={post.img3} />
                  <div className='card-image'>
                  </div>
              </div>
  
              <div className='card-content'>
              <h2 className='name'>{post.title}</h2>
                  <p className='description'>
                      {post.text}
                  </p>
  
                  <button className='button'>{post.price} kr</button>
              </div>
          </div> 
          </div>
  
          <div onClick={product2}>
          <div className='card2'>
              <div className='image-content'>
              <img className='overlay2' src={post.img2} />
  
                  <div className='card-image'>
                  </div>
              </div>
  
              <div className='card-content'>
                  <h2 className='name'>{post.title2}</h2>
                  <p className='description'>
                      {post.text}
                  </p>
  
                  <button className='button'>{post.price2} kr</button>
              </div>
          </div>
          </div>
  
          <div onClick={product3}>
          <div className='card3'>
              <div className='image-content'>
              <img className='overlay2' src={post.img4}  />
  
                  <div className='card-image'>
                  </div>
              </div>
  
              <div className='card-content'>
                  <h2 className='name'>{post.title3}</h2>
                  <p className='description'>
                      {post.text}
                  </p>
  
                  <button className='button'>{post.price3} kr</button>
              </div>
          </div>
          </div>;
      </div>

      <div className='con_ex3' >
        <div onClick={product}>
          <div className='card'>
              <div className='image-content'>
                  <img className='overlay' src={post.img3} />
                  <div className='card-image'>
                  </div>
              </div>
  
              <div className='card-content'>
              <h2 className='name'>{post.title}</h2>
                  <p className='description'>
                      {post.text}
                  </p>
  
                  <button className='button'>{post.price} kr</button>
              </div>
          </div> 
          </div>
  
          <div onClick={product2}>
          <div className='card2'>
              <div className='image-content'>
              <img className='overlay2' src={post.img2} />
  
                  <div className='card-image'>
                  </div>
              </div>
  
              <div className='card-content'>
                  <h2 className='name'>{post.title2}</h2>
                  <p className='description'>
                      {post.text}
                  </p>
  
                  <button className='button'>{post.price2} kr</button>
              </div>
          </div>
          </div>
  
          <div onClick={product3}>
          <div className='card3'>
              <div className='image-content'>
              <img className='overlay2' src={post.img4}  />
  
                  <div className='card-image'>
                  </div>
              </div>
  
              <div className='card-content'>
                  <h2 className='name'>{post.title3}</h2>
                  <p className='description'>
                      {post.text}
                  </p>
  
                  <button className='button'>{post.price3} kr</button>
              </div>
          </div>
          </div>;
      </div>

      </div>
          )
        }
      </div>
    );
  }
  
  export default Explore;