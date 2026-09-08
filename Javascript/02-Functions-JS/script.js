// Setting up the race
// function countDown(){
// console.log(5);
// console.log(4);
// console.log(3);
// console.log(2);
// console.log(1);
// }

// countDown();

// GO
// Players are running in the race
// Race is Finished!

// Get ready for a new race.
// countDown();

// assignment 1 -- print 42 while calling a function name whatever you want the function

// function called(){
//     console.log(42);
// }

// called();

// assignement 2 -- create a function that logs the sum of all the lap times.
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// let sum = 0;

// function sumOfLaps(){
//     sum = lap1+lap2+lap3;
//     console.log(sum);   
// }

// sumOfLaps();



// Assignment 3 -- create a function that increments the variable lapscompleted with one
// Run it three times.
// let lapscompleted = 0;
// function incremented(){
//     lapscompleted++;
//     console.log(lapscompleted);
// }

// incremented(lapscompleted);

// this only increments it one time we need to make it increment 3 times
// let lapscompleted =0;

// function threetimes(){
//     for(let i = 0; i<3; i++){
//         lapscompleted++;
//         console.log(lapscompleted);
//     }
// }

// threetimes(lapscompleted);

// this is one way of doing this by using a loop the other is calling the functon 3 times as we did below.

let lapscompleted = 0;
function incremented(){
    lapscompleted++;
}

incremented();
incremented();
incremented();  
console.log(lapscompleted);