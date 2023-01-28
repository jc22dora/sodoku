interface ErrorDiagnostic {
    rowValidation: string,
    columnValidation: string,
    regionValidation: string,
    isDone: boolean,
    hasErrors: boolean,
}

export function validateBoard(board: string[][]) {
    const arrayColumn = (arr: any[], n: string | number) => arr.map(x => x[n]);
    var errorDiagnostic: ErrorDiagnostic = {
        rowValidation: "",
        columnValidation: "",
        regionValidation: "",
        isDone: false,
        hasErrors: false
    };
    for(let i=0; i<9;i++) {
        if(!validate(arrayColumn(board,i))) {
            errorDiagnostic.columnValidation = 'Column has errors'
            errorDiagnostic.hasErrors = true;
        }
        if(!validate(board[i])) {
            errorDiagnostic.rowValidation = 'Row has errors'
            errorDiagnostic.hasErrors = true;
        }
    }
    if(!validateRegions(board)) {
        errorDiagnostic.regionValidation = 'Region has errors'
        errorDiagnostic.hasErrors = true;
    }

    errorDiagnostic.isDone = isDone(board);
    
    return errorDiagnostic;
}

function isDone(board: string[][]) {
    for(let i=0; i<9;i++) {
        for(let j=0;j<9; j++) {
            if(board[i][j] == '') {
                return false;
            }
        }
    }
    return true;
}

function matchesInitialSquares(board: string[][], initial: string[][]) {
    // currently, users can possibly edit the DOM and change the initial values. 
    // Current validation won't check for this and could return a false positive
}

export function validateRegions(board:string[][]) {
    for(let i=1; i<9;i+=3) {
        for(let j=1; j<9;j+=3) {
            let region = getRegion(i, j, board);
            if(!validate(region)) {
                return false;
            }
        }
    }
    return true;
}

export function getRegion(i: number, j:number, board:string[][]) {
    let cols = getSquareIndexes(i);
    let rows = getSquareIndexes(j);
    let vals: string[] = [];

    rows.forEach(row => {
        cols.forEach(column => {
          vals.push(board[row][column]);
        });
      });
    return vals;
}

function getSquareIndexes(i: number) {
    if (i < 3) {
      return [0,1,2];
    } else if (i< 6) {
      return [3,4,5];
    } else {
      return [6,7,8];
    }
  }

export function validateRow(arr: string[]){
    return validate(arr)
}

export function validateCol(arr: string[]) {
    return validate(arr);
}

export function validate(arr: string[]) {
    arr = arr.filter(function(item) {
        return item !== ''
    })
    let set = new Set(arr);
    if(set.size != arr.length){
        // duplicate found that isn't an unfinished square
        return false;
    } return true;
}
