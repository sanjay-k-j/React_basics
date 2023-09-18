import React, { useState } from "react";
import './styles/Header.css';
import { Close, MenuBookOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";


const Header = ()=>{

    const [active , setActive] = useState(false);

    const ShowMenu = ()=>{
        setActive(!active);
    }
    return (
        <div className="header">
            <div className="header__logo">
                <h1>Jay</h1>
            </div>
            <nav>
                <ul>
                    <div className="closed">
                        <Close className = "close" onClick = {ShowMenu}/>
                    </div>
                    <li>
                        <Link to='/'><b>Home</b></Link>
                    </li>
                    <li>
                    <Link to='/'><b>About</b></Link>
                    </li>
                    <li>
                    <Link to='/'><b>Portfolio</b></Link>
                    </li>
                    <li>
                    <Link to='/'><b>Blog</b></Link>
                    </li>
                    <li>
                    <Link to='/'><b>Contact</b></Link>
                    </li>
                </ul>
            </nav>
            <div className="changer">
                <MenuBookOutlined className="menu" onClick = {ShowMenu}/>
            </div>

        </div>
    )
}

export default Header;