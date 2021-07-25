import React from 'react';
import me from '../../assets/images/portfoliopic.jpg';

const AboutMe = () => {
    return (
        <div className="titleContainer">
            <h1>About Me</h1>
            <div className="aboutMeContainer">
                <div className="aboutMeText">
                    <p>
                        Thanks for stopping by to my portfolio!
                        Even though I am new to programming, I am far from new to
                        the world of IT. I have close to 10 years worth of networking,
                        security, sys admin, and helpdesk experience! Currently a student at the 
                        Rice Coding Bootcamp, but I started my career as an IT Specialist in the 
                        Army in 2009. Since then, I have continued to pursue my goal to strive for
                        greater skill sets in the ever expanding world of IT. Which has brought me 
                        to where I am now. With the completion of the course.
                    </p>
                </div>
                <div className="photo">
                    <img className="mePic" src={me} alt="Pic of Me" />
                </div>
            </div>
        </div>
    )
}

export default AboutMe
