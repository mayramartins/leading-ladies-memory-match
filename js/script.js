// Set the Lets Play button to initialize the game
// Initialize the game initializes with 16 cards unrevealed
// NOT SURE Initialize timer to count up from 0:00 to 01:30s

// If card 1 and card 2 don’t match, both cards turn into unrevealed within 1 second
// The player can flip other cards until finds a match
// If it's a match, both cards set in the screen freezed
// Other cards are clickable until finds all the matches 
// While the number of clicks is counting the player’s performance 
// While the timer is running
// When the player finds all the matching cards message is displayed: You win the game! Refresh to play again
// End of the game

const divsArray = Array.from(divs);
divsArray.sort(() => Math.random() - 0.5);
const container = document.querySelector('#board');
divsArray.forEach(div => container.appendChild(div));

/*----- constants -----*/


/*----- state variables -----*/
//let matchedCards = 0;
let firstCard, secondCard; //Set firstCard and secondCard with undefined value
let matches;


/*----- cached elements  -----*/
// Get the cards to be clicked by the player
// Get all my divs from html using the parameter flipcardinner
// search in all divs and save all divs with class fli-card-inner
//1
const cards = document.querySelectorAll('.flip-card-inner');

  
  
/*----- event listeners -----*/
  ///board.forEach.addEventListener('click', flipCard);
  // Configure the event listener to listening to the click event and invoke the flipcard
cards.forEach(card => {
 card.addEventListener('click', flipCard);
});


// *----- functions -----*/
// List of all functions  

intitialize ();

function intitialize() {

}

function render(selectedCard) {
  selectedCard.style.transform = 'rotateY(180deg)';
  
  setTimeout(() => {
    let firstImage = firstCard.children[0].children[0].getAttribute('src');
    let secondImage = secondCard.children[0].children[0].getAttribute('src');

    if (firstImage == secondImage) {
      console.log('Its a Match');
    } else {
      firstCard.style.transform = '';
      secondCard.style.transform = '';
      console.log('Is Not a Match')
    }

  firstCard = undefined;
  secondCard = undefined;

}, 1000);
} 

function flipCard(e) {
  console.log('click');




// The player clicks on the first card and first card is selectedflips the first card revealing the image
let selectedCard = e.currentTarget;
  if (firstCard == undefined) {
    firstCard = selectedCard;
    selectedCard.style.transform = 'rotateY(180deg)';
// The player clicks on the second card and the second card is selecionado 
  } else if (secondCard == undefined) {
    secondCard = selectedCard;
    selectedCard.style.transform = 'rotateY(180deg)';
    
    setTimeout(() => {
      let firstImage = firstCard.children[0].children[0].getAttribute('src');
      let secondImage = secondCard.children[0].children[0].getAttribute('src');
        if (firstImage == secondImage) {
          console.log('Its a Match');
        } else {
          firstCard.style.transform = '';
          secondCard.style.transform = '';
          console.log('Is Not a Match')
        }
        //reset firstCard and secondCard
        firstCard = undefined;
        secondCard = undefined;
        
      }, 1000);
    } 
  }
  
// function number of clicks


  