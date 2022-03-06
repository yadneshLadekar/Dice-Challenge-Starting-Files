var first = Math.floor(Math.random() * 6) + 1;
var second = Math.floor(Math.random() * 6) + 1;

var randomimage1 = "images/dice" + first + ".png";
var firstimage = document.querySelectorAll("img")[0];
firstimage.setAttribute("src", randomimage1);


var randomimage2 = "images/dice" + second + ".png";
var secondimage = document.querySelectorAll("img")[1];
secondimage.setAttribute("src", randomimage2);

if (first === second) {
  document.querySelector("h1").innerText = "Draw!";
} else if (first > second) {
  document.querySelector("h1").innerText = " 🚩 Player 1 wins";
} else if (first < second) {
  document.querySelector("h1").innerText = " Player 2 wins 🚩";
}
