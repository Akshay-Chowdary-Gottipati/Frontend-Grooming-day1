import React from "react";

function Card(){
  return(
    <div className="card">
        <div className="links">
            <a href="https://linkedin.com" target="_blank" >L</a>  
            <a href="https://github.com" target="_blank" > G</a> 
            <a href="https://google.com" target="_blank" > P</a>

        </div>
        <img src="https://images.pexels.com/photos/18255627/pexels-photo-18255627/free-photo-of-smiling-man-in-checked-casual-shirt-with-stubble.jpeg" alt="image of a person" />
    
        <h2 className="name">Siddarth Nandan Sahoo</h2>
        <h3>Web Developer</h3>
        <h2 className="star">⭐⭐⭐⭐⭐</h2>
        <div className="btn">
        <button className="bttn">About me</button>
        <button className="bttn">Hire me</button>
        </div>
        <div className="purple">

        </div>
    </div>
    
  );
}

export default Card;