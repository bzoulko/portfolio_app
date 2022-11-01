import React from 'react';
import developerImage from "../images/BriansWorking.gif";

export default function ClipPhoto() {
    return (
        <a>
            <img className='mt-0'
                style={{
                    width: "20%",
                    height: "auto",                    
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    justifyContent: "flex-end",
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