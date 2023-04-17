import React from 'react';
import '../styles/Info.css';

const InfoSection = ({ movies }) => {
  return (
    <div>
    {movies.map((movie) => (
      <div className='Section' name='info'>
      <div className='Container'>
        <div className='ColumnLeft'>
          <h1 className='info_h1'>{movie.title2}</h1>
          <p className='info_p'>{movie.text2}</p>
        </div>
        <div className='ColumnRight'>
          <img className='img' src={movie.img2} />
        </div>
      </div>
    </div>  
    
    ))}
</div>
      
  )}

export default InfoSection