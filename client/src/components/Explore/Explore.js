import React from 'react';
import '../styles/Explore.css';

const Explore = ({ movies} ) => {

    const product = () => {
        window.location.href = "./product";
    };

    const product2 = () => {
        window.location.href = "./product2";
    };

    const product3 = () => {
        window.location.href = "./product3";
    };

  return (    
    <>

            {movies.map((movie) => (
                <div div name='explore' key={movie._id}>
                <div className='con_ex' >
                <div onClick={product}>
                <div className='card'>
                    <div className='image-content'>
                        <img className='overlay' src={movie.img3} />
                        <div className='card-image'>
                        </div>
                    </div>
        
                    <div className='card-content'>
                    <h2 className='name'>{movie.title}</h2>
                        <p className='description'>
                            {movie.text}
                        </p>
        
                        <button className='button'>{movie.price} kr</button>
                    </div>
                </div> 
                </div>
        
                <div onClick={product2}>
                <div className='card2'>
                    <div className='image-content'>
                    <img className='overlay2' src={movie.img2} />
        
                        <div className='card-image'>
                        </div>
                    </div>
        
                    <div className='card-content'>
                        <h2 className='name'>{movie.title2}</h2>
                        <p className='description'>
                            {movie.text}
                        </p>
        
                        <button className='button'>{movie.price2} kr</button>
                    </div>
                </div>
                </div>
        
                <div onClick={product3}>
                <div className='card3'>
                    <div className='image-content'>
                    <img className='overlay2' src={movie.img4}  />
        
                        <div className='card-image'>
                        </div>
                    </div>
        
                    <div className='card-content'>
                        <h2 className='name'>{movie.title3}</h2>
                        <p className='description'>
                            {movie.text}
                        </p>
        
                        <button className='button'>{movie.price3} kr</button>
                    </div>
                </div>
                </div>;
            </div>

            <div className='con_ex2' >
                <div onClick={product}>
                <div className='card'>
                    <div className='image-content'>
                        <img className='overlay' src={movie.img3} />
                        <div className='card-image'>
                        </div>
                    </div>
        
                    <div className='card-content'>
                    <h2 className='name'>{movie.title}</h2>
                        <p className='description'>
                            {movie.text}
                        </p>
        
                        <button className='button'>{movie.price} kr</button>
                    </div>
                </div> 
                </div>
        
                <div onClick={product2}>
                <div className='card2'>
                    <div className='image-content'>
                    <img className='overlay2' src={movie.img2} />
        
                        <div className='card-image'>
                        </div>
                    </div>
        
                    <div className='card-content'>
                        <h2 className='name'>{movie.title2}</h2>
                        <p className='description'>
                            {movie.text}
                        </p>
        
                        <button className='button'>{movie.price2} kr</button>
                    </div>
                </div>
                </div>
        
                <div onClick={product3}>
                <div className='card3'>
                    <div className='image-content'>
                    <img className='overlay2' src={movie.img4}  />
        
                        <div className='card-image'>
                        </div>
                    </div>
        
                    <div className='card-content'>
                        <h2 className='name'>{movie.title3}</h2>
                        <p className='description'>
                            {movie.text}
                        </p>
        
                        <button className='button'>{movie.price3} kr</button>
                    </div>
                </div>
                </div>;
            </div>

            <div className='con_ex3' >
                <div onClick={product}>
                <div className='card'>
                    <div className='image-content'>
                        <img className='overlay' src={movie.img3} />
                        <div className='card-image'>
                        </div>
                    </div>
        
                    <div className='card-content'>
                    <h2 className='name'>{movie.title}</h2>
                        <p className='description'>
                            {movie.text}
                        </p>
        
                        <button className='button'>{movie.price} kr</button>
                    </div>
                </div> 
                </div>
        
                <div onClick={product2}>
                <div className='card2'>
                    <div className='image-content'>
                    <img className='overlay2' src={movie.img2} />
        
                        <div className='card-image'>
                        </div>
                    </div>
        
                    <div className='card-content'>
                        <h2 className='name'>{movie.title2}</h2>
                        <p className='description'>
                            {movie.text}
                        </p>
        
                        <button className='button'>{movie.price2} kr</button>
                    </div>
                </div>
                </div>
        
                <div onClick={product3}>
                <div className='card3'>
                    <div className='image-content'>
                    <img className='overlay2' src={movie.img4}  />
        
                        <div className='card-image'>
                        </div>
                    </div>
        
                    <div className='card-content'>
                        <h2 className='name'>{movie.title3}</h2>
                        <p className='description'>
                            {movie.text}
                        </p>
        
                        <button className='button'>{movie.price3} kr</button>
                    </div>
                </div>
                </div>;
            </div>

            </div>
            
			))}
    </>
  )
}

export default Explore