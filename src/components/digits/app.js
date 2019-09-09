import React from "react";
import "./app.css";

class SudokuDigits extends React.Component {
    render() {
        return (
            <div className="sudoku-digits-container wrap">
                <button className="digits">1</button>
                <button className="digits">2</button>
                <button className="digits">3</button>
                <button className="digits">4</button>
                <button className="digits">5</button>
                <button className="digits">6</button>
                <button className="digits">7</button>
                <button className="digits">8</button>
                <button className="digits">9</button>
            </div>
        );
    }
}

SudokuDigits.defaultProps = {

};

export default SudokuDigits;   