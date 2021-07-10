// initial setup
// testing
let testElem = document.querySelector('#board');
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
    state.board = ['O', 'X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
}

// ***************** DOM SELECTORS *****************
let boardElem = document.querySelector('#board');

// ***************** DOM MANIPULATION FUNCTIONS *****************
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

// ***************** EVENT LISTENERS *****************
boardElem.addEventListener('click', function (event) {
    if (event.target.className === 'cell') {
        console.log('event.target: ', event.target);
        let cellIdx = event.target.dataset.index;
        console.log('cellIdx: ', cellIdx);
        renderBoard();
    }
})

// ***************** BOOTSTRAPPING *****************
resetState();
renderBoard();