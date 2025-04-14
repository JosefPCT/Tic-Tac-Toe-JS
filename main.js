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
            board[i].push("");
        }
    }

    const showBoard = () => board;

    const changeBoard = function(player, choice){
        console.log("showing changeboard method");
    };
    return {showBoard, changeBoard};
})();