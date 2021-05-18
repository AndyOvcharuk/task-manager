// Pseudo below

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let myTasks = ["Pay car tax", "Pay insurance"];

let a = "\n Welcome to your task manager ";
let b = "\n To CHECK all Tasks press         1";
let c = "\n To ADD a new Task press          2";
let d = "\n To DELETE a Task press           3";
let e = "\n To mark a Task as DONE press     4";
let f = "\n To Exit the task manager press   5 \n";

const myTaskMenu = () => {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);

    rl.question("Please enter a number of the menu: ", (input) => {
        if (input == 1) {
            console.log(myTasks);
            myTaskMenu();
        } if (input == 2) {
            rl.question("Add your new Task now", (answer) => {
                myTasks.push(answer);
                console.log("New Task ADDED on the list");
                myTaskMenu();
            });
        } if (input == 3) {
            alert("Are you sure you want to delete this Task?");
            rl.question("Which task do you wish to DELETE?", (answer) => {
                // press "Yes" to confirm function
                removetask(answer);
                console.log("New Task DELETED from the list");
                myTaskMenu();
            });
        } if (input == 4) {
            rl.question("Which task do you wish to DELETE?", (answer) => {
                marktask(answer);
                console.log("This task is done");
                myTaskMenu();
            });
        } if (input == 5) {
            console.log("Have a nice day");
            rl.close();
        } else {
            console.log("Wrong command. Please chose again from the menu from 1 to 5");
            myTaskMenu();
        }
    });
};




// Pseudo

// Step 1
// Print
// "Welcome to your task manager, Press:
// 1. to see all your tasks
// 2. to add a task
// 3. to delete a task
// 4. to mark a task as done
// 5. to Exit the task manager"

// Step 2

// If (input == 1) {
//     console.log(myTasks)
//     return to the menu
// } if (input == 2) {
//     myTasks.push(xxxxxx)
//     return to the menu
// } if (input == 3) {
//     alert("Are you sure you want to delete this Task");
//     press "Yes" to confirm function
//         delete index myTasks
//     press "No" and return to the menu
// } if (input == 4) {
//     mark a task as done - add DONE to index myTasks
//     return to the menu
// } if (input == 5) {
//     console.log("Have a nice day");
//     Exit the task manager
// } else {
//    console.log("Wrong command. Please chose again from the menu")
//    myTaskMenu()
// }
