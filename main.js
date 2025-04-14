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

    const getBoard = () => board;

    const changeBoard = function(player, choice){
        console.log("showing changeboard method");
        board[choice.row][choice.column].addToken(player);
        
    };

    const printBoard = function(){
        board.forEach((item) => item.forEach((inneritem) => inneritem.showValue));
    };
    return {getBoard, changeBoard, printBoard};
})();

function Cell(){
    let value = 0;

    const showValue = () => value;

    const addToken = function(player){
        value = player.token;
    };

    return {addToken, showValue};
}

testPlayer = { token: "X" };
testChoice = { row: 1, column: 2};