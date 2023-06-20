// import './square.css';

// export default function Square({color, onClick}) {
    

//     return (
//         <div className="square" style={{backgroundColor :color}} onClick={onClick}>
//         </div>
//     )
// }

import './square.css';
import { useState } from "react"

export default function Square({isActive, toggle}) {

    return (
        <div 
        onClick={toggle}
        className="square" 
        style={{backgroundColor :isActive ? "red" :"black"}}>
        </div>
    )
}
