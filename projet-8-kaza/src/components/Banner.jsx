import React from "react";

const Banner = ({image,titre}) => {
    return (
        <div className="kaza-banner">
            <img src={image} alt='kaza' className='kaza-img'/>
            <h1 className='titre'>{titre}</h1>
        </div>
    )
}


export default Banner;