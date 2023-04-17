import '../styles/button.css';
import '../styles/Hero.css';
import { Link } from 'react-scroll';
import styled from 'styled-components/macro';

const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const handleLogout = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
};

const Hero = ({ movies }) => {
	return (
		<div>
			{movies.map((movie) => (
				<div key={movie._id}>
						
            
            <div className='HeroSection' name='home' key={movie._id}>
                  <div className='HeroSlide'> 
                    <div className='HeroSlider'>
                    <HeroImage src={movie.img} />
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
                    <h1>{movie.title2}</h1>
                    <h1>{movie.price} kr</h1>
                      <Link to='info' className='Button' css={`max-width: 160px;`} smooth={true} duration={500}>
                        {movie.label}
                      </Link>
                      </div>
                    </div>
                  </div>
        </div>
				</div>
			))}
		</div>
	);
};
export default Hero