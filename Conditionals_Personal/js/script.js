/**
 * Created by marquitaalexander on 11/14/13.
 */

//if statement
var highSlopes = 40;
//if the snow is high enough then console will print "Have fun down the slopes"
//if the snow is over 40 inches
if(highSlopes > 30){
//if true the code will appear
    console.log("Have fun down the slopes")
}
//else if
var lowSlopes = 70;
var highSlopes = 60;
var goSkiing = 68; //the height of the snow
//if the lowSlopes have more inches of snow then I'll print "Too dangers to snowboard."
if(lowSlopes < highSlopes){
    console.log("Too dangerous to snowboard");
}else if(lowSlopes > goSkiing){
//you can use regular skis if the inches of lowSlopes is greater then the required goSkiing amount
    console.log("You can use regular skis");
}else{
    console.log("Sorry stay in the house");
//sorry staying in the house
}

//else block
var lowSlopes = 68;
var highSlopes = 52;
//if the highSlopes inches of snow is lower than the lowSlopes then it will print "Ok to snowboard"
if(highSlopes < lowSlopes){
//if the condition is true then you can snowboard
    console.log("Ok to Snowboard");
}else{
    //if condition is false
    console.log("Stay in the house");
}




