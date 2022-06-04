const hand = ['rock', 'paper', 'scissors']
let playerScore = 0
let computerScore = 0
let numberOfGamesToPlay = 0
let playButton = document.getElementById('myBtn')
function computerPlay() {
  return hand[Math.floor(Math.random() * hand.length)]
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'Tie'
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      return 'You lose'
    } else {
      return 'You win'
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      return 'You lose'
    } else {
      return 'You win'
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      return 'You lose'
    } else {
      return 'You win'
    }
  } else {
    return 'Invalid input'
  }
}

function game() {
  for (let i = 0; i < numberOfGamesToPlay; i++) {
    let playerSelection = prompt('Rock, Paper or Scissors?').toLocaleLowerCase()
    let computerSelection = computerPlay()
    let result = playRound(playerSelection, computerSelection)
    if (result === 'You win') {
      playerScore++
    } else if (result === 'You lose') {
      computerScore++
    } else if (result === 'Invalid input') {
      alert('Invalid input, TRY AGAIN')
      i--
    }
    console.log(`-----------------------------------------`)
    console.log(`Round ${i + 1}`)
    console.log(
      `You played ${playerSelection} and computer played ${computerSelection}. ${result}`
    )
  }
  if (playerScore > computerScore) {
    console.log(`==========================================`)
    console.log(`You won ${playerScore} to ${computerScore}`)
  } else if (playerScore < computerScore) {
    console.log(`==========================================`)
    console.log(`You lost ${computerScore} to ${playerScore}`)
  } else {
    console.log(`==========================================`)
    console.log(`You tied ${playerScore} to ${computerScore}`)
  }
}

function start() {
  numberOfGamesToPlay = prompt('How many games do you want to play?')
  game()
}
playButton.addEventListener('click', start)
