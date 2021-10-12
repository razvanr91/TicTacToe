// Global variables
let xMoves = 0;
let zeroMoves = 0;
let totalMoves = 0;
let player = "X";
let gameBoardMatrix = [
	["", "", ""],
	["", "", ""],
	["", "", ""],
];

let playerWinFirstLineHorizontal =
	gameBoardMatrix[0][0] === player &&
	gameBoardMatrix[0][1] === player &&
	gameBoardMatrix[0][2] === player;

console.log(playerWinFirstLineHorizontal);

// App elements
let gameBoard = document.getElementById("gameBoard");
let squares = gameBoard.querySelectorAll(".square");
let resetButton = document.getElementById("reset");
let alertDiv = document.getElementById("alertDiv");
let currentPlayer = document.getElementById("currentPlayer");

// GameBoard squares
let oneOne = document.getElementById("oneOne");
let oneTwo = document.getElementById("oneTwo");
let oneThree = document.getElementById("oneThree");
let twoOne = document.getElementById("twoOne");
let twoTwo = document.getElementById("twoTwo");
let twoThree = document.getElementById("twoThree");
let threeOne = document.getElementById("threeOne");
let threeTwo = document.getElementById("threeTwo");
let threeThree = document.getElementById("threeThree");

resetButton.addEventListener("click", playAgain);

gameBoard.addEventListener("click", playGame);

function addToken(id) {
	switch (id) {
		case "oneOne":
			addToSquare(0, 0, oneOne);
			break;
		case "oneTwo":
			addToSquare(0, 1, oneTwo);
			break;
		case "oneThree":
			addToSquare(0, 2, oneThree);
			break;
		case "twoOne":
			addToSquare(1, 0, twoOne);
			break;
		case "twoTwo":
			addToSquare(1, 1, twoTwo);
			break;
		case "twoThree":
			addToSquare(1, 2, twoThree);
			break;
		case "threeOne":
			addToSquare(2, 0, threeOne);
			break;
		case "threeTwo":
			addToSquare(2, 1, threeTwo);
			break;
		case "threeThree":
			addToSquare(2, 2, threeThree);
			break;
	}
}

function playGame(e) {
	if (e.target.classList.contains("square")) {
		alertDiv.innerHTML = "";
		addToken(e.target.id);
	}
}

function generateAlert(type, message) {
	let alert = document.createElement("div");
	alert.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
	alertDiv.append(alert);
}

function checkWinHorizontal(row) {
	return (
		gameBoardMatrix[row][0] === player &&
		gameBoardMatrix[row][1] === player &&
		gameBoardMatrix[row][2] === player
	);
}

function checkWinVertical(column) {
	return (
		gameBoardMatrix[0][column] === player &&
		gameBoardMatrix[1][column] === player &&
		gameBoardMatrix[2][column] === player
	);
}

function checkWinDiagonal() {
	return (
		(gameBoardMatrix[0][2] === player &&
			gameBoardMatrix[1][1] === player &&
			gameBoardMatrix[2][0] === player) ||
		(gameBoardMatrix[0][0] === player &&
			gameBoardMatrix[1][1] === player &&
			gameBoardMatrix[2][2] === player)
	);
}

function addToSquare(row, column, element) {
	if (gameBoardMatrix[row][column] === "") {
		gameBoardMatrix[row][column] = player;
		element.innerHTML = gameBoardMatrix[row][column];
		totalMoves++;
		if (totalMoves >= 5) {
			let winHorizontal = checkWinHorizontal(row) ? endGame() : "";
			let winVertical = checkWinVertical(column) ? endGame() : "";
			let winDiagonal = checkWinDiagonal() ? endGame() : "";
		} else if (totalMoves === 9) {
			player = "Nobody";
			endGame();
		}
		switchPlayer();
	} else {
		generateAlert("danger", "Choose other square. This one is already taken!");
	}
}

function endGame() {
	if (totalMoves === 9) {
		generateAlert("warning", "Nobody won.");
		currentPlayer.innerHTML = "Draw";
	} else {
		generateAlert("success", `Player ${player} has won!`);
		currentPlayer.innerHTML = `Player ${player} won!`;
	}
	return gameBoard.removeEventListener("click", playGame);
}

function playAgain() {
	window.location.reload();
}

function switchPlayer() {
	switch (player) {
		case "X":
			xMoves++;
			player = "0";
			currentPlayer.innerHTML = "It's 0's turn";
			break;
		case "0":
			zeroMoves++;
			player = "X";
			currentPlayer.innerHTML = "It's X's turn";
			break;
		default:
			player = "X";
			currentPlayer.innerHTML = "It's X's turn";
	}
}
