const player1Score = localStorage.getItem('player1');

const score1 = document.querySelector('#score1');

score1.textContent = player1Score;

const player2Score = localStorage.getItem('player2');

const score2 = document.querySelector('#score2');

score2.textContent = player2Score;

const winner = document.querySelector('#winner');

if (player1Score > player2Score) {
    winner.textContent = 'Joueur 1 gagne ! 🥇 👏🏻';
} else if (player2Score > player1Score) {
    winner.textContent = 'Joueur 2 gagne ! 🥇 👏🏻 ';
} else {
    winner.textContent = 'Égalité !'
}