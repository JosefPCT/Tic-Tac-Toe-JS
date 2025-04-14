console.log("Tic tac toe game...initializing...");

// Gameboard IIFE
// IIFE -> creates a module and immediately execute it, so it can be used immediately
const gameboard = (function (){
    const rows = 3;
    const columns = 3;
    const board = [];

    //Creates the board of tictactoe, by creating empty rows, then pushing empty items as columns
    for(let i = 0; i < rows; i++){
        board[i] = [];
        for(let j = 0; j < columns; j++){
            board[i].push(Cell());
        }
    }

    // returns the current iteration of the board
    const getBoard = () => board;

    // Will make changes to the board array, takes in a player object for the token value, and a choice object of row and column
    const changeBoard = function(player, choice){
        console.log("showing changeboard method");
        board[choice.row][choice.column].addToken(player);
        
    };

    const printBoard = function(){

        board.forEach((row) => {
            // console.log ("Row");
            let currentRow = "";
            // row.forEach((column) => console.log(column.showValue()));
            row.forEach((column) => {
                currentRow += column.showValue() + " ";
            });
            console.log(currentRow);
        })
    };
    return {getBoard, changeBoard, printBoard};
})();

// A cell factory function to be pushed into the board array
// Has two methods, showValue and addToken that changes the value of the cell
function Cell(){
    let value = "0";

    const showValue = () => value;

    const addToken = function(player){
        value = player.token;
    };

    return {addToken, showValue};
}

testPlayer = { token: "X" };
testChoice = { row: 1, column: 2};