/*----- constants -----*/
const transitionTime = 1000;

/*----- state variables -----*/
let firstCardPos; //Set firstCard and secondCard with undefined value
let secondCardPos;
let firstCardDom;
let secondCardDom;
let cards;

/*----- cached elements  -----*/
const cardsEls = document.querySelectorAll('.flip-card-inner'); // cahce all my divs from html using the parameter flipcardinner
const cardsParentsEls = document.querySelectorAll('.flip-card');
const cardsContainerEl = document.querySelector('#board');
const playBtn = document.querySelector('#play-btn');
const resetBtn = document.querySelector('#reset-btn');

/*----- event listeners -----*/
cardsEls.forEach((card) => card.addEventListener("click", flipCard)); // Configure the event listener to listening to the click event and invoke the flipcard
playBtn.addEventListener('click', playBtn);
resetBtn.addEventListener("click", resetGame);

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

  render();
  randomizeCardsDom();
}

function resetGame() {
  cards = cards.map(() => [0, 0, 0, 0]);
  render();
}

function randomizeCardsDom() {
  // randomize the cards
  const divsArray = Array.from(cardsParentsEls);
  divsArray.sort(() => Math.random() - 0.5);
  divsArray.forEach((div) => cardsContainerEl.appendChild(div));
}

function updateCards(row, col, newValue) {
  cards[row][col] = newValue;
  render();
}

function flipCard(e) {
  // The player clicks on the first card and first card is selected flips the first card revealing the image
  let selectedCard = e.currentTarget;
  const id = selectedCard.getAttribute("id");
  const row = id.charAt(3); // get the fourth letter of the row
  const col = id.charAt(1); // get the second letter of the column

  if (firstCardDom == undefined) {
    firstCardPos = [row, col];
    firstCardDom = selectedCard;
    updateCards(row, col, 1);
    // The player clicks on the second card and the second card is selected
  } else if (secondCardDom == undefined) {
    secondCardPos = [row, col];
    secondCardDom = selectedCard;
    updateCards(row, col, 1);

    setTimeout(() => {
      let firstImage = firstCardDom.children[0].children[0].getAttribute("src");
      let secondImage =
        secondCardDom.children[0].children[0].getAttribute("src");
      if (firstImage == secondImage) {
        console.log("Its a Match");
      } else {
        updateCards(firstCardPos[0], firstCardPos[1], 0);
        updateCards(secondCardPos[0], secondCardPos[1], 0);
        console.log("Is Not a Match");
      }
      //reset firstCard and secondCard
      firstCardDom = undefined;
      secondCardDom = undefined;
    }, transitionTime);
  }
}

function render() {
  cardsEls.forEach((card) => {
    let domValue = 0;
    if (card.style.transform == "") domValue = 0;
    else domValue = 1;
    const id = card.getAttribute("id");
    const row = id.charAt(3);
    const col = id.charAt(1);
    if (cards[row][col] != domValue) {
      let newValue;
      if (cards[row][col] == 0) {
        newValue = "";
      } else {
        newValue = "rotateY(180deg)";
      }

      card.style.transform = newValue;
    }
  });
}
