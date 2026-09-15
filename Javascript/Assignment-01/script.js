// Assignment - 01

// Create two variables FirstName and LastName
// let firstName = "Tech";
// let lastName = "Gamer";

// Concatenate two variables into a third variable called fullName
// let fullName = firstName + " " + lastName;


// log fullName to the console.

// console.log(fullName);


// ------- Assignment - 02

// let name = "Linda";
// let greeting = "Hi there";

// Create a function that logs out "Hi there, Linda!" when called

// function greet(){
//     let greeTing = greeting +", "+ name +"!";
//     console.log(greeTing);
// }

// greet();


// ------------- Assignment - 03
// let myPoints = 3;

// Create two functions, add3Points() and remove1Point(), and have them
// Add/Remove points to/from the mypoints variable.

// function add3Points(){
//     myPoints +=3;
// }

// function remove1Point(){
//     myPoints--;
// }

// add3Points();
// add3Points();
// add3Points();

// remove1Point();
// remove1Point();

// call the functions so that the line below logs out 10.
// console.log(myPoints);


// --------------------Assignment - 04

// Try to predict what each of the lines will log out.

// console.log("2" + 2);    //22
// console.log(11+7);       // 18
// console.log(6 + "5");    //65
// console.log("My Points " + 5 + 9);     // My Points 14
// console.log(2+2)        //4
// console.log("11" + 14);         // 1114



// ------------------Assignment - 05

// when the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragrapgh
// that has the id="error";


// let err = document.getElementById("error") 

// function purchase(){
//     error.textContent = "Something went wrong, please try again";
// }




// --------------------------ASIGNMENT - 06


let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let total = document.getElementById("sum-el");

// Create four functions: add(), subtract(), multiply(), divide();
// Call the correct function when the user clicks on one of the buttons.
// Perform the given calculation using num1 and num2
// Render the result of the calculation using num1 & num2

function add(){
    let sum = num1 +num2;
    total.textContent = "Sum:" + sum;
}

function subtract(){
    let sum = num1 - num2;
    total.textContent = "Sum:" + sum;
}

function multiply(){
    let sum = num1 * num2;
    total.textContent = "Sum:" + sum;
}

function divide(){
    let sum = num1 % num2;
    total.textContent = "Sum:" + sum;
}


// E.g. if the user clicks on the "Plus" button,you should render
// "Sum: 10" (since 8+2 = 10) inside the paragraph with id="sum-el";
