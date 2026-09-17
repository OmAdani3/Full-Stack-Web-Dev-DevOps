// Create two variables, firstCard and secondCard.
// Set their values to random number between 2-11.

let firstCard = 10;
let secondCard = 11;

// Create a variable, sum, and set it up to the sum of the two cards.

let sum = firstCard + secondCard;

let hasBlackJack = false;

// Write the conditional according to these rules.

// if less than or equal to 20 --> "Do you want to draw a new card?"
// else if exactly 21 --> "Wooho! You've got Blackjack!"
// else --> "You're out of the game!"

// 1. Create a variable called isAlive and assign it to true

let isAlive = true;

// 2. Flip its value to false in the appropriate code block


// ----- Another Assignment -----
// 1. Declare a variable called message and assign its value to an empty string.
let message = "";

// 2. Reassign the message variable to the string we're logging out.

if(sum <= 20){
    // console.log("Do you want to draw a new card?");
    message = "Do you want to draw a new card?"
}else if(sum === 21){
    // console.log("Wooho! You've got Blackjack!");
    message = "Wooho! You've got Blackjack!";
    hasBlackJack = true;
}else{
    // console.log("You're out of the game!");
    message = "You're out of the game!"
    isAlive = false;
}


// 3. Log it out

console.log(message);

// CASH OUT!!
// console.log(hasBlackJack);
// console.log(isAlive);



// ----------- Assignment -2

// Booleans 

// console.log(4 === 3);   //False
// console.log(5>2);       // True
// console.log(12>12);     //false
// console.log(3<0);       //false
// console.log(3 >= 3);    // true
// console.log(11 <= 11);  // true
// console.log(3 >= 2);    //false
