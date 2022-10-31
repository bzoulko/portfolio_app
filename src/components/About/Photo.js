import React from 'react';
import developerImage from "../images/IMG_20220827_155309.jpg";

export default function Photo() {
    const imageStyle = {
        width: "100px",
        height: "auto"
    };

    return (
        <div className='card'>
            <img
                style={imageStyle}
                src={developerImage}
                alt="Programmer Image">
            </img>
        </div>
    );
};