import React from 'react';
import '../styles/Explore.css';

const Product = ({ movies} ) => {

  const home = () => {
    window.location.href = "./web";
  };

  return (    
    <>

            {movies.map((movie) => (
				
              <div className='Section' name='info' key={movie._id}>
              <div className='Container'>
              <div className='ColumnLeft'>
                <h1 className='info_h1'>{movie.title}</h1>
                <p className='info_p'>{movie.text2}</p>
                <h1 className='info_h1'>{movie.price} kr</h1>
                <div onClick={home} className='Button_product'>
                  {movie.button}   
                </div>
                <div className='contact_btn'>
                  {movie.contact}   
                </div>

              </div>
              <div className='ColumnRight'>
                <img className='img' src={movie.img3} />
              </div>
              
            </div>
           
            </div>
			))} 
    </> 
  )
}

export default Product