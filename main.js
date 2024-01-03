var choice = ["rock", "paper", "scissors"];

var userChoice = choice[Math.floor(Math.random() * choice.length)];
var computerChoice = choice[Math.floor(Math.random() * choice.length)];

function play() {
  console.log("Computer choice: " + computerChoice);
  console.log("Player choice: " + userChoice);
}

play();

console.log();

if (userChoice === computerChoice) {
  console.log("Draw");
} else if (
  (userChoice === "rock" && computerChoice === "scissors") ||
  (userChoice === "paper" && computerChoice === "rock") ||
  (userChoice === "scissors" && computerChoice === "paper")
) {
  console.log("User wins!");
} else {
  console.log("Computer wins!");
}
