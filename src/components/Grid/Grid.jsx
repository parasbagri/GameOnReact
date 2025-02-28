import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.scss"


const Grid = ({numberOfCards}) =>{
    const [board, setBoard] = useState(Array(numberOfCards).fill(""))
    return (
        <div className="grid">
             {
                board.map((el,idx) => <Card key={idx}/>)
             }
        </div>
    )
} 

export default Grid; 