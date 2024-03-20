const button = document.querySelectorAll(".btn");
const resetButton = document.querySelector("#reset");
const newButton = document.querySelector(".new-game");
const text = document.querySelector(".text");
const buttonBox = document.querySelector(".btn-box");
const message = document.querySelector(".msg");
let player = document.querySelector(".heading");
let headingBox = document.querySelector(".heading-box");
const winningMsg = document.querySelector('.winning-msg');

let playerO = true;
let winingPlayerO = 0;
let winingPlayerX = 0;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

button.forEach(function (e) {
  e.addEventListener("click", () => {
    if (playerO) {
      e.innerHTML = "O";
      e.style.color = "#d80032";
      e.style.borderColor = "#d80032";
      playerO = false;
      currentPlayer(playerO);
    } else {
      e.innerHTML = "X";
      e.style.color = "#70d6ff";
      e.style.borderColor = "#70d6ff";
      playerO = true;
      currentPlayer(playerO);
    }
    e.disabled = true;
    checkWin();
  });
});

function currentPlayer(pos) {
  if (pos === true) player.innerText = `Current Player - O`;
  else player.innerText = `Current Player - X`;
}
currentPlayer(playerO);
function showWinner(pos1Val, winingPlayerO, winingPlayerX) {
  message.classList.remove("hide");
  winningMsg.innerText = `Congratulation!! 🎉 winner is ${pos1Val}`;
    text.innerText=`PlayerO = ${winingPlayerO} playerX = ${winingPlayerX}`
  disableBtn();
}

function newGame() {
  playerO = true;
  enableBtn();
  message.classList.add("hide");
  buttonBox.classList.remove("hide");
  resetButton.classList.remove("hide");
  headingBox.classList.remove("hide");
  button.forEach((btn) => {
    btn.style.borderColor = "rgba(164, 160, 160, 0.2)";
  });
}
function reset() {
  playerO = true;
  currentPlayer(true);
  enableBtn();
  message.classList.add("hide");
  button.forEach((btn) => {
    btn.style.borderColor = "rgba(164, 160, 160, 0.2)";
  });
}

function disableBtn() {
  for (let btn of button) {
    btn.disabled = true;
  }
}
function enableBtn() {
  for (let btn of button) {
    btn.disabled = false;
    btn.innerHTML = "";
  }
}
function checkWin() {
  for (let value of winPattern) {
    let pos1Val = button[value[0]].innerText;
    let pos2Val = button[value[1]].innerText;
    let pos3Val = button[value[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner!", pos1Val);
        message.classList.remove("hide");
        buttonBox.classList.add("hide");
        resetButton.classList.add("hide");
        if (pos1Val === "O") {
          winingPlayerO += 1;
        } else {
          winingPlayerX += 1;
        }
        headingBox.classList.add("hide");
        showWinner(pos1Val, winingPlayerO, winingPlayerX);
      }
    }
  }
}

resetButton.addEventListener("click", () => reset());
newButton.addEventListener("click", () => newGame());
