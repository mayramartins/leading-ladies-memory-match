/*----- constants -----*/
const transitionTime = 1000;

/*----- state variables -----*/
let firstCardPos; 
let secondCardPos;
let firstCardDom;
let secondCardDom;
let cards;
let nclicks;
let seconds;
let interval;

/*----- cached elements  -----*/
const cardsEls = document.querySelectorAll('.flip-card-inner'); 
const cardsParentsEls = document.querySelectorAll('.flip-card');
const cardsContainerEl = document.querySelector('#board');
const resetBtn = document.querySelector('#reset-btn');
const nclicksDom = document.querySelector('#nclicks');
const secondsDom = document.querySelector('#seconds');


/*----- event listeners -----*/
cardsEls.forEach((card) => card.addEventListener('click', flipCard)); 
resetBtn.addEventListener('click', resetGame);

// *----- functions -----*/
intitialize();

function intitialize() {
  randomizeCardsDom();
  cards = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  nclicks = 0;
  seconds = 0;

  render();
  randomizeCardsDom();
}

function resetGame() {
  cards = cards.map(() => [0, 0, 0, 0]);
  nclicks = 0;
  seconds = 0;
  render();
  randomizeCardsDom();
}

function randomizeCardsDom() {

  const divsArray = Array.from(cardsParentsEls);
  divsArray.sort(() => Math.random() - 0.5);
  divsArray.forEach((div) => cardsContainerEl.appendChild(div));
}

function updateCards(row, col, newValue) {
  cards[row][col] = newValue;
  render();
}

function flipCard(e) {

  let selectedCard = e.currentTarget;
  const id = selectedCard.getAttribute('id');
  const row = id.charAt(3); 
  const col = id.charAt(1); 

  nclicks = nclicks + 1;
  if (nclicks == 1) {
    interval = setInterval(() => {
      seconds = seconds + 1;
      render();
    }, transitionTime);
  }

  if (firstCardDom == undefined) {
    firstCardPos = [row, col];
    firstCardDom = selectedCard;
    updateCards(row, col, 1);
    
  } else if (secondCardDom == undefined) {
    secondCardPos = [row, col];
    secondCardDom = selectedCard;
    updateCards(row, col, 1);

    setTimeout(() => {
      let firstImage = firstCardDom.children[0].children[0].getAttribute('src');
      let secondImage =
        secondCardDom.children[0].children[0].getAttribute('src');
      if (firstImage == secondImage) {

      } else {
        updateCards(firstCardPos[0], firstCardPos[1], 0);
        updateCards(secondCardPos[0], secondCardPos[1], 0);
      
      }
      
      firstCardDom = undefined;
      secondCardDom = undefined;
    }, transitionTime);
  }
}

function render() {
  cardsEls.forEach((card) => {
    let domValue = 0;
    if (card.style.transform == '') domValue = 0;
    else domValue = 1;
    const id = card.getAttribute('id');
    const row = id.charAt(3);
    const col = id.charAt(1);
    if (cards[row][col] != domValue) {
      let newValue;
      if (cards[row][col] == 0) {
        newValue = '';
      } else {
        newValue = 'rotateY(180deg)';
      }

      card.style.transform = newValue;
    }
  });

  nclicksDom.innerHTML = nclicks;
  secondsDom.innerHTML = seconds + 's'

  let gameFinished = true;
  cards.forEach(lines => {
    lines.forEach(cel => {
      if(cel == 0) gameFinished = false;
    });
  })
  if (gameFinished == true) {
    resetBtn.style.visibility = 'visible';
    clearInterval(interval);
  } else {
    resetBtn.style.visibility = 'hidden';
  }
}