let gameBoard = document.getElementById("game");

let player = "X";

gameBoard.addEventListener("click", (e) => {
	console.log(e.target.id);
	e.target.innerHTML = player;
    switchPlayer();
});


function playAgain() {
	window.location.reload();
}

function switchPlayer() {
    switch(player) {
        case "X":
            player = "0";
            break;
        case "0":
            player = "X";
            break;
        default:
            player = "X";
    }
}
