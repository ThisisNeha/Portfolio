const p = document.querySelector("p");
const btn = document.querySelector("#btn-1");

var obj1 = {
    name: "ram",
    age: 24,
    yuga: "treta",
    power: 2500
}

var obj2 = {
    name: "krishna",
    age: 31,
    yuga: "dwapar",
    power: 2335
}

function checkPower(obj1, obj2) {
    // if (obj1.age < obj2.age) {
    //     p.innerText = obj2.name;
    // } else {
    //     p.innerText = obj1.name;
    // }

    // if (obj1.power < obj2.power) {
    //     p.innerText = obj2.name;
    // } else {
    //     p.innerText = obj1.name;
    // }


    var totalpower1= obj1.power + obj1.name.length*35;
    var totalpower2= obj2.power + obj2.name.length*35;

    if (totalpower1 < totalpower2) {
        p.innerText = obj2.name;
    } else {
        p.innerText = obj1.name;
    }
}

btn.addEventListener("click", function () {
    checkPower(obj1, obj2)
});