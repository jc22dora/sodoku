import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { validateCol, validateRow, getRegion, validateBoard } from './Sodoku/Utils/SodokuUtils';

test('renders learn react link', () => {

});

// UTILS
describe('utils', () => {
    it('region',() => {
        let row1: string[] = ['', '', '', '2', '6', '', '7', '', '1'];
        let row2: string[] = ['6', '8', '', '', '7', '', '', '9', ''];
        let row3: string[] = ['1', '9', '', '', '', '4', '5', '', ''];
        let row4: string[] = ['8', '2', '', '1', '', '', '', '4', ''];
        let row5: string[] = ['', '', '4', '6', '', '2', '9', '', ''];
        let row6: string[] = ['', '5', '', '', '', '3', '', '2', '8'];
        let row7: string[] = ['', '', '9', '3', '', '', '', '7', '4'];
        let row8: string[] = ['', '4', '', '', '5', '', '', '3', '6'];
        let row9: string[] = ['7', '', '3', '', '1', '8', '', '', ''];
        
        let initial = [row1, row2, row3, row4, row5, row6, row7, row8, row9];
        let expected = ['1', '', '', '6', '', '2', '', '', '3']; 
        expect(getRegion(4,4, initial)).toStrictEqual(expected);

        expected = ['', '', '', '6', '8', '', '1', '9', '']; 
        expect(getRegion(1,1, initial)).toStrictEqual(expected);

        expected = ['', '7', '4', '', '3', '6', '', '', '']; 
        expect(getRegion(6,6, initial)).toStrictEqual(expected);

        expected = ['', '', '9', '', '4', '', '7', '', '3']; 
        expect(getRegion(2,6, initial)).toStrictEqual(expected);
        
    })
    it('row',() => {
        let initial = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        let expected = true;
        expect(validateRow(initial)).toBe(expected);
        initial = ['1', '2', '3', '4', '5', '6', '7', '8', '8'];
        expected = false;
        expect(validateRow(initial)).toBe(expected);
    })
    it('col',() => {
        let initial = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        let expected = true;
        expect(validateCol(initial)).toBe(expected);
        initial = ['1', '2', '3', '4', '5', '6', '7', '8', '8'];
        expected = false;
        expect(validateCol(initial)).toBe(expected);
    })
    it('validateBoard', () => {
        let row1: string[] = ['', '', '', '2', '6', '', '7', '', '1'];
        let row2: string[] = ['6', '8', '', '', '7', '', '', '9', ''];
        let row3: string[] = ['1', '9', '', '', '', '4', '5', '', ''];
        let row4: string[] = ['8', '2', '', '1', '', '', '', '4', ''];
        let row5: string[] = ['', '', '4', '6', '', '2', '9', '', ''];
        let row6: string[] = ['', '5', '', '', '', '3', '', '2', '8'];
        let row7: string[] = ['', '', '9', '3', '', '', '', '7', '4'];
        let row8: string[] = ['', '4', '', '', '5', '', '', '3', '6'];
        let row9: string[] = ['7', '', '3', '', '1', '8', '', '', ''];
        
        let initial = [row1, row2, row3, row4, row5, row6, row7, row8, row9];
        let expected = false; 
        expect(validateBoard(initial).hasErrors).toBe(expected);

        row1 = ['', '', '', '2', '6', '', '7', '1', '1'];
        row2 = ['6', '8', '', '', '7', '', '', '9', ''];
        row3 = ['1', '9', '', '', '', '4', '5', '', ''];
        row4 = ['8', '2', '', '1', '', '', '', '4', ''];
        row5 = ['', '', '4', '6', '', '2', '9', '', ''];
        row6 = ['', '5', '', '', '', '3', '', '2', '8'];
        row7 = ['', '', '9', '3', '', '', '', '7', '4'];
        row8 = ['', '4', '', '', '5', '', '', '3', '6'];
        row9 = ['7', '', '3', '', '1', '8', '', '', ''];
        
        initial = [row1, row2, row3, row4, row5, row6, row7, row8, row9];
        expected = true; 
        expect(validateBoard(initial)).toBe(expected);
    })
    
})