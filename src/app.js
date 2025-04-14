import "./style.css";

window.onload = function () {
  generateCard();
  document.getElementById("generateBtn").addEventListener("click", generateCard);
};

function generateCard() {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
  let symbols = {
   Hearts: "♥",
   Diamonds: "♦",
   Spades: "♠",
   Clubs: "♣"
  };

  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomSymbol = symbols[randomSuit];

  document.getElementById("cardContent").innerHTML = randomNumber;
  document.querySelector(".top").innerHTML = randomSymbol;
  document.querySelector(".bottom").innerHTML = randomSymbol;

  let card = document.getElementById("theCard");
  card.className = "card";
  card.classList.add("suit-" + randomSuit.toLowerCase());
}


