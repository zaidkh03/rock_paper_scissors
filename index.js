let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    if (choice == 0) {
        return "rock"
    } else if (choice == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Choose: (Rock or Paper or Scisors)")
    return choice.toLowerCase()
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("draw")
    } else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("YOU WIN, Rock beats Scissors")
            humanScore++
        } else {
            console.log("YOU LOSS, Rock loss to Paper")
            computerScore++
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("YOU WIN, Paper beats Rock")
            humanScore++
        } else {
            console.log("YOU LOSS, Paper loss to Scissors")
            computerScore++
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log("YOU WIN, Scissors beats Paper")
            humanScore++
        } else {
            console.log("YOU LOSS, Scissors loss to Rock")
            computerScore++
        }
    }
    console.log(`YOU ${humanScore} - Computer ${computerScore}`)
}

function playGame() {
    const rounds = 5
    let i = 1
    while (i <= rounds) {
        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        i++
    }
    if (humanScore > computerScore) {
        console.log("YOU WON THE GAME")
        window.alert("YOU WON THE GAME")
    } else if (humanScore < computerScore) {
        console.log("YOU LOST THE GAME")
        window.alert("YOU LOST THE GAME")
    } else {
        console.log("IT'S A DRAW")
        window.alert("IT'S A DRAW")
    }
}
playGame()
