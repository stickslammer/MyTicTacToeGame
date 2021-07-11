// TIC - TAC - TOE
// As users playing a two player game we want to:

// enter our names and have them displayed
// have our order chosen for us by the game
// take turns placing our marks in empty spaces
// not be able to place our marks in an occupied space
// be told when a move causes a player to win, or to draw
// start the game over without having to reset the browser
// As a user playing a one player game I want to:

// see the name 'Computer' displayed as my opponent
// have the Computer player make moves as if it were a human player with the correct mark in an empty space
// As a user playing a single player game I would be delighted to:

// have the Computer make 'better-than-guessing' choices when placing a mark on the board
// set the board size myself("wider" or "taller" than 3x3)
// initial setup
// testing
let testElem = document.querySelector('.board');
console.log('testElem: ', testElem);

// ***************** STATE *****************
const gameState = {
    players: ['X', 'O'],
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
};

function resetState() {
    gameState.board = [];
}

// ***************** DOM SELECTORS *****************
let boardElem = document.querySelector('.board');

// ***************** DOM MANIPULATION FUNCTIONS *****************
function clearBoard() {
    object.addEventListener("click", clearBoard)
    console.log("Button was pushed");
    boardElem.innerText = '';
}
function renderBoard() {
    // empty the element
    boardElem.innerText = '';
    for (let i = 0; i < gameState.board.length; ++i) {
        let card = gameState.board[i];
        // create a cell
        let cellElem = document.createElement('div');
        cellElem.classList.add('cell');
        cellElem.dataset.index = i;
        cellElem.innerHTML = card;
        boardElem.appendChild(cellElem);
    }
}
function addPlayerNames() {
    let playerOneName = document.getElementById("p1name").value;
    document.getElementById("player1Name").innerHTML = playerOneName;

    
}

// ***************** EVENT LISTENERS *****************
// boardElem.addEventListener('click', function (event) {
//     if (event.target.className === 'button') {
//         console.log('event.target: ', event.target);
//         let cellIdx = event.target.dataset.index;
//         console.log('cellIdx: ', cellIdx);
//         renderBoard();
//     }
// })

// ***************** BOOTSTRAPPING *****************
// resetState();
// renderBoard();