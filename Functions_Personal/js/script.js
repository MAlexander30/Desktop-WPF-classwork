/**
 * Created by marquitaalexander on 11/20/13.
 */

//if statement
var bottles = 12;
//if there is more formula then bottles then we don't have to go to the store
if(bottles < 36.8){
    console.log("Ready for road trip");
}

//else block statement
var bottles = 12;
var bottleCaps = 13;
//if there are enough bottleCaps it will print "Ready for road trip"
if(bottles < bottleCaps){
    //code will performed if its true
    console.log("Ready for road trip");
}else{
    //code performed if its false
    console.log("Have to go to the store");
}

//if else statement
var bottles = 12;
var bottleCaps = 13;
var bottleHolders = 9;
if(bottles < bottleCaps){
    //if there is more bottleCaps then bottle then we can head out
   console.log("Ready for road trip");
}else if(bottles < bottleHolders){
    //if there is less bottleHolders then bottles then we need to buy more
    console.log("We may have to go to the store");
}

//ternary form
var bottleOz = 20;
//if bottleOz is more then 40 ounce formula then it will I'll mix it with goodStart otherwise its Similac
formula = (bottleOz < 40) ? "goodStart" : "Similac";
console.log(formula);

//Return value

 var pi = calCircle(100, 50);
// calculation the pi of a circle
function calCircle(c, d){ //circumference divide by diameter
    var total = c / d;
    return total; // had to change th information that is being put out
}
console.log(pi);

//Anonymous

function calCircle (c, d){
    var pi = c / d
    return pi;
}
var pi = calCircle(100, 50);
console.log(pi);






































