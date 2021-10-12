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

// App elements
let gameBoard = document.getElementById("gameBoard");
let squares = gameBoard.querySelectorAll(".square");
let resetButton = document.getElementById("reset");
let alertDiv = document.getElementById("alertDiv");

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

resetButton.addEventListener("click", () => playAgain());

gameBoard.addEventListener("click", (e) => {
	if (e.target.classList.contains("square")) {
		alertDiv.innerHTML = "";
		addToken(e.target.id);
		switchPlayer();
	}
});

function addToken(id) {
	switch (id) {
		case "oneOne":
			if (gameBoardMatrix[0][0] === "") {
				gameBoardMatrix[0][0] = player;
				oneOne.innerHTML = player;
			} else {
				generateAlert("danger", "Choose other square. This one is already taken!");
			}
			break;
		case "oneTwo":
			if (gameBoardMatrix[0][1] === "") {
				gameBoardMatrix[0][1] = player;
				oneTwo.innerHTML = player;
			} else {
				generateAlert("danger", "Choose other square. This one is already taken!");
			}
			break;
		case "oneThree":
			if (gameBoardMatrix[0][2] === "") {
				gameBoardMatrix[0][2] = player;
				oneThree.innerHTML = player;
			} else {
				generateAlert("danger", "Choose other square. This one is already taken!");
			}

			break;
		case "twoOne":
			if (gameBoardMatrix[1][0] === "") {
				gameBoardMatrix[1][0] = player;
				twoOne.innerHTML = player;
			} else {
				generateAlert("danger", "Choose other square. This one is already taken!");
			}

			break;
		case "twoTwo":
			if (gameBoardMatrix[1][1] === "") {
				gameBoardMatrix[1][1] = player;
				twoTwo.innerHTML = player;
			} else {
				generateAlert("danger", "Choose other square. This one is already taken!");
			}
			break;
		case "twoThree":
			if (gameBoardMatrix[1][2] === "") {
				gameBoardMatrix[1][2] = player;
				twoThree.innerHTML = player;
			} else {
				generateAlert("danger", "Choose other square. This one is already taken!");
			}

			break;
		case "threeOne":
			if (gameBoardMatrix[2][0] === "") {
				gameBoardMatrix[2][0] = player;
				threeOne.innerHTML = player;
			} else {
				generateAlert("danger", "Choose other square. This one is already taken!");
			}

			break;
		case "threeTwo":
			if (gameBoardMatrix[2][1] === "") {
				gameBoardMatrix[2][1] = player;
				threeTwo.innerHTML = player;
			} else {
				generateAlert("danger", "Choose other square. This one is already taken!");
			}

			break;
		case "threeThree":
			if (gameBoardMatrix[2][2] === "") {
				gameBoardMatrix[2][2] = player;
				threeThree.innerHTML = player;
			} else {
				generateAlert("danger", "Choose other square. This one is already taken!");
			}

			break;
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

function playAgain() {
	window.location.reload();
}

function switchPlayer() {
	switch (player) {
		case "X":
			xMoves++;
			player = "0";
			break;
		case "0":
			zeroMoves++;
			player = "X";
			break;
		default:
			player = "X";
	}
}
