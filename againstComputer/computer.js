const boxes = document.querySelectorAll(".box");
const restartBtn = document.getElementById("restart");
const newGameBtn = document.getElementById("newgame");
const menu = document.getElementById("menu");
const message = document.getElementById("turn");
const winner = document.querySelector(".winner p.win");
const board = document.querySelector(".gameboard");
const xScore = document.querySelector(".xscore .value");
const oScore = document.querySelector(".yscore .value");

const Otext = "O";
const Xtext = "X";

const selectedPlayer = localStorage.getItem('selectedPlayer');
let currPlayer = selectedPlayer; 
let computerPlayer = currPlayer === Xtext ? Otext : Xtext; 
let counter = 0;
let gameEnded = false;
let xWins = 0;
let oWins = 0;

const startGame = () => {
    playerTurn();

    boxes.forEach((box) => {
        box.addEventListener("click", clickBox);
    });
};

function clickBox(e) {
    if (e.target.innerText === "" && !gameEnded) {
        e.target.innerText = currPlayer;
        if (checkWin()) {
            winner.innerText = `${currPlayer} has won!`;
            gameEnded = true;
            winner.style.display = "block";
            board.style.display = "none";
            newGameBtn.style.display = "block";
            restartBtn.style.display = "none";
            updateScore();
        } else {
            if (counter < 8) {
                currPlayer = currPlayer === Xtext ? Otext : Xtext;
                playerTurn();
                if (currPlayer === computerPlayer && !gameEnded) {
                    computerTurn();
                }
            } else {
                finishGame();
                message.innerText = "";
            }
        }
    }
}

function playerTurn() {
    if (counter <= 8 && !gameEnded) {
        message.innerText = `${currPlayer}'s time to play...`;
        counter++;
    } else {
        message.innerText = "";
    }
}

function computerTurn() {
    const emptyBoxes = Array.from(boxes).filter((box) => box.innerText === "");
    const randomIndex = Math.floor(Math.random() * emptyBoxes.length);
    emptyBoxes[randomIndex].innerText = computerPlayer;
    if (checkWin()) {
        winner.innerText = `${computerPlayer} has won!`;
        gameEnded = true;
        winner.style.display = "block";
        board.style.display = "none";
        newGameBtn.style.display = "block";
        restartBtn.style.display = "none";
        updateScore();
    } else {
        currPlayer = currPlayer === Xtext ? Otext : Xtext;
        playerTurn();
    }
}

function checkWin() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const condition of winningCombos) {
        let [a, b, c] = condition;

        if (
            boxes[a].innerText === currPlayer &&
            boxes[b].innerText === currPlayer &&
            boxes[c].innerText === currPlayer
        ) {
            return true;
        }
    }
    return false;
}

function updateScore() {
    if (currPlayer === Xtext) {
        xWins++;
        xScore.innerText = xWins;
        winner.innerText = `${Xtext} has won!`;
    } else if (currPlayer === Otext) {
        oWins++;
        oScore.innerText = oWins;
        winner.innerText = `${Otext} has won!`;
    }
    winner.style.display = "block";
    board.style.display = "none";
    newGameBtn.style.display = "block";
    restartBtn.style.display = "none";
}


function restart() {
    boxes.forEach((box) => {
        box.innerText = "";
    });
    board.style.display = "grid";
    winner.style.display = "none";
    
    gameEnded = false;
    counter = 0;
    newGameBtn.style.display = "none";
    restartBtn.style.display = "block";
    
    startGame();
}

function finishGame() {
    winner.innerText = "It's a draw!";
    winner.style.display = "block";
    board.style.display = "none";
    newGameBtn.style.display = "block";
    restartBtn.style.display = "none";

    // Increase both xWins and oWins by one
    xWins++;
    oWins++;
    xScore.innerText = xWins;
    oScore.innerText = oWins;
}


startGame();
restartBtn.addEventListener("click", restart);
newGameBtn.addEventListener("click", restart);
