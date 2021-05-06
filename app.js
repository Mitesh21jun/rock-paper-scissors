let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
  //   console.log(choices[randomNum]);
}
// game();
function toWord(letter) {
    if( letter === 'r') 
        return "Rock";
    if (letter === 'p')
        return "Paper";
    if (letter === 's')
        return "Scissors";
}
function game(userChoice) {
  const computerChoice = getComputerChoice();

  //   if (userChoice === computerChoice) {
  //   console.log(
  //     `user choice : ${userChoice} computer choice: ${computerChoice}`
  //   );
  //   console.log("Draw");
  // } else if (
  //   (userChoice === "r" && computerChoice === "p") ||
  //   (userChoice === "p" && computerChoice === "s") ||
  //   (userChoice === "s" && computerChoice === "r")
  // ) {
  //   console.log(
  //     `user choice : ${userChoice} computer choice: ${computerChoice}`
  //   );

  //   console.log("you lose 💩");
  // } else {
  //   console.log(
  //     `user choice : ${userChoice} computer choice: ${computerChoice}`
  //   );

  //   console.log("You win ❤️");
  // }

  switch (userChoice + computerChoice) {
    case "pr":
    case "rs":
    case "sp":
      win(userChoice, computerChoice);
      break;

    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, computerChoice);
      break;

    case "rr":
    case "ss":
    case "pp":
      draw(userChoice, computerChoice);
      break;
  }
}
function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerText = userScore;
    result_p.innerHTML = `${toWord(userChoice)} beats ${toWord(computerChoice)}, You Win! 🔥`
    document.getElementById(userChoice).classList.add('green-glow')
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('green-glow')
    }, 1000)
}
function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerText = computerScore;
    result_p.innerHTML = `${toWord(userChoice)} got beaten by ${toWord(computerChoice)}, You Lose! 💩`
    document.getElementById(userChoice).classList.add('red-glow')
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('red-glow')
    }, 1000)
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = (`It's a Draw, You both selected ${toWord(userChoice)}! 😐`)
    document.getElementById(userChoice).classList.add('grey-glow')
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('grey-glow')
    }, 1000)
}


function main() {
  rock_div.addEventListener("click", () => {
    game("r");
  });
  paper_div.addEventListener("click", () => {
    game("p");
  });
  scissors_div.addEventListener("click", () => {
    game("s");
  });
}

main();
