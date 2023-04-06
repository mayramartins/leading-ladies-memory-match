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


/*----- constants -----*/
const images = [
  'url(imgs/img1.png',
  'url(imgs/img2.png',
  'url(imgs/img3.png',
  'url(imgs/img4.png',
  'url(imgs/img5.png',
  'url(imgs/img6.png',
  'url(imgs/img7.png',
  'url(imgs/img8.png',
]


/*----- state variables -----*/
let matchedCards = 0;
let firstCard, secondCard; //Set firstCard and secondCard with undefined value

/*----- cached elements  -----*/
// Get the cards to be clicked by the player
const cards = document.querySelectorAll('.flip-card-inner');
  
  
  
  
/*----- event listeners -----*/
  ///board.forEach.addEventListener('click', flipCard);
  cards.forEach(card => {
    card.addEventListener('click', flipCard);
  });
  
  
  /*----- functions -----*/
  //intitialize();
  // function initialize {
    //}
    
    function flipCard(e) {
    
      // The player clicks on the first card and first card is selectedflips the first card revealing the image
      let selectedCard = e.currentTarget;
      if (firstCard == undefined) {
        firstCard = selectedCard;
        selectedCard.style.transform = 'rotateY(180deg)';
        // The player clicks on the second card and the second card is selecionado 
      } else if (secondCard == undefined) {

        secondCard = selectedCard;
        selectedCard.style.transform = 'rotateY(180deg)';
      } else {
        let firstImage = firstCard.children[0].children[0].getAttribute('src');
        let secondImage = secondCard.children[0].children[0].getAttribute('src');
        if (firstImage == secondImage) {
          console.log('Its a Match');
        } else {
          console.log('Is Not a Match')
        }
        firstCard.style.transform = '';
        secondCard.style.transform = '';

        firstCard = undefined;
        secondCard = undefined;
      }
    }





























      
//       //selectedCard.parentElement.parentElement.classList.add('flip-card-flipped');


//       //firstCard = selectedCard;
//       //secondCard = selectedCard
      
//       if (selectedCard === firstCard) {
//         selectedCard.classList.toggle('flip');
//         console.log(selectedCard);

//         if(!firstCard) {
//           return firstCard = selectedCard;
      
//         }
      
//       } else if (!secondCard) {
//     secondCard = selectedCard
//   }

// }

//function macthedCard() {
  
//}

//function letsPlayBtn() {

//}

// render()

//function render() {
// renderBoard();
// renderNumberOfClicks();
//}


