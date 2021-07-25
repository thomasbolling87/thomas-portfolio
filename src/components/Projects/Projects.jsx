import React from 'react';
import Nutricalifide from '../../assets/images/Nutricalifide.PNG';
import CodeQuiz from '../../assets/images/Code Quiz.png';
import PlugSelect from '../../assets/images/The Plug Select.PNG';

const Projects = () => {
    return (
        <>
        <div className="titleContainer">
            <h1>Projects</h1>
            <div className="portfolio">
                <h3>Nutricalifide: First Ever Project Nutrition App</h3>
                <div className="boxing">
                    <a href="https://thomasbolling87.github.io/NurtriCalifide/" target="_blank">
                        <img src={Nutricalifide} alt="Nutricalifide" />
                    </a>
                </div>
            </div>
            <div className="portfolio">
                <h3>Coding Quiz: One of my favorite activites that I made</h3>
                <div className="boxing">
                    <a href="https://thomasbolling87.github.io/Quiz-Game-HW02/" target="_blank">
                        <img src={CodeQuiz} alt="Code Quiz" />
                    </a>
                </div>
            </div>
            <div className="portfolio">
                <h3>The Plug Select: A Bidding ECommerce Application</h3>
                <div className="boxing">
                    <a href="https://plugselect.herokuapp.com/" target="_blank">
                        <img src={PlugSelect} alt="Plug Select" />
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects
