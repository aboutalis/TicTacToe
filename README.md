# Tic Tac Toe Project

This project is a web-based implementation of the popular game Tic Tac Toe. It is developed using HTML, CSS, and JavaScript. The game allows two players to compete against each other or play against a computer opponent.

## Files and Structure

The project consists of the following files:

- `start.html`: This HTML file represents the starting point of the game. It provides options to choose the game type and player.
- `start.css`: This CSS file contains the styling rules for the starting page.
- `start.js`: This JavaScript file handles the functionality of the starting page, including selecting the game type and player, and starting the game accordingly.
- `computer.html`: This HTML file represents the game board when playing against a computer opponent.
- `computer.css`: This CSS file contains the styling rules for the game board when playing against a computer.
- `computer.js`: This JavaScript file handles the functionality of the game board when playing against a computer, including player turns, checking for wins, updating scores, and restarting the game.
- `friend.html`: This HTML file represents the game board when playing against a friend.
- `friend.css`: This CSS file contains the styling rules for the game board when playing against a friend.
- `friend.js`: This JavaScript file handles the functionality of the game board when playing against a friend, including player turns, checking for wins, updating scores, and restarting the game.

## Game Features

### Start Page

The start page (`start.html`) allows the player to choose the game type and player. The available options are:

- Game Type:
  - Multiplayer: Allows two players to compete against each other.
  - Computer: Allows a player to play against a computer opponent.
- Player:
  - X: The player can choose to play as X.
  - O: The player can choose to play as O.

The selected options are stored in the browser's local storage.

### Game Board

#### Against a Computer

The game board when playing against a computer (`computer.html`) features the following elements:

- Score Display: Shows the score of X and O.
- Restart Button: Restarts the game without changing the players or scores.
- New Game Button: Restarts the game and resets the scores.
- Turn Indicator: Displays whose turn it is.
- Game Board: Represents the Tic Tac Toe grid with clickable boxes.
- Winner Display: Shows the winning player when a player wins.

#### Against a Friend

The game board when playing against a friend (`friend.html`) is similar to the computer version and includes the same elements as described above.

### Game Logic

The game logic is implemented in the respective JavaScript files (`computer.js` and `friend.js`). The common functionalities include:

- Player Turns: Alternate turns between the players.
- Check Win: Checks for a winning combination after each turn.
- Update Score: Updates the score of the winning player.
- Restart Game: Resets the game board and allows players to start a new game.

## How to Play

1. Open the `start.html` file in a web browser.
2. Choose the game type (multiplayer or computer) and player (X or O).
3. Click the "Start" button.
4. Play the game by clicking on the available boxes on the game board.
5. Alternate turns with the opponent until a player wins or the game ends in a draw.
6. The game will display the winner or a draw message.
7. Click the "Restart" button to play again with the same players and scores, or click "New Game" to start a new game with fresh scores.

Enjoy playing Tic Tac Toe!
