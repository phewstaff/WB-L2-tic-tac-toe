import "../assets/styles/style.css";
import "../assets/styles/board.css";

const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const board = document.getElementById("board");
const cells = document.querySelectorAll("[data-cell]");
const winningMessageElement = document.getElementById("winningMessage");
const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);

let circleTurn;

const isDraw = () => {
  return [...cells].every((cell) => {
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    );
  });
};

const checkWin = (currentClass) => {
  // если currentClass есть во всех 3 элементах хотя бы одного из массива WINNING_COMBINATIONS, возвращаем true(Победа)
  return WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => {
      return cells[index].classList.contains(currentClass);
    });
  });
};

const endGame = (draw) => {
  if (draw) {
    winningMessageTextElement.innerText = "Draw!";
  } else {
    winningMessageTextElement.innerText = `${circleTurn ? "O" : "X"} Wins!`;
  }
  winningMessageElement.classList.add("show");
};

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
  console.log(1);
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  }

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
