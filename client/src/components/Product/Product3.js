import React from 'react';
import '../styles/Explore.css';

const Product3 = ({ movies} ) => {

  const home = () => {
    window.location.href = "./";
  };

  return (    
    <>
            {movies.map((movie) => (
				
              <div className='Section' name='info' key={movie._id}>
              <div className='Container'>
              <div className='ColumnLeft'>
                <h1 className='info_h1'>{movie.title3}</h1>
                <p className='info_p'>{movie.text2}</p>
                <h1 className='info_h1'>{movie.price3} kr</h1>
                <div onClick={home} className='Button_product'>
                  {movie.button}   
                </div>
                <div className='contact_btn'>
                  {movie.contact}   
                </div>

              </div>
              <div className='ColumnRight'>
                <img className='img' src={movie.img4} />
              </div>
              
            </div>
           
            </div>
			))} 
    </> 
  )
}

export default Product3