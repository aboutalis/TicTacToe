let selectedGameType = 'multiplayer';

function selectGameType(gameType) {
    selectedGameType = gameType;
    const multiplayerButton = document.getElementById('multiplayerButton');
    const computerButton = document.getElementById('computerButton');

    multiplayerButton.classList.remove('selected');
    computerButton.classList.remove('selected');

    if (gameType === 'multiplayer') {
        multiplayerButton.classList.add('selected');
    } else if (gameType === 'computer') {
        computerButton.classList.add('selected');
    }
}

// Initially select multiplayer
selectGameType(selectedGameType);

let selectedPlayer = '';

function selectPlayer(player) {
    selectedPlayer = player;
    const xButton = document.getElementById('xButton');
    const yButton = document.getElementById('yButton');

    xButton.classList.remove('selected');
    yButton.classList.remove('selected');

    if (player === 'X') {
        xButton.classList.add('selected');
    } else if (player === 'O') {
        yButton.classList.add('selected');
    }
}

function startGame() {
    if (selectedPlayer === '') {
        alert('Please choose either X or O.');
    } else {
        localStorage.setItem('selectedPlayer', selectedPlayer);
        localStorage.setItem('selectedGameType', selectedGameType);
        if (selectedGameType === 'multiplayer') {
            window.location.href = 'againstFriend/friend.html';
        } else if (selectedGameType === 'computer') {
            window.location.href = 'againstComputer/computer.html';
        }
    }
}

