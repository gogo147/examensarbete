import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-scroll';

const Footer = () => {

  return (
    <div name='footer'>
        <section className='footer'>
            <div className='social'>
                <a href='https://www.instagram.com/'><i class="fab fa-instagram"></i></a>
                <a href='https://www.snapchat.com/'><i class="fab fa-snapchat"></i></a>
                <a href='https://sv-se.facebook.com/'><i class="fab fa-facebook"></i></a>
            </div>

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
            </ul>
        </section>
    </div>
  )
}

export default Footer