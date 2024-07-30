import React, { useEffect, useState } from 'react';
import "./Style.css";




function Product({handelclick}) {


    const [get, setget] = useState([]);


    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setget(data);
            })
            .catch((error) => {
                console.log("There is an error...");
            })
    }, []);

    return (
        <>
            <p>Products</p>
            <section>

                {
                    get.map((cval, index) => {
                        return (
                            <div className="card" style={{width: "350px",background:"#EEEEEE" , height:"100%"}} key={index.id}>
                                <img src={cval.image} className="card-img-top" alt="..." style={{width:"100%", height:"300px"}} />
                                <div className="card-body">
                                    <h5 className="card-title" style={{font:"20px",fontFamily:"sans-serif"}}>{cval.title}</h5>
                                    <p className="card-text">{cval.price}</p>
                                    <button className="btn btn-primary" onClick={()=>{
                                        handelclick(cval);
                                    }}>Go somewhere</button>
                                </div>
                            </div>

                        )
                    })
                }
            </section>
        </>

    )
}

export default Product;
