# Class-Task

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



function tellTime() {
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    var theSec = now.getSeconds();

    var ampm = theHr >= 12 ? 'PM' : 'AM';

    theHr = theHr % 12;
    theHr = theHr ? theHr : 12;
    if (theHr < 10) {
        theHr = "0" + theHr;
    }
    if (theMin < 10) {
        theMin = "0" + theMin;
    }
    if (theSec < 10) {
        theSec = "0" + theSec;
    }

    document.write("<h1>" + theHr + ":" + theMin + ":" + theSec + " " + ampm + "</h1>");
}
tellTime();
