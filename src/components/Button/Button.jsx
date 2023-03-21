import './Button.css'
import React from "react";

const Button = ({text})=>{
    return (
        <label className="btn btn-primary " htmlFor="">{text}</label>
    )
}

export default Button;