// import React from 'react';
import { useState } from 'react';
import './box.css';

// const colors = [
//     "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF",
//     "#00FFFF", "#FF4500", "#8A2BE2", "#00FF7F", "#DC143C",
//     "#7FFF00", "#9932CC", "#FF1493", "#00BFFF", "#FFD700",
//     "#ADFF2F", "#FF69B4", "#FF8C00", "#32CD32", "#8B008B"
//   ];
  

export default function Box({colors}) {
    const randomIndex = Math.floor(Math.random() * colors.length)
    const randomColor = colors[randomIndex];
    const [color, setColor] = useState(randomColor);
    const changeColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length)
        const randomColor = colors[randomIndex];
    
    setColor(randomColor);
    }

    return (
        <div className="box" style={{backgroundColor: color}} onClick={changeColor}>
        </div>

    )
}
