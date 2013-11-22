/**
 * Created by marquitaalexander on 11/21/13.
 */

//if statement
var gummyBears = 20;
//if there is more gummyBears then gumBalls then we will have to go to the store
if(gummyBears > 15){
    console.log("Need to go to the candy store");
}

//else block statement
var gummyBears = 30;
var gumBalls = 35;
//if there is enough gumBall it will print "I love candy"
if(gummyBears < gumBalls){
    //code will performed if its true
    console.log("I love candy");
}else{
    //code performed if its false
    console.log("Need to go to the candy store");
}

//if else statement
var gummyBears = 13;
var gumBalls = 12;
var skittles = 9;
if(gummyBears > gumBalls){
    //if there is more gummyBears then gumBalls then we can head to the candy store
    console.log("Candy store trip");
}else if(gummyBears < skittles){
    //if there is less gummyBears then skittles then we need to start or sugar rush
    console.log("Time for or sugar rush");
}

//ternary form
var cookieJarOz = 20;
//if cookieJarOz is more then 40 ounce then it will I'll mix it with chocolate chip cookies otherwise its Oreo
Taste = (cookieJarOz < 40) ? "chocolateChipCookies" : "Oreo";
console.log(Taste);

//parameters

gumBallsMachine(8,17); //measurement of a gum ball machine measured by height and width

function gumBallsMachine(w, h){
    var gumBalls = w * h
    console.log(gumBalls);
}

function creamPuffs(){ //how many puffs ball have to be made if each person gets two and there are five people
    var plain = 2;
    var creamPuffs = plain * 5;
    console.log("Everybody get " + creamPuffs +  " cream puffs a piece." );
}
creamPuffs();



function Candy(blue){
    var Candy = blue * 20; //how many candy machines
    console.log("The candy machine has " + Candy + " blue gum balls")
}
Candy(5); // how many candy I'll put into each candy machine
























