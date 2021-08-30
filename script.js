// document.getElementById("count-el").innerText = 7;


let count = 0;

let viewCounter = document.getElementById("count-el");

function increment() {
    count = count + 1;
    viewCounter.innerText = count;
}