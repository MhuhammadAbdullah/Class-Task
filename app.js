// QUESTION: 1

// function showDateTime() {
//     var now = new Date();
//     var dateTimeString = now.toLocaleString();
//     document.write("Current Date and Time: " + dateTimeString);
// }

// showDateTime();


// QUESTION: 2

// function greeting() {
//     var firstName = prompt("Enter your first name")
//     var laststName = prompt("Enter your last name")
//     document.write("Welcome! : " + firstName + " "
//         + laststName)
// }

// greeting()


// QUESTION: 3

// function addTwoNumbers() {
//     var num1 = parseFloat(prompt("Enter a number:"));
//     var num2 = parseFloat(prompt("Enter a number:"));

//     var sum = num1 + num2;

//     document.write(num1 + " + " + num2 + " = " + sum);
// }

// addTwoNumbers();

// QUESTION: 1

// function showDateTime() {
//     var now = new Date();
//     var dateTimeString = now.toLocaleString();
//     document.write("<h1>" + dateTimeString + "</h1>");
// }

// showDateTime();


// function tellTime() {
//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();
//     var theSec = now.getSeconds();
//     document.write("Current time: " + theHr + ":" + theMin + ":" + theSec);
// }
// tellTime();




// function tellTime() {
//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();
//     var theSec = now.getSeconds();


//     if (theHr < 10) {
//         theHr = "0" + theHr;
//     }

//     if (theMin < 10) {
//         theMin = "0" + theMin;
//     }

//     if (theSec < 10) {
//         theSec = "0" + theSec;
//     }

//     document.write("<h1>" + theHr + ":" + theMin + ":" + theSec + "</h1>");
// }
// tellTime();



// function tellTime() {
//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();
//     var theSec = now.getSeconds();

//     var ampm = theHr >= 12 ? 'PM' : 'AM';

//     theHr = theHr % 12;
//     theHr = theHr ? theHr : 12;
//     if (theHr < 10) {
//         theHr = "0" + theHr;
//     }
//     if (theMin < 10) {
//         theMin = "0" + theMin;
//     }
//     if (theSec < 10) {
//         theSec = "0" + theSec;
//     }

//     document.write("<h1>" + theHr + ":" + theMin + ":" + theSec + " " + ampm + "</h1>");
// }
// tellTime();


