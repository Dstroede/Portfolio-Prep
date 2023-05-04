"use strict";

let qOne=0;
let userName = prompt ("What is your name?");
alert ("Welcome, " + userName);
console.log(userName);

function lVegas() {
  let vegas = prompt ("Has Drew Stroede ever lived in Las Vegas? (yes or no)").toLowerCase();
  console.log(vegas);
  if (vegas === "yes") {
    console.log("Correct! Although he only lived there for a few months!");
    alert("Correct! Although he only lived there for a few months!");
    qOne++;
  }else if (vegas === "no") {
    console.log("Incorrect! Drew lived in Vegas for a couple months earlier this year!");
    alert("Incorrect! Drew lived in Vegas for a couple months earlier this year!");
  } else if (vegas !== "yes" && vegas !== "no"){
    console.log("I'm sorry I do not understand! Plz use yes or no. The answer is yes he did!");
    alert ("I'm sorry I do not understand! Plz use yes or no. The answer is yes he did!");
  }
  console.log (qOne);
}

function cBall() {
  let qTwo=0;
  let football = prompt ("Has Drew Stroede played college basketball?").toLowerCase();
  console.log(football);
  if (football === "yes") {
    console.log ("Nah! Drew played college football as a defensive back!");
    alert("Nah! Drew played college football as a defensive back!");
  }else if (football === "no") {
    console.log("You're right here but Drew did played college football as a defensive back!" );
    alert("You're right here but Drew did played college football as a defensive back!");
    qTwo++;
  } else if (football !== "yes" && football !== "no"){
    console.log("I'm sorry, plz use yes or no. Drew played colllege football instead!" );
    alert ("I'm sorry, plz use yes or no. Drew played colllege football instead!");
  }
  console.log (qTwo);
}

function wisco() {
  let qThree=0;
  let wisconsin = prompt ("Has Drew Stroede ever lived in Wisconsin").toLowerCase();
  console.log(wisconsin);
  if (wisconsin === "yes") {
    console.log("Yessir! Drew was born and raised in Wisconsin to a family of 7!");
    alert("Yessir! Drew was born and raised in Wisconsin to a family of 7!");
    qThree++;
  }else if (wisconsin === "no") {
    console.log("If you said no, then you'd be wrong! Drew was born and raised in Wisconsin to a family of 7!");
    alert("If you said no, then you'd be wrong! Drew was born and raised in Wisconsin to a family of 7!");
  } else if (wisconsin !== "yes" && wisconsin !== "no"){
    console.log("I'm sorry, plz use yes or no. The answer is yes he did!" );
    alert  ("I'm sorry, plz use yes or no. The answer is yes he did!");
  }
  console.log(qThree);
}

function bros() {
  let qFour=0;
  let family = prompt ("Does Drew Stroede have 4 brothers?").toLowerCase();
  console.log(family);
  if (family === "yes") {
    console.log("Not quite! Drew has 3 brothers and 1 sister");
    alert("Not quite! Drew has 3 brothers and 1 sister");
  }else if (family === "no") {
    console.log("Spot on! Drew has 3 brothers and 1 sister");
    alert("Spot on! Drew has 3 brothers and 1 sister");
    qFour++;
  } else if (family !== "yes" && family !== "no"){
    console.log("I'm sorry, plz use yes or no. He has 3 brothers and 1 sister");
    alert  ("I'm sorry, plz use yes or no. He has 3 brothers and 1 sister");
  }
  console.log (qFour);
}

function din() {
  let qFive=0;
  let food = prompt ("Is Drew Stroede's favorite food is Salmon?").toLowerCase();
  console.log(food);
  if (food === "yes") {
    console.log("Yee Yee! Drew loves Salmon and Prime Rib! Expensive Taste!");
    alert("Yee Yee! Drew loves Salmon and Prime Rib! Expensive Taste!");
    qFive++;
  }else if (food === "no") {
    console.log("Wrong! Drew loves Salmon and Prime Rib! Expensive Taste!");
    alert("Wrong! Drew loves Salmon and Prime Rib! Expensive Taste!");
  } else if (food !== "yes" && food !== "no"){
    console.log("I'm sorry, plz use yes or no. Salmon is his favorite!");
    alert  ("I'm sorry, plz use yes or no. Salmon is his favorite!");
  }
  console.log (qFive);
}

function numSelect() {
  let qSix=0;
  let guessNum = 6;
  let gotIt= false;
  let webRanker = prompt ("guess a number between 1 & 10 ");
  for (let i=0; i < 3; i++){
    if (webRanker < 6){
      webRanker= prompt ("little higher!");
    } else if (webRanker > 6 ){
      webRanker= prompt("little lower");
    } else if (webRanker === guessNum){
      alert("Whoaaa you must be psychic! You're right!");
      qSix++;
      gotIt= true; 
      break; 
    }
    if (!gotIt && i===2){
      alert("Ran out of attempts! Sorry, it was 6!");
      break;
    }
  }
  console.log (qSix);
}

let qSeven=0;
let team= "green bay";
let correct= false;
let favTeam= prompt("Guess what city my favorite NFL team resides?").toLowerCase();
for (let i=0; i< 5; i++){
    if(favTeam != team) { 
    favTeam= prompt ("Nope! Try again!");
    }     
    else if (favTeam == team){
    alert ("Yup! GO PACK GO!")
    qSeven++
    correct= true;
    break;
    }
    if (!correct && i===4){
    alert("Ran out of attempts! Sorry, Go Pack Go!");
    break;
    }
}
console.log(qSeven)

lVegas();
cBall();
wisco();
bros();
din();
numSelect ();

let score= [qOne+qTwo+qThree+qFour+qFive+qSix+qSeven]
console.log(score)
alert ("Thanks for playing "+ userName+  " you got "+ score +" out of 7 correct! How about we learn a little more about Drew!");
