// Arrays -- Ordered Lists of items

let featuredPost = [
    "Check out my Netflix clone",
    "Here's the code for my project",
    "I've just relaunched my portfolio"
]

// Create an array that lists your i.e experience, skills, career, education or similar 
// The items of the array should be strings

let experience = [
    "I've got 2 years of expereince in DEO",
    "In a company name ALtos",
    "I've got 6 months of experience in another department"
]

// console.log(experience[0]);
// console.log(experience[1]);
// console.log(experience[2]);



// 1 -> Create an that describes yourself. Use the three primitive data types that you have learned 
// It should contain your name(String), your age (number), and whether you like pizza(boolean).

let arr = [
    "Om",
      24,
    true
]

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);


// 2 --> Adding and removing from the arrays.

let cards = [7,4];

cards.push(6);

console.log(cards);

// Exercise - 1
// Push the newMessage to the messages array, and then log out the array.

let messages = [
    "Hey, how's it going?",
    "I'm fine, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!";

messages.push(newMessage);

console.log(messages);

messages.pop();

console.log(messages);