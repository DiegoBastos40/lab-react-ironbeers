import { useState, useEffect } from "react";     // <== IMPORT useEffect
import {Routes, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import Home from '../assets/home-img.jpg'

function Navbar(){
    return(
        <nav>
            <Link to="/">
                <img src={Home} />
            </Link>
        </nav>
    )
}

export default Navbar; 