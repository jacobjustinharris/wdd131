const board = document.getElementById("chessboard");
const status = document.getElementById("status");
let selectedPiece = null;
let currentTurn = "white";
const pieces = {
    'r': '&#9820;', 'n': '&#9822;', 'b': '&#9821;', 'q': '&#9819;', 'k': '&#9818;', 'p': '&#9823;',
    'R': '&#9814;', 'N': '&#9816;', 'B': '&#9815;', 'Q': '&#9813;', 'K': '&#9812;', 'P': '&#9817;'
};

const initialBoard = [
    "RNBQKBNR",
    "PPPPPPPP",
    "        ",
    "        ",
    "        ",
    "        ",
    "pppppppp",
    "rnbqkbnr"
];

function createBoard() {
    board.innerHTML = "";
    initialBoard.forEach((row, i) => {
        row.split('').forEach((piece, j) => {
            const square = document.createElement("div");
            square.classList.add("square", (i + j) % 2 === 0 ? "white" : "black");
            square.dataset.row = i;
            square.dataset.col = j;
            if (piece !== " ") square.innerHTML = pieces[piece];
            square.addEventListener("click", () => handleMove(square));
            board.appendChild(square);
        });
    });
}

function handleMove(square) {
    if (!selectedPiece) {
        if (square.innerHTML.trim() === "") return; // Prevent selecting empty squares

        selectedPiece = square;
        selectedPiece.style.border = "2px solid red";
    } else {
        selectedPiece.style.border = "none";

        let pieceHTML = selectedPiece.innerHTML; // Store the piece before clearing it
        selectedPiece.innerHTML = ""; // Clear the original position
        square.innerHTML = pieceHTML; // Move the piece to the new position

        selectedPiece = null;
        currentTurn = currentTurn === "white" ? "black" : "white";
        status.innerText = `${currentTurn.charAt(0).toUpperCase() + currentTurn.slice(1)}'s Turn`;
    }
}

createBoard();
