// Rock Paper Scissors Project (no GUI yet)

// Get user input

function userinput() {
  x = prompt("Rock, Paper, or Scissors? ");
  if (x === "rock") {
    return "rock";
  } else if (x === "paper") {
    return "paper";
  } else if (x === "scissors") {
    return "scissors";
  } else {
    console.log("Invalid input");
  }
}

// Get random cpu input

function cpuinput() {
  let y = Math.random();
  if (y >= 0.67) {
    return "scissors";
  } else if (y >= 0.34) {
    return "paper";
  } else {
    return "rock";
  }
}

let user = userinput();
let cpu = cpuinput();

function compare() {
  if (user === cpu) {
    return "tie";
  } else if (user === "rock" && cpu === "paper") {
    return "user";
  } else if (user === "paper" && cpu === "rock") {
    return "user";
  } else if (user === "scissors" && cpu === "paper") {
    return "user";
  } else {
    return "cpu";
  }
}

function winner() {
  let result = compare(user, cpu);
  if (result === "user") {
    console.log("You Win, the cpu chose " + cpu);
  } else if (result === "cpu") {
    console.log("You Lose, the cpu chose " + cpu);
  } else {
    console.log("Tie, the cpu chose " + cpu);
  }
}

winner();
