import React from "react";
import './styles/Section.css';
import sanju from './assest/side.jpg'

const Section = ()=>{
    return(
        <div className="sections">
            <div className="sections__container">
                <div className="section__img">
                    <img src={sanju} alt=""/>
                </div>
                <div className="section__content">
                    <h1>Sanjay</h1>
                    <p>Experiecnce in frontend development</p>
                    <p>JavaScript development</p>
                    <p>React JS</p>
                    <p>Python</p>
                    <p>HTML</p>
                    <p>CSS</p>
                </div>

            </div>
        </div>
    )
}

export default Section;