import { useState } from "react"
import Square from "./Square"

// const arr = new Array (numSquares).fill({Square})

export  default function squareGrid () {

    const [squares, setSqares] = useState([false, true, false, false , true, false]);
    
    const reset = () => {
        setSqares([false, false, false, false , false, false])
    }



    const toggleSquare = (idx) => {
        setSqares ((oldSquares) => {

    
       return oldSquares.map((value, i) => {
            if (i === idx) {
                return !value
            } else {
                return value;
            }
        }
        )
    })

    }


    return (
        <div className="SquareGrid">
            {squares.map((b, idx) => {
            
            return <Square isActive = {b} toggle = {() => toggleSquare(idx)}/>
            })}

        
        <button onClick={reset}>Reset</button>


        </div>


    )
}