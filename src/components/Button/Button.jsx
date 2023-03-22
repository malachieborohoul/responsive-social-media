import './Button.css'
import React from "react";

const Button = ({text, color="btn-primary"})=>{
    return (
        <label className={`btn ${color}`} htmlFor="">{text}</label>
    )
}

export default Button;