const input = document.querySelector("input");
const redbtn = document.querySelector("#red");
const greenbtn = document.querySelector("#green");
const purplebtn = document.querySelector("#purple");


function redColor(){
    input.style.color="red";
}

function greenColor(){
    input.style.color="green";
}
function purpleColor(){
    input.style.color="purple";
}

redbtn.addEventListener("click", redColor);
greenbtn.addEventListener("click", greenColor);
purplebtn.addEventListener("click", purpleColor);