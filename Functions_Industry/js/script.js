/**
 * Created by marquitaalexander on 11/21/13.
 */

//if statement
var Designs = 25;
//if there is more designs then webPages then we will have to go back to the drawing board
if(Designs > 15){
    console.log("Need to go back to the drawing board");
}

//else block
var Designs = 35;
var webPages = 40;
//if there is enough Designs it will print "Lets get started"
if(Designs < webPages){
    //code will performed if true
    console.log("Lets get started");
}else{
    //code will perform if false
    console.log("Back to the drawing board");
}

//else if statement
var Designs = 15;
var webPages = 19;
var Characters = 3;
if(Designs < webPages){
    //if there is more designs then webPages then we are ready to get started
    console.log("Ready to build");
}else if(Designs > Characters){
    //if there is more design then Character then we need more characters
    console.log("We need more characters");
}

//ternary form
var Designs = 20;
//if Designs is more then 40 characters then we will go with the blue stripes otherwise its green dots
Color = (Designs < 40) ? "blueStripes" : "greenDots";
console.log(Color);

//Function
function calcSqft(){ //calculating the square footage of my office
    var length = 45;
    var height = 40;
    var sqFt = length * height; //multilply the length and height to get the square footage
    console.log(sqFt);
}
calcSqft();








































