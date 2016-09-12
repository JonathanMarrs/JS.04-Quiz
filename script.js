/*
The Quiz
  Test the players knowledge of the ever important words of the one and only Mitch Hedberg, RIP.
*/

//Set the score to zero
var playerScore = 0;

/* Quesion 1
  A) Ask Question
  B) Give Feedback
  C) Increase score for correct answer
*/
var answerOne = prompt("Fill in the blanks. Mitch said, \"A _______ _______ is the ultimate stocking stuffer.\"");
if ( answerOne.toUpperCase() === "SEVERED FOOT" ) {
  playerScore += 1;
  alert("Yes! That's right.  You are amazing. Your current score is " + playerScore + ".")
} else {
  alert("No, sorry. The correct answer is \"severed foot.\" Your current score is " + playerScore + ".")
}

//Question 2
var answerTwo = prompt("Fill in the blank. Mitch said, \"I am not addicted to gambling although I am addicted to sitting in a ____________.\"");
if ( answerTwo.toUpperCase() === "SEMI-CIRCLE" || answerTwo.toUpperCase() === "SEMI CIRCLE") {
  playerScore += 1;
  alert("Yes! That's right.  You are amazing. Your current score is " + playerScore + ".")
} else {
  alert("No, sorry. The correct answer is \"semi-circle.\" Your current score is " + playerScore + ".")
}

//Question 3
var answerThree = prompt("What year did Mitch Hedberg pass away?")
if (answerThree === "2005" || answerThree === "05" || answerThree === "'05") {
  playerScore += 1;
  alert("Just thinking of that makes me sad, but Yes, you are correct. Your current score is " + playerScore + ".")
} else {
  alert("No, that isn't right.  It was 2005... So sad.  Your current score is " + playerScore + ".")
}

//Question 4
var answerFour = prompt("Fill in the blank. Mitch said, \"I'm against ________, but I don't know how to show it.\"")
if (answerFour.toUpperCase() === "PICKETING") {
  playerScore += 1;
  alert("Exactly. That's an incredibly important dilemma, right? Your current score is " + playerScore + ".")
} else {
  alert("No, that isn't right.  He was against \"picketing.\" That's an incredibly important dilemma, right?  Your current score is " + playerScore + ".")
}

//Question 5
var answerFive = prompt("Fill in the blank. Mitch said, \"I had a parrot. The parrot talked, but it did not say \"____ ______\", so it died.\"")
if (answerFive.toUpperCase() === "I'M HUNGRY" || answerFive.toUpperCase() === "I AM HUNGRY") {
  playerScore += 1;
  alert("Yes, you are correct. It's really important to communicate your needs, right? Your current score is " + playerScore + ".")
} else {
  alert("No, that isn't right.  It was \"I'm hungry.\" It's really important to communicate your needs, right?  Your current score is " + playerScore + ".")
}

if ( playerScore === 5 ) {
  var prize = "You got " + playerScore + " answers correct! You win 100 Subway sandwiches.  Just tell the cashier, \"It's for a duck!\""
} else if ( playerScore >= 3 ){
  var prize = "You got " + playerScore + " answers correct! You win 10 frozen bananas."
} else if ( playerScore >= 1 ){
  var prize = "You got " + playerScore + " answers correct! You really should listen to more Mitch. Your life will improve..."
} else {
  var prize = "You got " + playerScore + " answers correct... Seriously? You have some work to do.  Go listen to Mitch, NOW!!!!"
}

document.write( prize )
