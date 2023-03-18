import React from "react";
import {
    WIN_GAME,
    GAME_PLAYING,
    GAME_DRAW,
} from "./Variables";



const Header = ({ currentPlayer, winner, gameState }) => {
    const renderLabel = () => {
        switch (gameState) {
            case WIN_GAME:
                return <>Player {winner} Wins</>
            case GAME_PLAYING:
                return <>Player {currentPlayer} Turn</>
            case GAME_DRAW:
                return <>Game is Draw</>

            default:
                break;
        }

    }

    return (
        <div className="panel header header-text">
            <span className="header-text">{renderLabel()}</span>
        </div>
    );
}

export default Header;