const numOne = document.querySelector("#num-one");
const numTwo = document.querySelector("#num-two");

const p= document.querySelector("p");


document.querySelector("#add").addEventListener("click", function calculateSum () {
    var num = Number(numOne.value) + Number(numTwo.value);
    p.innerText = "Sum is " + String(num);
});

document.querySelector("#sub").addEventListener("click", function calculateDifference(){
 var diff = Number(numOne.value) - Number(numTwo.value);
 p.innerText = " diff is " + diff;
});

document.querySelector("#multiply").addEventListener("click", function calculateProduct(){
    p.innerText = Number(numOne.value)*Number(numTwo.value); 
});

document.querySelector("#divide").addEventListener("click", function calculateDivision(){
    p.innerText = Math.round(Number(numOne.value)/Number(numTwo.value));
} );