import React from "react";
import "./app.css";

class Timer extends React.Component {
    render() {
        return (
            <div className="timer-container">
                <div className="block timer">
                    <span className="game-timer">00:05</span>
                    <span className="game-condition"><img src="images/pause.svg" alt="Pause" /></span></div>
                <div className="block newgame">
                    <div className="newgame-btn">New Game</div>
                </div>
            </div>
        );
    }
}

Timer.defaultProps = {

};

export default Timer;   