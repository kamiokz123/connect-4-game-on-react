import React, { useState } from "react";
import GameCircle from "./GameCircle";
import "./Style.css"
import Header from "./Header";
import Footer from "./Footer";
import { IsWinner } from "./IsWinner";
import { isDraw, smartMove } from "./IsWinner";
import {
    player_1,
    player_2,
    WIN_GAME,
    GAME_PLAYING,
    NO_player,
    No_circle,
    GAME_DRAW
} from "./Variables";





const GameBoard = () => {



    const [arr, setArr] = useState(Array(16).fill(NO_player));
    const [player, setPlayer] = useState(player_1);
    const [gameState, setGameState] = useState(GAME_PLAYING);
    const [winnerplayer, setWinnerPlayer] = useState(NO_player);

    const initGame = () => {
        setArr(Array(16).fill(NO_player));
        setPlayer(player_1);
        setGameState(NO_player);
    }

    const suggestMove = () => {
        onCircleClick(smartMove(arr));
    }


    const onCircleClick = (id) => {
        if (arr[id] !== 0) return;
        if (gameState !== GAME_PLAYING) return;

        if (IsWinner(arr, id, player)) {
            setGameState(WIN_GAME);
            setWinnerPlayer(player);
        }
        if (isDraw(arr, id, player)) {
            setGameState(GAME_DRAW);
            setWinnerPlayer(NO_player);
        }

        setArr((prev) => {
            return prev.map((circle, i) => {
                if (i === id) {
                    return player;
                }
                return circle;
            })
        });

        setPlayer(player === player_1 ? player_2 : player_1)
    }

    const render_circle = () => {
        const circle_arr = [];
        for (let i = 0; i < No_circle; i++) {
            circle_arr.push(return_circle(i));
        }
        return circle_arr;
    }

    const return_circle = (id) => {
        return (
            <GameCircle id={id} key={id} className={`player_${arr[id]}`} CircleClick={onCircleClick} />
        )
    }

    return (
        <>
            <Header currentPlayer={player} gameState={gameState} winner={winnerplayer} />
            <div className="gameboard" >
                {render_circle()}
            </div>
            <Footer onNewClick={initGame} onSuggestClick={suggestMove} playerState={gameState} />
        </>
    );
}

export default GameBoard;