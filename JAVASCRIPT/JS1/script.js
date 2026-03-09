alert("Hello World");

console.log("This is a message in the console.");

// var a=prompt("Enter a number:");
// console.log("You entered: " + a);

var isTrue = confirm("Do You wanna close this page?")
if(isTrue){
        window.close();
    }
    else{
        alert("You chose to stay on the page.");
    }

document.title = "I am a new title"; // This line changes the title of the webpage.

document.body.style.backgroundColor = "lightblue"; // This line changes the background color of the webpage to light blue.
