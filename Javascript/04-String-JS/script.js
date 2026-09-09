// let username = "Tech";

// create a variable, message, that stores the string: "You have three noticfications".

// let message = "You have three notifications";

// console.log(message + ", " + username + "!");

// assignment 1 - Create a variable , messageToUser, that contains the message we have logged

// let messageToUser = message + ", " + username + "!";
// console.log(messageToUser);


// Assignment 2 - Create two variables, name and greeting. The name variable should store your name.
// and the greeting variable should store e.g ("Hi, my name is ").

// Create a third variable, myGreeting, that concatenates two strings
// Log myGreeting to the console.

// let name = "Tech";
// let greeting = "Hi, my name is ";

// let myGreeting = greeting + name;

// console.log(myGreeting);


// // Strings vs Numbers
// // 9
// console.log(4+5);
// // 24
// console.log("2" + "4");
// // 51
// console.log("5" + 1);
// // 100100
// console.log(100 + "100");

// Assignment 3 - Grab the welcome-el para and store it in a variable called welcomeEl
// create two variables name & greeting that contains your name and the greeting we want to render on the page
// render the welcome message using welcomeEl.innertext.

let welcomeEl = document.getElementById("welcome-el");

let name = "Tech";
let greeting = "Hi, Welcome back ";
 
welcomeEl.innerText = greeting + name;

// Assignment 4 - Add an emoji at the end!
// WRITE CODE BELOW;
// Hint: count = count+1;

let emoji = "👋";

// welcomeEl.innerText = welcomeEl.innerText + " " + emoji;   //long way to do this

// short way to do this is to use "+=";

welcomeEl.innerText += emoji;