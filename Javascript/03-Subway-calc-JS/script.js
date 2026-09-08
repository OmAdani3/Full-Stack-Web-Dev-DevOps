// Initialize the count 0
// listen for clicks on the increment
// increment the count variable when the button is clicked.

// camelCase
let countEl = document.getElementById("count-el");     //pass in argument

let count = 0;

function increment(){
    count++;
    countEl.innerText = count;
    console.log(count);
}

let cntSave = document.getElementById("count-save");
function save(){
    cntSave.innerText = count
    console.log(count);
}

