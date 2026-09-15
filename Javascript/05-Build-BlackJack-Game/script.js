// Create two variables, firstCard and secondCard.
// Set their values to random number between 2-11.

let firstCard = 10;
let secondCard = 10;



// Create a variable, sum, and set it up to the sum of the two cards.

let sum = firstCard + secondCard;

if(sum < 21){
    console.log("Do you want to draw a new card?");
}else if(sum === 21){
    console.log("Wohoo! You have got BlackJack!");
}else if(sum > 21){
    console.log("You're out of the game!");
}

