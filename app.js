const winningcombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
var chosenoptions = ["", "", "", "", "", "", "", "", ""];
var currentplayer = "X";
var runninggame = true;

document.querySelector(".scoreboard").innerHTML = currentplayer + "'s turn ";

for (let button of document.querySelectorAll(".button")) {
  var selectedbutton;
  button.addEventListener("click", () => {
    if (runninggame && button.innerHTML === "") {
      selectedbutton = button.id;
      buttonclicked(selectedbutton);
    }
  });
}

function buttonclicked(selectedbutton) {
  if (currentplayer == "X") {
    document.getElementById(selectedbutton).innerHTML = "X";
  } else {
    document.getElementById(selectedbutton).innerHTML = "O";
  }
  chosenoptions[selectedbutton] = currentplayer;
  console.log(chosenoptions);
  checkwinner(currentplayer);
  currentplayer = currentplayer === "X" ? "O" : "X";
}

function checkwinner(currentplayer) {
  if (runninggame) {
    for (let combination of winningcombinations) {
      if (
        chosenoptions[combination[0]] === currentplayer &&
        chosenoptions[combination[1]] === currentplayer &&
        chosenoptions[combination[2]] === currentplayer
      ) {
        runninggame = false;

        endGame(currentplayer);
        return;
      }
    }
  }
}
function endGame(currentplayer) {
  runninggame = false;
  console.log(currentplayer + " wins!");
  document.querySelector(".scoreboard").innerHTML = currentplayer + " wins!";
}

function NewGame() {
  chosenoptions = ["", "", "", "", "", "", "", "", ""];
  currentplayer = "X";
  runninggame = true;
  document.querySelector(".scoreboard").innerHTML = "";
  for (let button of document.querySelectorAll(".button")) {
    button.innerHTML = "";
  }
}
