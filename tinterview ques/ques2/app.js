const input = document.querySelector("input");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
// const para= document.querySelector("p");

var fontsize = input.style.fontSize;

function sizeIncrease(){
    var num = Number(fontsize.slice(0, -2));
    num += 2;
    fontsize = String(num) + "px";
    input.style.fontSize = fontsize;
}

function sizeDecrease(){
    var num = Number(fontsize.slice(0, -2));
    num -= 2;
    fontsize = String(num) + "px";
    input.style.fontSize = fontsize;
}





increase.addEventListener("click", sizeIncrease);
decrease.addEventListener("click", sizeDecrease);
