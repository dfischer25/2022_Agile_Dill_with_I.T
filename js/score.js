let playerOne = 0;
let playerTwo = 0;
let playerOneLabel = 'Player 1';
let playerTwoLabel = 'Player 2';
let server = 1;

window.onload = (event) => {
  document.getElementById('playerOneLabel').innerHTML =
    playerOneLabel + ' - SERVING';
  document.getElementById('playerOneLabel').style.textDecoration = 'underline';
};

function firstPlayer() {
  if (server == 1) {
    playerOne++;
    document.getElementById('playerOneScore').innerHTML = playerOne;
  } else {
    server = 1;
    document.getElementById('playerOneLabel').innerHTML =
      playerOneLabel + ' - SERVING';
    document.getElementById('playerOneLabel').style.textDecoration =
      'underline';
    document.getElementById('playerTwoLabel').innerHTML = playerTwoLabel;
    document.getElementById('playerTwoLabel').style.textDecoration = '';
  }
}

function secondPlayer() {
  if (server == 2) {
    playerTwo++;
    document.getElementById('playerTwoScore').innerHTML = playerTwo;
  } else {
    server = 2;
    document.getElementById('playerTwoLabel').innerHTML =
      playerTwoLabel + ' - SERVING';
    document.getElementById('playerTwoLabel').style.textDecoration =
      'underline';
    document.getElementById('playerOneLabel').innerHTML = playerOneLabel;
    document.getElementById('playerOneLabel').style.textDecoration = '';
  }
}

function endGame() {
  if (playerOne == playerTwo) {
    alert('Tie Game!');
  } else if (playerOne > playerTwo) {
    alert('Player One Wins!');
  } else {
    alert('Player Two Wins!');
  }
  window.location.reload();
}
