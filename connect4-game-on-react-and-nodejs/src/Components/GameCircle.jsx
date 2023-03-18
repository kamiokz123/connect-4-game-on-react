import React from "react";



const GameCircle=({id,className,CircleClick})=>{

    const onClick=(ev,id)=>{
      CircleClick(id)
      console.log(id);
    }
    return (
        <div className={`gamecircle ${className}`}
         onClick={(ev)=>onClick(ev,id)} 
         id={id} >
        </div>
    );
}



export default GameCircle;