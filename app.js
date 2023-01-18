let myName = prompt("What is your name?");

let time = prompt("What hour of the day is it? (0-23)");
let message;

if(time <= 11) {
    message = "Good Morning " + myName + "!";
} else if (time <= 18) {
    message = "Good Afternoon " + myName + "!"
} else if (time < 24) {
    message = "Good Evening " + myName + "!"
} else {
    message = "That is not a valid answer, please try again"
}


let feedback1 = prompt("Where did you hear about us?")

if (feedback1 = "Facebook ") {
    message = "Thank you for your choosing Facebook!";
} else if (feedback1 = "Instagram ") {
    message = "Thank you for choosing Instagram!";
} else if (feedback1 = "Twitter ") {
    message = "Thank you for choosing Twitter!";
} else if (feedback1 = "Autotrader ") {
    message = "Thank you for your feedback!";
}


console.log(message);

document.write(message);

