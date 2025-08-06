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

function buttonclicked() {
  if (currentplayer == "X") {
    selectedbutton.innnerHTML = "X";
  } else {
    selectedbutton.innnerHTML = "O";
  }
  currentplayer = currentplayer === "X" ? "O" : "X";
}
