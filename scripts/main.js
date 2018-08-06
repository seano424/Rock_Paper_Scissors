
let playerScore = 0;
let computerScore = 0;

function game(){
  while(playerScore < 5 && computerScore < 5){
    let computerSelection = computerPlay();
    let playerChoice = prompt('Choose Your Weapon: Rock | Paper | Scissors');
    let playerSelection = playerChoice.toLowerCase();
    playRound(playerSelection, computerSelection);
    console.log(playerScore);
    console.log(computerScore);
    if(playerScore == 5) {
      console.log('Player One Wins! 👻');
    } else if(computerScore == 5){
      console.log('Computer has defeated you. You lose. 🎃');
    }
  }
}


//Play Round Function
function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    console.log('This round is a tie');
  } else if(playerSelection === 'rock') {
    if(computerSelection === 'paper'){
      console.log('Paper beats rock. Computer wins.');
      return computerScore += 1;
    } else if( computerSelection === 'scissors') {
      console.log('Rock beats scissors. You win.');
      return playerScore += 1;
    }
  } else if(playerSelection === 'paper'){
    if(computerSelection === 'scissors') {
      console.log('Scissors beats paper. Computer wins.');
      return computerScore += 1;
    } else if(computerSelection === 'rock') {
      console.log('Paper beats rock. You win.');
      return playerScore += 1;
    }
  } else if(playerSelection === 'scissors'){
    if(computerSelection === 'rock'){
      console.log('Rock beats scissors. Computer wins.');
      return computerScore += 1;
    } else if(computerSelection === 'paper'){
      console.log('Scissors beats paper. You win.');
      return playerScore += 1;
    }
  }
}

//Computer Random Rock Paper or Scissors Function
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 10)
  if(randomNumber <= 3) {
    return 'rock';
  } else if(randomNumber <= 6) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

//Player Random Rock Paper or Scissors Function
function playerPlay() {
  let randomNumber = Math.floor(Math.random() * 10)
  if(randomNumber <= 3) {
    return 'rock';
  } else if(randomNumber <= 6) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

game();
