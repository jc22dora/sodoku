import { useEffect } from "react";
import "./Board.css"
export interface BoardProps {
    board: string[][],
    initial: string[][],
    setBoard: any,
}
export function Board(props: BoardProps) {
    let board = props.board;
    let initial = props.initial
    const canEdit = (i: number, j: number) => { 
        if(initial[i][j] === '') {
            return true;
        } return false;
    }
    const onSquareChange = (e: any, i: number, j: number) => {
        let tempboard = JSON.parse(JSON.stringify(board)); // enforce deep copy
        tempboard[i][j] = e["nativeEvent"]["data"].toString();
        props.setBoard(tempboard);
    }

    useEffect(() => {

    }, [board])
    return (
        <table>
            {board.map((inner, i) => (
                <tr>
                    {inner.map((item, j) => <td className={canEdit(i,j)?"square":""} contentEditable={canEdit(i,j)} onInput={e => onSquareChange(e, i, j)}>{board[i][j]}</td>)}
                </tr>
            ))}
        </table>
    );

}