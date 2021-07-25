import React from 'react';
import image from '../../assets/images/background.jpg';

const Home = () => {
    return (
        <>
            <img src={image} alt="Coding and Coffee" className="background"/>
            <section className="homepage">
                <h1>Hello, my name is Thomas Bolling</h1>
                <h1>Welcome to my portfolio!</h1>
            </section>
        </>
    )
}

export default Home
