const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");

const de1 = document.querySelector("#de1");
const de2 = document.querySelector("#de2");

let player1 = {
  total: 0,
  counter: 0,
};

let player2 = {
  total: 0,
  counter: 0,
};

function deLance(button, display, player, storageKey) {
  player.counter += 1;
  let score = Math.ceil(Math.random() * 10);
  player.total += score;
  display.textContent = player.total;
  if (player.counter === 5) {
    button.setAttribute("disabled", "");
    localStorage.setItem(storageKey, player.total)
  }
}

button1.addEventListener("click", () => deLance(button1, de1, player1, 'player1'));
button2.addEventListener("click", () => deLance(button2, de2, player2, 'player2'));
