import React, { Component } from 'react';
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../App.css";
import {Link,Redirect} from "react-router-dom";

export default class About extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="App">
                    
                </div>
                <Footer/>
            </div>
        )
    }
}
