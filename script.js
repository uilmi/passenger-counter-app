let count = 0;

let viewCounter = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
    count += 1;
    viewCounter.textContent = count;
}

function save() {
    console.log(count)
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    viewCounter.textContent = 0;
    count = 0;
}

// string vs number note
let name = "JS Counter App"
let greeting = "Welcome to "
let myGreeting = greeting + name;
// console.log(myGreeting) // string always win

let points = 4
let bonusPoints = "10"

let totalPoints = "4" + "10"

console.log(totalPoints)

//some practice on string
console.log(4 + 5) //9
console.log("2" + "4") //"24"
console.log("5" + 1) //"51"
console.log(100 + "100") //"100100"

// Welcome message render it
welcomeEl = document.getElementById("welcome-el");
welcomeEl.innerText = myGreeting;

