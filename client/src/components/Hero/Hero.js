import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/button.css';
import '../styles/Hero.css';
import { Link } from 'react-scroll';

function Hero() {

  const handleLogout = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
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
    <div className="Hero">
      {
        post.map((post, index) => 
        <div className='HeroSection' name='home' key={index}>
        <div className='HeroSlide'> 
          <div className='HeroSlider'>
          <img src={post.img} className="pic"/>
          <div className='HeroContent'>    
          <div className='bar'>
            <ul className='list'>
              <li>
                  <Link to='home' smooth={true} duration={500}>Home</Link>
              </li>

              <li>
                  <Link to='info' smooth={true} duration={500}>About</Link>
              </li>

              <li>
                  <Link to='explore' smooth={true} duration={500}>Explore</Link>
              </li>

              <li>
              <div onClick={handleLogout}>Log Out</div>
              </li>
            </ul>
          </div>   
          <h1>{post.title2}</h1>
          <h1>{post.price} kr</h1>
            <Link to='info' className='Button' css={`max-width: 160px;`} smooth={true} duration={500}>
              {post.label}
            </Link>
            </div>
          </div>
        </div>
        </div>
        )
      }
    </div>
  );
}

export default Hero;
