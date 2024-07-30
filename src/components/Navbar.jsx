import React from 'react';
import { Link } from "react-router-dom";
import "./Style.css";


function Navbar({size}) {

    return (

            <div className='main'>
                <div className="logo">
                    <p>Omify Cart---</p>
                </div>
                <nav>
                    <Link to="/Home" style={{textDecoration:"none",color:"black"}}>Home</Link>
                    <Link to="/Cart" style={{textDecoration:"none",color:"black"}}>Cart</Link>
                    <div className="cartcount">
                        <p style={{fontSize:"20px"}}>Cart Item : <span>{size}</span></p>
                    </div>
                </nav>
            </div>



    )
}

export default Navbar;
