'use client'
import React from 'react';
function Elementor(props){
    return(
        <div className="elementor">
            <h1 className="elementor-h1">{props.title}</h1>
            
            <p className="elementor-p">{props.text}</p>
        </div>
    );

}
export default Elementor;