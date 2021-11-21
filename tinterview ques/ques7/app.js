const button = document.querySelector("button");
const para = document.querySelector("p");
const input = document.querySelector("input");

// var url = "https://quick-access-api.desaihetav.repl.co/";
// var url = "https://unitube-server.herokuapp.com/playlists";
// var url = "https://jsonplaceholder.typicode.com/dummyUsers";
var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=";


function clickEventHandler() {
  fetch(url )
    .then((response) => response.json())
    .then((json) => {
      var ans= json.contents.translated; 
      para.innerText = ans + " " +input.value.toUpperCase() ;
    })     
}


// one error

// function clickEventHandler() {
//   fetch(url)
//     .then((response) => response.json())
//     .then((error) => {
//       para.innerText = error.message;
//     });
// }

// two errors

// function clickEventHandler() {
//     fetch(url)
//         .then(error => {
//             if (error.status === 404) {
//                 para.innerText = error.status+ "not found" ;
//             } else if(error.status ===401) {
//                 para.innerText = error.status+ "bye bye";
//             }

//         })
// }

button.addEventListener("click", clickEventHandler);
