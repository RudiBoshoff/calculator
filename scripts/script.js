// RUDI BOSHOFF

// STRUCTURE:
// 1. get user input when user clicks a button
// 1.1 numbers
// 1.2 operators
// 1.3 numbers with decimal points
// 1.4 negative numbers
// 2. convert input into a string
// 3. display user string input in top display
// 4. when user clicks "=", evaluate the string
// 5. display the result of the calculation in bottom display

// ADDITIONAL:
// a. C and CE do the same: they clear the answers and the display
// b. backspace deletes the last entry operation (3 spaces) and other (1 space)
// c. make sure calculator doesn't break when "0/0" and "num/0"

// TODO:
// have minus plus button change the sign of the last entered number
// keyboard input

// 1. get user input when user clicks a button
// 1.1 numbers
let numInput = 0;
let answer = "";
let currentDisplay = "";
$(".num-val").click(function(){
  numInput = $(this).text();
  display(numInput);
})

// 1.2 operators
let operator = "";
$(".divide").click(function(){
  operator = " / ";
  display(operator);
});

$(".multiply").click(function(){
  operator = " * ";
  display(operator);
});

$(".add").click(function(){
  operator = " + ";
  display(operator);
});

// 1.3 numbers with decimal points
$(".point").click(function(){
  operator = ".";
  display(operator);
});

// 1.4 negative numbers
$(".subtract").click(function(){
  operator = " - ";
  display(operator);
});




// 2. convert input into a string
// 3. display user string input in top display
function display(numInput){
  currentDisplay = currentDisplay.concat(numInput);
  $(".display-command").text(currentDisplay);
  if (typeof answer == "number"){
  $(".display-answer").text(answer.toFixed(2));
  }
}



// 4. when user clicks "=", evaluate the string
// 5. display the result of the calculation in bottom display
$(".equal").click(function() {
  operator = " = ";
  answer = eval($(".display-command").text());
  display(operator);
});



// a. C and CE do the same: they clear the answers and the display
$(".clear").click(function(){
  numInput = 0;
  answer = "";
  currentDisplay = "";
  $(".display-command").text(currentDisplay);
  $(".display-answer").text('');
});

// b. backspace deletes the last entry operation (3 spaces) and other (1 space)
$(".backspace").click(function(){
  answer = "";
  $(".display-answer").text('');
  const length = currentDisplay.length;
  let lastValue = currentDisplay.slice(length -1, length);
  if (lastValue == " "){
    currentDisplay = currentDisplay.slice(0, length - 3); //delete last 3 characters eg." + " or " - "
  } else {
    currentDisplay = currentDisplay.slice(0, length - 1); //delete last character eg."." or "6"
  }
  $(".display-command").text(currentDisplay);
});
