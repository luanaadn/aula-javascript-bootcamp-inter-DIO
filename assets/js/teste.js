var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
window.addEventListener("load",msg1);


function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}  

function msg1(){
    alert("Seja bem-vindo(a) ao nosso contador online!");
    }








