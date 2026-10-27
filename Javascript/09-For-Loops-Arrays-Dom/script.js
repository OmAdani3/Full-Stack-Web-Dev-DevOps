let sentence = ["Hello", "my","name", "is", "Techi" ];
let greetingEl = document.getElementById("greeting-el");

// Render out this sentence in greetingEl paragraph using only for loop and .textcontent;

for(let i = 0;i<sentence.length; i++){
    greetingEl.textContent +=  sentence[i] + " " ;
    console.log(greetingEl);
}