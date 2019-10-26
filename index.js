var numbers = [];

for (i = 0; i <2 ; i++)  //rolls for each player
{
var rand = throwDice();
numbers.push(rand);      //stores dice results
setImage();
}

whoWins();

function throwDice() {
  var rand = Math.floor(Math.random() * 6) + 1;
  return rand;
}

function setImage() {
var randDice = "dice" + rand + ".png";
var randImgSource = "images/" + randDice;
var image = document.querySelectorAll("img")[i];
image.setAttribute("src", randImgSource);
}

function whoWins() {
if (numbers[0] > numbers[1])
{document.querySelector("h1").innerHTML = "Player 1 Wins!";}
else if (numbers[0] < numbers[1])
{document.querySelector("h1").innerHTML = "Player 2 Wins!";}
else
{document.querySelector("h1").innerHTML = "Draw!";}
}
