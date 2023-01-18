let myName = prompt("What is your name?");

let time = prompt("What hour of the day is it? (0-23)");
let greeting;

if(time <= 11) {
    greeting = "Good Morning " + myName + "!";
} else if (time <= 18) {
    greeting = "Good Afternoon " + myName + "!"
} else if (time < 24) {
    greeting = "Good Evening " + myName + "!"
} else {
    greeting = "That is not a valid answer, please try again"
}


let feedback1 = prompt("Where did you hear about us?")

let message; 

if (feedback1.toLowerCase() == "facebook") {
    message = "Thank you for your choosing Facebook!";
} else if (feedback1.toLowerCase() == "instagram") {
    message = "Thank you for choosing Instagram!";
} else if (feedback1.toLowerCase() == "twitter") {
    message = "Thank you for choosing Twitter!";
} else if (feedback1.toLowerCase() == "autotrader") {
    message = "Thank you for your feedback!";
}


let text;
if (confirm("Accept Cookies?") == true) {
  text = "Accepted";
} else {
  text = "Nevermind! Try Again" + location.reload();
}
console.log(message);

document.write(message);

console.log(text);





