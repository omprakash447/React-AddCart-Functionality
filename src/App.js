import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";




function App() {
    const [cart, setcart] = useState([]);

    const handelclick = (catchdata) => {
        console.log(catchdata);
        let isclicked = false;
        cart.forEach((item) => {
            if (item.id === cart.id) {
                isclicked = true;
            }
        });
        setcart([...cart, catchdata]);
    }
    return ( <
            div className = "data" >
            <
            Router >
            <
            Navbar size = { cart.length }
            /> <
            Routes >
            <
            Route path = "/Home"
            element = { < Home handelclick = { handelclick }
                />} / >
                <
                Route path = "/Cart"
                element = { < Cart cart = { cart }
                    setcart = { setcart }
                    />} / >
                    <
                    /Routes> <
                    /Router> <
                    /div>
                );
            }

            export default App;