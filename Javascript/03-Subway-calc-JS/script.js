// Initialize the count 0
// listen for clicks on the increment
// increment the count variable when the button is clicked.

// camelCase
let countEl = document.getElementById("count-el");     //pass in argument

let count = 0;

function increment(){
    count++;
    countEl.textContent = count;
    console.log(count);
}

// let cntSave = document.getElementById("count-save");
// function save(){
//     cntSave.innerText = count
//     console.log(count);
// }


// Strings -  assignment ---
// Grab the save-el para and save it in a variable called saveEl.

let saveEl = document.getElementById("save-el");

function save(){
    let incrementNo = count + " - ";
//2. create a variable that contains both the count and the dash separator, i.e "12 -"
    
//3. Render the variable in the savEl using innertext.
    saveEl.textContent += incrementNo;

// solution

    countEl.textContent = 0;
    count = 0;


    // NB: make sure to not delete the existing content on the para.
}


// do it yourself try to reset the count to 0 after saving the number

// Sol 1 - created a btn to reset the counter;;-- myself

// let resetEl = document.getElementById("reset-btn");

// function reset(){
//     countEl.textContent = 0;
//     count = 0;
//     console.log(count);

// }
    
// it does not work properly as it resets the count but when you press increment again it starts the count from last saved count;
// need to change that --
// Update --- if i do the count = 0; it will reset the count 
// this is a basic solution


// Update the video solution says to do it in the Save function;
// need to be very specific with js :();