const passwordinput = document.querySelector("input")
const button = document.querySelector("button");
const output = document.querySelector("p");


function checkPass () {
    
    if (passwordinput.value.length >= 10) {
        output.innerText = "Nice!";
        passwordinput.style.backgroundColor = "palegreen";
        button.disabled = false;
    } else {
        button.disabled = true;
        output.innerText = "Not nice!";
        passwordinput.style.backgroundColor = "lightpink";
    }
};

passwordinput.addEventListener("keypress", checkPass);
button.addEventListener("click", checkPass);