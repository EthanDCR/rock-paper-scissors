// Rock Paper Scissors Project (no GUI yet)

function userinput(x) {
  x = prompt("Rock, Paper, or Scissors? ");
  if (x === "rock") {
    return "rock";
  } else if (x === "paper") {
    return "paper";
  } else if (x === "scissors") {
    return "scissors";
  } else {
    return "Invalid input";
  }
}

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

let cpu = cpuinput();
let user = userinput();

console.log(cpu);
console.log(user);
