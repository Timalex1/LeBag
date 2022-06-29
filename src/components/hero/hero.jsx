import React from 'react';
import { Link } from 'react-router-dom';
import './hero.styles.scss';

const Hero = () => {
    return (
        <div>
            <section className="hero is-info is-fullheight hero-image">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="hero-title">
                            Bags reimagined for the Modern Day.
                        </h1>
                        <div className='shop-now-btn'>
                            <Link to='/shop' className='button is-black' id='shop-now'>
                                SHOP NOW
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;
