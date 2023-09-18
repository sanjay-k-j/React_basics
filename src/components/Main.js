import React from "react";
import './styles/Main.css';
import { LinkedIn, Twitter,Instagram,Facebook } from "@material-ui/icons";
import edited from "./assest/edited.png"

const Main = () => {
    return (
        <div className="main">
            <div className="main__content">
                <div className="mian__content">
                    <div className="text">
                        <p>Hello Everyone</p>
                        <h1>I am Sanjay K J</h1>
                        <p>Front-end Developer and Designer</p>

                        <div className="icons">
                            <Twitter className="icon"/>
                            <Instagram className="icon"/>
                            <LinkedIn className="icon"/>
                            <Facebook className="icon"/>
                        </div>
                        <div className="button">
                            <button type="">See Me</button>
                            <button type="">Hire me</button>
                        </div>

                    </div>   
                </div>
                <div className="main__img">
                    <img src={edited} alt="" />
                </div>

            </div>
        </div>
    );
}

export default Main;