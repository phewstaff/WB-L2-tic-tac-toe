import "../assets/styles/style.css";
import "../assets/styles/board.css";

const X_CLASS = "x";
const CIRCLE_CLASS = "circle";

const cells = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
let circleTurn;

const setBoardHoverClass = () => {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);

  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
};

const swapTurns = () => {
  circleTurn = !circleTurn;
};

const placeMark = (cell, currentClass) => {
  cell.classList.add(currentClass);
};

const handleClick = (e) => {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;

  placeMark(cell, currentClass);
  swapTurns();
  setBoardHoverClass();

  //place Mark
  // Check For Win
  // Check for Draw
  // Switch Turns
};

const startGame = () => {
  circleTurn = false;
  cells.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
};

startGame();
