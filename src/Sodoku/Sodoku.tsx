import { useState } from "react";
import { Board } from "../Board/Board";
import { validateBoard } from "./Utils/SodokuUtils";

export interface SodokuProps {
    Board: string[][];
    Initial: string[][];
}
export function Sodoku(props:SodokuProps) {
    const [board, setBoard] = useState(props.Board);
    const [initial, setInitial] = useState(props.Initial)
    const [errors, setErrors] = useState('');

    const onReset = () => {
        let note = document.getElementsByClassName('square');
        if(note) {
            for (let item of note) {
                item.textContent = ''
            }
        }
        setBoard(props.Initial);
        setErrors('');
    }
    const onCheckAnswers = () => {
        let diagnostic = validateBoard(board);
        if(diagnostic.hasErrors) {
            setErrors('Has Errors');
        } else if(diagnostic.isDone) {
            setErrors('Complete!');
        } else{
            setErrors('');
        }
        
    }
    return <>
        <div>{errors}</div>
        <Board board={board} initial={initial} setBoard={setBoard}></Board>
        <button onClick={onCheckAnswers}>CheckAnswers</button>
        <button onClick={onReset}>Reset</button>
    </>
}