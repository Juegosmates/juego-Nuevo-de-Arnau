
var timer = document.getElementById("timer");
var timer = document.getElementById("timer");
var operation = document.getElementById("operationDiv");
var operations = [];

for(e=0; e<20; e++) {
    let randomNumber1 = Math.floor(Math.random()*9)+1;
    let randomNumber2 = Math.floor(Math.random()*9)+1;
    var result = randomNumber1 + randomNumber2;

    operations[e] = "Escoge un número que sea la suma de " + randomNumber1 + " + " + randomNumber2;
    operation.textContent = operations[e];
    // console.log(results[e]);
}

var i = 60;
var score = 0;

countDown = setInterval(function () {
    i--;
    timer.textContent = "Time: " + i + " s";
    if (i === 0) {
        clearInterval(countDown);
    }
}, 1000);

function operationText() {
}

// operationText();
