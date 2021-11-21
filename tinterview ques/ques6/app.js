const btn = document.querySelector("button");
const p= document.querySelector("p");


function textloading(){
    p.innerText = "text loading....";
if (p.style.display === "none"){
    p.style.display="block";
}else{
    p.style.display="none";
}

}



btn.addEventListener("click", textloading);