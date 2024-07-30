import React, { useEffect, useState } from 'react';
import "./Style.css";

function Cart({ cart, setcart }) {
    const [price, setprice] = useState(0);
    const handelprice=()=>{
        let initialprice=0;
        cart.map((item)=>{
            initialprice +=item.price;
        });
        setprice(initialprice);
    }
    useEffect(()=>{
        handelprice();
    });


    const removeitem=(id)=>{
        let arr=setcart(cart.filter((item)=>item.id!==id));
    }
    return (
        <>
            <p style={{marginTop:"30px"}}>Total price will be : <span style={{color:"red",backgroundColor:"black",padding:"10px",borderRadius:"10px"}}>{price}</span></p>
            {
                cart.map((cartdata) => {
                    return (
                        <div className="class">
                            <div className="cartbox" key={cartdata.id}>
                                <img src={cartdata.image} alt="" />
                                <h5>{cartdata.title?.substring(0, 30).concat("...")}</h5>
                                <p style={{color:"red",backgroundColor:"black", padding:"10px",borderRadius:"10px"}}>{cartdata.price}</p>
                                <button className='btn btn-secondary' onClick={()=>{
                                    removeitem(cartdata.id)
                                }}>Remove</button>
                                <hr />
                            </div>
                        </div>
                    )
                    
                })
            }
        </>
    )
}

export default Cart
