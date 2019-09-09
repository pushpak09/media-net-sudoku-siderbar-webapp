import React from "react";
import "./app.css";

class SudokuOptions extends React.Component {
    render() {
        return (
            <div className="sudoku-options-container">
                <div className="block undo">
                    <div className="top-options-wrapper">
                        <img className="block-img" src="images/undo.svg" alt="Undo" />
                    </div>
                    <div className="block-txt">Undo</div>
                </div>
                <div className="block">
                    <div className="top-options-wrapper">
                        <img className="block-img" src="images/eraser.svg" alt="Eraser" />
                    </div>
                    <div className="block-txt">Erase</div>
                </div>
                <div className="block">
                    <div className="top-options-wrapper">
                        <img className="block-img" src="images/pencil.svg" alt="Pencil" />
                    </div>
                    <div className="block-txt">Pencil Off</div>
                </div>
                <div className="block">
                    <div className="top-options-wrapper">
                        <img className="block-img" src="images/hint.svg" alt="Hint" />
                        <div className="top-options">2</div>
                    </div>
                    <div className="block-txt">Hint</div>
                </div>
            </div>
        );
    }
}

SudokuOptions.defaultProps = {

};

export default SudokuOptions;   