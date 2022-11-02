import React from 'react';
import resumeImage from "../../images/BriansResume.png";

export default function Resume() {
    return (
        <div className='pt-2 mt-2' style={{padding: "150px"}}>
            <h1>Resume Page</h1><hr></hr>
            <img className='mt-1'
                style={{
                    width: "100%",
                    height: "auto",                    
                    border: "1px solid rgba(161, 160, 132, 0.8)",
                    borderRadius: ".3rem",
                    boxShadow: "0 0rem 0rem rgba(161, 160, 132, 0.8), 5px 0.15rem 0.15rem rgba(161, 160, 132, 0.8)"                
                }}            
                src={resumeImage}
                alt="Brian's 2022 Resume">
            </img>
            <div className='pt-2 mt-2'></div>
        </div>
    );
};