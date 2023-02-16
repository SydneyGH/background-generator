var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("btn");


color1.value = "#ff0000";
color2.value = "#ffff00";

// Sends color to the background
function setGradient(value) {
    body.style.background = "linear-gradient(to right, " 
    + color1.value + ", " 
    + color2.value + ")";

    css.textContent = body.style.background + ";";
}

// Selects a random hexdecimal 
function randomPick(){
    return (
        "#" + Math.random().toString(16).slice(2, 8)
      );
}

// Sends random color to the background
function randomColor(){
    var random1 = randomPick()
    var random2 = randomPick()

    color1.value = random1;
    color2.value = random2;
    setGradient(randomPick)
}

//buttons
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", randomColor);

