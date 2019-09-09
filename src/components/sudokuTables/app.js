import React from "react";
import "./app.css";

class SudokuTables extends React.Component {
    render() {
        return (
            <div className="sudoku-tables-container">
                <table className="sudoku-tables-wrapper">
                    <tbody>
                        <tr>
                            <td>
                                <table className="sudoku-block-tables">
                                    <tbody>
                                        <tr>
                                            <td className="target">7</td>
                                            <td className="target">7</td>
                                            <td className="target">9</td>
                                        </tr>
                                        <tr>
                                            <td className="target">6</td>
                                            <td className="target">5</td>
                                            <td className="target">9</td>
                                        </tr>
                                        <tr>
                                            <td className="target">2</td>
                                            <td className="target">3</td>
                                            <td className="target">6</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td>
                                <table className="sudoku-block-tables">
                                    <tbody>
                                        <tr>
                                            <td className="target">7</td>
                                            <td className="target">7</td>
                                            <td className="target">9</td>
                                        </tr>
                                        <tr>
                                            <td className="target">6</td>
                                            <td className="target">5</td>
                                            <td className="target">9</td>
                                        </tr>
                                        <tr>
                                            <td className="target">2</td>
                                            <td className="target">3</td>
                                            <td className="target">6</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td>
                                <table className="sudoku-block-tables">
                                    <tbody>
                                        <tr>
                                            <td className="target">7</td>
                                            <td className="target">7</td>
                                            <td className="target">9</td>
                                        </tr>
                                        <tr>
                                            <td className="target">6</td>
                                            <td className="target">5</td>
                                            <td className="target">9</td>
                                        </tr>
                                        <tr>
                                            <td className="target">2</td>
                                            <td className="target">3</td>
                                            <td className="target">6</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

SudokuTables.defaultProps = {

};

export default SudokuTables;   