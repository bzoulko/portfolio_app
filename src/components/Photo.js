import React from 'react';
import developerImage from "../images/IMG_20220827_155309.jpg";

export default function Photo() {
    return (
        <a>
            <img className='mt-3'
                style={{
                    width: "65%",
                    height: "auto",                    
                    border: "1px solid rgba(161, 160, 132, 0.8)",
                    borderRadius: ".3rem",
                    boxShadow: "0 0rem 0rem rgba(161, 160, 132, 0.8), 5px 0.15rem 0.15rem rgba(161, 160, 132, 0.8)"                
                }}            
                src={developerImage}
                alt="Programmer: Brian Zoulko">
            </img>
        </a>
    );
};