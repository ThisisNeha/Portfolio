const input = document.querySelector("input");
const head1 = document.querySelector("#h1");
const head2 = document.querySelector("#h2");
const head3 = document.querySelector("#h3");

function heading1(){
    input.style.fontSize="56px";
}
function heading2(){
    input.style.fontSize="46px";
}
function heading3(){
    input.style.fontSize="36px";
}

head1.addEventListener("click", heading1);
head2.addEventListener("click", heading2);
head3.addEventListener("click", heading3);