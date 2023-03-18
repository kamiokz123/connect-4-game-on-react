import React from "react";
import {
    GAME_PLAYING,
} from "./Variables";




const Footer=({onNewClick, onSuggestClick,playerState})=>{
    const btn_render = (state)=>{
          if (state===GAME_PLAYING) {
            return(
                <div className="footer panel">
                    <button onClick={onSuggestClick} >Suggest</button>            
                </div>
            )
          }
            return(
                <div className="footer panel">
                    <button onClick={onNewClick}>New Game</button>         
                </div>
            )
    }
   
    return btn_render(playerState);
}

export default Footer;