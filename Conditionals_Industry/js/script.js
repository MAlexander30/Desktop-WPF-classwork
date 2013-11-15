/**
 * Created by marquitaalexander on 11/15/13.
 */

//if statement
var xBoxes = 15;
//if their is enough Devices then it will print "Get to work"
//if their is more devices then people
if(xBoxes > 10){
    //its true if there is more devices then people
    console.log("Get to work");
}

//else if
var xBoxes = 20;
var People = 18;
var Cabinet = 12;
//if if there is more Devices then People it will read "Time to play on Black Ops"
if(xBoxes > People){
    console.log("Time to play Black Ops");
}else if(Cabinet > xBoxes){
    //if their is more Cabinets then xBox then it will read "Look like we will have to read a book"
    console.log("Looks like we will have to read a book")
}
//else block
var xBoxes = 17;
var People = 25;
if(People > xBoxes){
    //only true if there is less people to a xBox
    console.log("Time to play");
}else{
    //if false it will read "Read a book"
    console.log("Read a book")
}

//ternary
var xBoxes = 12;
var People;
People = (xBoxes > 20) ? "Time to Play" : "Read a book";
console.log(People);
