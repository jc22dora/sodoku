import React from 'react';
import './App.css';
import { Sodoku, SodokuProps } from './Sodoku/Sodoku';

function App() {
  let row1: string[] = ['', '', '', '2', '6', '', '7', '', '1'];
  let row2: string[] = ['6', '8', '', '', '7', '', '', '9', ''];
  let row3: string[] = ['1', '9', '', '', '', '4', '5', '', ''];
  let row4: string[] = ['8', '2', '', '1', '', '', '', '4', ''];
  let row5: string[] = ['', '', '4', '6', '', '2', '9', '', ''];
  let row6: string[] = ['', '5', '', '', '', '3', '', '2', '8'];
  let row7: string[] = ['', '', '9', '3', '', '', '', '7', '4'];
  let row8: string[] = ['', '4', '', '', '5', '', '', '3', '6'];
  let row9: string[] = ['7', '', '3', '', '1', '8', '', '', ''];
  
  let rows = [row1, row2, row3, row4, row5, row6, row7, row8, row9];

  // row1 = ['4', '3', '5', '2', '6', '9', '7', '8', '1'];
  // row2 = ['6', '8', '2', '5', '7', '1', '4', '9', '3'];
  // row3 = ['1', '9', '7', '8', '3', '4', '5', '6', '2'];
  // row4 = ['8', '2', '6', '1', '9', '5', '3', '4', '7'];
  // row5 = ['3', '7', '4', '6', '8', '2', '9', '1', '5'];
  // row6 = ['9', '5', '1', '7', '4', '3', '6', '2', '8'];
  // row7 = ['5', '1', '9', '3', '2', '6', '8', '7', '4'];
  // row8 = ['2', '4', '8', '9', '5', '7', '1', '3', '6'];
  // row9 = ['7', '6', '3', '4', '1', '8', '2', '5', '9'];

  // rows = [row1, row2, row3, row4, row5, row6, row7, row8, row9];
  let prop: SodokuProps= {
    Board : JSON.parse(JSON.stringify(rows)),
    Initial: JSON.parse(JSON.stringify(rows))
  }
  return (
    <Sodoku Board={prop.Board} Initial={prop.Initial}></Sodoku>
  );
}

export default App;
