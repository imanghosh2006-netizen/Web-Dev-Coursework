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