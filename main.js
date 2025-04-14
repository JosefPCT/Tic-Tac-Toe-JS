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

    // Prints the board in a readable state in the console
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

function createPlayer(name,token){
    return { name, token};
}

const gameController = (function (){ 
    console.log("game controller firing...");
    
    //creates the players
    const playerOne = createPlayer("Adan","O");
    const playerTwo = createPlayer("Eve","X");
    const players = {playerOne, playerTwo};
    console.log(players);

    //set default active player
    let activePlayer = players.playerOne;

    //Get the active player
    const getActivePlayer = () => activePlayer;

    const switchActivePlayer = function(){
        if(activePlayer === players.playerOne){
            activePlayer = players.playerTwo;
        } else {
            activePlayer = players.playerOne;
        }
    }

    gameboard.printBoard();

    return { getActivePlayer, switchActivePlayer};
})();

const players = {}

// testPlayer = { token: "X" };
// testChoice = { row: 1, column: 2};
// gameboard.changeBoard(testPlayer,testChoice);
// gameboard.printBoard();




