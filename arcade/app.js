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
// Function called whenever user tab on any box
// let the computer make the next move

 // get user names


let boardElem = document.getElementById('board');
let nameStorage = [];
function getNames() {
    console.log(document);
    user1Name = document.getElementById('p1name').value;
    user2Name = document.getElementById('p2name').value;
    nameStorage[0] = user1Name;
    nameStorage[1] = user2Name;
    document.getElementById("myPlayer1Name").innerHTML = user1Name;
    document.getElementById("myPlayer2Name").innerHTML = user2Name;
    boardElem = document.getElementById('board');
    boardElem.addEventListener("click", checkForPlayers(nameStorage));
}

function checkForPlayers(nameStorage) {
    console.log("Checking for players");
    if (nameStorage[0] == '') {
        document.getElementById("myPlayer1Name").innerHTML = "Computer";
    }
    if (nameStorage[1] == '') {
        document.getElementById("myPlayer2Name").innerHTML = "Computer";
    }
    computerMove();
}

const computerMove = () => {
    console.log("Computer Move called");
    let emptyCells = [];
    let myRandom = Math.ceil(Math.random() * boardElem.length) - 1;
        for (let i = 0; i < boardElem.length; i++) {
        if (boardElem[i].textContent == 'readonly disabled') {
          emptyCells.push(boardElem[i]);
        }
      }
}


    function gameBoard() {
        // add event listener
        const renderScore = () => {
            scoreElem.innerHTML = `
    <div>${state.players[0]}: ${state.scores[0]}</div>
    <div>${state.players[1]}: ${state.scores[1]}</div>
  `;
        }

        getNames();
        
        // Setting DOM to all boxes displayed
        var b1, b1, b3, b4, b5, b6, b7, b8, b9;
        b1 = document.getElementById("b1").value;
        b2 = document.getElementById("b2").value;
        b3 = document.getElementById("b3").value;
        b4 = document.getElementById("b4").value;
        b5 = document.getElementById("b5").value;
        b6 = document.getElementById("b6").value;
        b7 = document.getElementById("b7").value;
        b8 = document.getElementById("b8").value;
        b9 = document.getElementById("b9").value;

        // Checking if Player X Won! or not and after 
        // that disable all other fields
        if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
            b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
            document.getElementById('print')
                .innerHTML = "Player X Won!";
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            window.alert('Player X Won!');
        }
        else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
            b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
            document.getElementById('print')
                .innerHTML = "Player X Won!";
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;

            window.alert('Player X Won!');
        }
        else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
            b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
            document.getElementById('print')
                .innerHTML = "Player X Won!";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            window.alert('Player X Won!');
        }
        else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
            b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
            document.getElementById('print')
                .innerHTML = "Player X Won!";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            window.alert('Player X Won!');
        }
        else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
            b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
            document.getElementById('print')
                .innerHTML = "Player X Won!";
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            window.alert('Player X Won!');
        }
        else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
            b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
            document.getElementById('print')
                .innerHTML = "Player X Won!";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            window.alert('Player X Won!');
        }
        else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
            b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
            document.getElementById('print')
                .innerHTML = "Player X Won!";
            document.getElementById("b1").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b9").disabled = true;
            window.alert('Player X Won!');
        }
        else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
            b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
            document.getElementById('print')
                .innerHTML = "Player X Won!";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            window.alert('Player X Won!');
        }

        // Checking of Player X finsh
        // Checking of Player 0 start, and if player 0 Won! or
        // not then disable all other fields
        else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
            b2 == '0') && (b3 == '0' || b3 == '0')) {
            document.getElementById('print')
                .innerHTML = "Player 0 Won!";
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            window.alert('Player 0 Won!');
        }
        else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
            b4 == '0') && (b7 == '0' || b7 == '0')) {
            document.getElementById('print')
                .innerHTML = "Player 0 Won!";
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            window.alert('Player 0 Won!');
        }
        else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
            b8 == '0') && (b9 == '0' || b9 == '0')) {
            document.getElementById('print')
                .innerHTML = "Player 0 Won!";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            window.alert('Player 0 Won!');
        }
        else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
            b6 == '0') && (b9 == '0' || b9 == '0')) {
            document.getElementById('print')
                .innerHTML = "Player 0 Won!";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            window.alert('Player 0 Won!');
        }
        else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
            b5 == '0') && (b9 == '0' || b9 == '0')) {
            document.getElementById('print')
                .innerHTML = "Player 0 Won!";
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            window.alert('Player 0 Won!');
        }
        else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
            b5 == '0') && (b7 == '0' || b7 == '0')) {
            document.getElementById('print')
                .innerHTML = "Player 0 Won!";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            window.alert('Player 0 Won!');
        }
        else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
            b5 == '0') && (b8 == '0' || b8 == '0')) {
            document.getElementById('print')
                .innerHTML = "Player 0 Won!";
            document.getElementById("b1").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b9").disabled = true;
            window.alert('Player 0 Won!');
        }
        else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
            b5 == '0') && (b6 == '0' || b6 == '0')) {
            document.getElementById('print')
                .innerHTML = "Player 0 Won!";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            window.alert('Player 0 Won!');
        }

        // Checking Player 0's game finish
        // Check for Tie
        else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
            || b2 == '0') && (b3 == 'X' || b3 == '0') &&
            (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
                b5 == '0') && (b6 == 'X' || b6 == '0') &&
            (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
                b8 == '0') && (b9 == 'X' || b9 == '0')) {
            document.getElementById('print')
                .innerHTML = "Game Tie";
            window.alert('Game Tie');
        }
        else {

            // Print player's turn 
            if (flag == 1) {
                document.getElementById('print').innerHTML = "Player X Turn";
            }
            else {
                document.getElementById('print').innerHTML = "Player 0 Turn";
            }
        }
    }
 
    // Function to reset game
    function gameReset() {
        location.reload();
        document.getElementById('b1').value = '';
        document.getElementById("b2").value = '';
        document.getElementById("b3").value = '';
        document.getElementById("b4").value = '';
        document.getElementById("b5").value = '';
        document.getElementById("b6").value = '';
        document.getElementById("b7").value = '';
        document.getElementById("b8").value = '';
        document.getElementById("b9").value = '';
        document.getElementById("myPlayer1Name").value = '';
        document.getElementById("myPlayer2Name").value = '';
    }

    // check players and add an 'X' or an 'O'
    flag = Math.floor(Math.random() * 2);

    function myfunc_3() {
        if (flag == 1) {
            document.getElementById("b1").value = "X";
            document.getElementById("b1").disabled = true;
            flag = 0;
        }
        else {
            document.getElementById("b1").value = "0";
            document.getElementById("b1").disabled = true;
            flag = 1;
        }
    }

    function myfunc_4() {
        if (flag == 1) {
            document.getElementById("b2").value = "X";
            document.getElementById("b2").disabled = true;
            flag = 0;
        }
        else {
            document.getElementById("b2").value = "0";
            document.getElementById("b2").disabled = true;
            flag = 1;
        }
    }

    function myfunc_5() {
        if (flag == 1) {
            document.getElementById("b3").value = "X";
            document.getElementById("b3").disabled = true;
            flag = 0;
        }
        else {
            document.getElementById("b3").value = "0";
            document.getElementById("b3").disabled = true;
            flag = 1;
        }
    }

    function myfunc_6() {
        if (flag == 1) {
            document.getElementById("b4").value = "X";
            document.getElementById("b4").disabled = true;
            flag = 0;
        }
        else {
            document.getElementById("b4").value = "0";
            document.getElementById("b4").disabled = true;
            flag = 1;
        }
    }

    function myfunc_7() {
        if (flag == 1) {
            document.getElementById("b5").value = "X";
            document.getElementById("b5").disabled = true;
            flag = 0;
        }
        else {
            document.getElementById("b5").value = "0";
            document.getElementById("b5").disabled = true;
            flag = 1;
        }
    }

    function myfunc_8() {
        if (flag == 1) {
            document.getElementById("b6").value = "X";
            document.getElementById("b6").disabled = true;
            flag = 0;
        }
        else {
            document.getElementById("b6").value = "0";
            document.getElementById("b6").disabled = true;
            flag = 1;
        }
    }

    function myfunc_9() {
        if (flag == 1) {
            document.getElementById("b7").value = "X";
            document.getElementById("b7").disabled = true;
            flag = 0;
        }
        else {
            document.getElementById("b7").value = "0";
            document.getElementById("b7").disabled = true;
            flag = 1;
        }
    }

    function myfunc_10() {
        if (flag == 1) {
            document.getElementById("b8").value = "X";
            document.getElementById("b8").disabled = true;
            flag = 0;
        }
        else {
            document.getElementById("b8").value = "0";
            document.getElementById("b8").disabled = true;
            flag = 1;
        }
    }

    function myfunc_11() {
        if (flag == 1) {
            document.getElementById("b9").value = "X";
            document.getElementById("b9").disabled = true;
            flag = 0;
        }
        else {
            document.getElementById("b9").value = "0";
            document.getElementById("b9").disabled = true;
            flag = 1;
        }
    }
