const API_URL = 'https://your-api-url.com';

function play(playerMove, opponent) {
  const endpoint = `/app/play/${playerMove}/${opponent}`;
  return fetch(API_URL + endpoint)
    .then(response => response.json());
}

function playRPS(playerMove) {
  const endpoint = `/app/play/rps/${playerMove}`;
  return fetch(API_URL + endpoint)
    .then(response => response.json());
}

function playRPSLS(playerMove) {
  const endpoint = `/app/play/rpsls/${playerMove}`;
  return fetch(API_URL + endpoint)
    .then(response => response.json());
}

function reset() {
  document.getElementById('result').innerHTML = '';
  document.getElementById('player-select').style.display = 'block';
}

document.querySelectorAll('#player-select button').forEach(button => {
  button.addEventListener('click', async () => {
    document.getElementById('player-select').style.display = 'none';
    const opponent = await play('random');
    const result = await playRPSLS(button.id, opponent.move);
    document.getElementById('result').innerHTML = result;
  });
});

document.getElementById('reset').addEventListener('click', reset);
