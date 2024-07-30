import React from 'react';
import Product from './Product';
import "./Style.css";

function Home({handelclick}) {
    return (
        <div>
            <Product handelclick={handelclick}/>
        </div>
    )
}

export default Home
