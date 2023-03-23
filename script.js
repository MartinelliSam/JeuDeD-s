function randomDice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function nextPlayer(){
  if (gameOn) {
  currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
  roundScore              = 0;
  scoreRound0.textContent = 0;
  scoreRound1.textContent = 0;
  document.querySelector('#pseudo-player-0').classList.toggle('bold');
  document.querySelector('#pseudo-player-1').classList.toggle('bold');
  }
};

function resultDice() {
  if (gameOn) {
    dice.classList.add('spin');
    let result  = randomDice(1, 6);
    dice.src    = `./images/${result}.jpg`;
    if (result !== 1) {
      roundScore += result;
      document.querySelector('#round-player-' + currentPlayer).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
};

function holdDice() {
  if(gameOn){
    globalScore[currentPlayer] += roundScore;
    document.querySelector('#global-player-' + currentPlayer).textContent = globalScore[currentPlayer];
    document.querySelector('#round-player-' + currentPlayer).textContent  = 0;
  } else {
    nextPlayer();
  }

  if (globalScore[currentPlayer] >= 100) {
    document.querySelector('#global-player-' + currentPlayer).textContent = 'Yay!';
    document.querySelector('#pseudo-player-0').removeClass();
    document.querySelector('#pseudo-player-1').removeClass();
    gameOn                  = false;
    rollDice.style.display  = 'none';
    dice.style.display      = 'none';
    hold.style.display      = 'none';
  }
};

let roundScore, currentPlayer, globalScore, gameOn;
let scoreGlobal0  = document.querySelector('#global-player-0');
let scoreGlobal1  = document.querySelector('#global-player-1');
let scoreRound0   = document.querySelector('#round-player-0');
let scoreRound1   = document.querySelector('#round-player-1');
let newGame       = document.querySelector('#new-game');
let hold          = document.querySelector('#hold');
let rollDice      = document.querySelector('#roll-dice');
let dice          = document.querySelector('.dice');


newGame.addEventListener('click', () => {
  dice.removeAttribute('class');
  globalScore               = [0,0];
  roundScore                = 0;
  gameOn                    = true;
  currentPlayer             = 0;
  scoreGlobal0.textContent  = 0;
  scoreGlobal1.textContent  = 0;
  scoreRound0.textContent   = 0;
  scoreRound1.textContent   = 0;
  hold.classList.remove('hidden');      
  rollDice.classList.remove('hidden');   
  document.querySelector('#pseudo-player-' + currentPlayer).classList.toggle('bold');
});

rollDice.addEventListener('click', () => {
  if (gameOn) {
    if (dice.classList.contains('spin')) {
      dice.classList = '';
      } else {
      dice.classList.add('spin');
      resultDice();
    }
  }
});

hold.addEventListener('click', () => {
  if (gameOn){
  holdDice();
  nextPlayer();
  }
});