import Icon from "../Icon/Icon";
import './card.scss';

function Card({player}){
let icon = <Icon/>
if(player === 'x'){
    console.log("if running")
    icon = <Icon name="cross"/>
}else if(player === '0'){
    console.log("if running")
    icon = <Icon name="circle"/>
}
    return (
        <div className="card">
             {icon}
        </div>
    )
} 
export default Card;