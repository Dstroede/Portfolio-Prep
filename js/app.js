"use strict";

let userName = prompt ("What is your name?")
alert ("Welcome, " + userName)
let vegas = prompt ("Has Drew Stroede ever lived in Las Vegas? (yes or no)").toLowerCase();
    console.log(vegas)
if (vegas == "yes") {
    console.log("Correct! Although he only lived there for a few months!")
    alert("Correct! Although he only lived there for a few months!");
}else if (vegas == "no") {
    console.log("Incorrect! Drew lived in Vegas for a couple months earlier this year!")
    alert("Incorrect! Drew lived in Vegas for a couple months earlier this year!");
} else if (vegas != "yes" && vegas != "no"){
    console.log("I'm sorry I do not understand! Plz use yes or no. The answer is yes he did!")
    alert ("I'm sorry I do not understand! Plz use yes or no. The answer is yes he did!");
}

let football = prompt ("Has Drew Stroede played college basketball?").toLowerCase();
    console.log(football)
if (football == "yes") {
    console.log ("Nah! Drew played college football as a defensive back!")
    alert("Nah! Drew played college football as a defensive back!");
}else if (football == "no") {
    console.log("You're right here but Drew did played college football as a defensive back!" )
    alert("You're right here but Drew did played college football as a defensive back!");
} else if (football != "yes" && football != "no"){
    console.log("I'm sorry, plz use yes or no. Drew played colllege football instead!" )
    alert ("I'm sorry, plz use yes or no. Drew played colllege football instead!");
}
let wisconsin = prompt ("Has Drew Stroede ever lived in Wisconsin").toLowerCase();
console.log(wisconsin)
if (wisconsin == "yes") {
    console.log("Yessir! Drew was born and raised in Wisconsin to a family of 7!")
    alert("Yessir! Drew was born and raised in Wisconsin to a family of 7!");
}else if (wisconsin == "no") {
    console.log("If you said no, then you'd be wrong! Drew was born and raised in Wisconsin to a family of 7!")
    alert("If you said no, then you'd be wrong! Drew was born and raised in Wisconsin to a family of 7!");
} else if (wisconsin != "yes" && wisconsin != "no"){
    console.log("I'm sorry, plz use yes or no. The answer is yes he did!" )
    alert  ("I'm sorry, plz use yes or no. The answer is yes he did!");
}

let family = prompt ("Does Drew Stroede have 4 brothers?").toLowerCase();
console.log(family)
if (family == "yes") {
    console.log("Not quite! Drew has 3 brothers and 1 sister")
    alert("Not quite! Drew has 3 brothers and 1 sister");
}else if (family == "no") {
    console.log("Spot on! Drew has 3 brothers and 1 sister")
    alert("Spot on! Drew has 3 brothers and 1 sister");
} else if (family != "yes" && family != "no"){
    console.log("I'm sorry, plz use yes or no. He has 3 brothers and 1 sister")
    alert  ("I'm sorry, plz use yes or no. He has 3 brothers and 1 sister");
}

let food = prompt ("Is Drew Stroede's favorite food is Salmon?").toLowerCase();
console.log(food)
if (food == "yes") {
    console.log("Yee Yee! Drew loves Salmon and Prime Rib! Expensive Taste!")
    alert("Yee Yee! Drew loves Salmon and Prime Rib! Expensive Taste!");
}else if (food == "no") {
    console.log("Wrong! Drew loves Salmon and Prime Rib! Expensive Taste!")
    alert("Wrong! Drew loves Salmon and Prime Rib! Expensive Taste!");
} else if (food != "yes" && food != "no"){
    console.log("I'm sorry, plz use yes or no. Salmon is his favorite!")
    alert  ("I'm sorry, plz use yes or no. Salmon is his favorite!");
}
alert ("Thanks for playing "+ userName+ " how about we learn a little more about Drew!");