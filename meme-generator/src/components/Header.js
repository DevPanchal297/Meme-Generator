import React from "react"
import logo from "../images/tf.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={logo} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Dev Panchal</h4>
        </header>
    )
}