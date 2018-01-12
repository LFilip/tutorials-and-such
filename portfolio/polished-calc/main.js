var displayView = "";
var displayWindow;


function setListeners() {
  console.log("Loading Listeners");
  displayWindow = document.getElementById('view');
  document.querySelector("#one").addEventListener("click", numberButton);
  document.querySelector("#two").addEventListener("click", numberButton);
  document.querySelector("#three").addEventListener("click", numberButton);
  document.querySelector("#four").addEventListener("click", numberButton);
  document.querySelector("#five").addEventListener("click", numberButton);
  document.querySelector("#six").addEventListener("click", numberButton);
  document.querySelector("#seven").addEventListener("click", numberButton);
  document.querySelector("#eight").addEventListener("click", numberButton);
  document.querySelector("#nine").addEventListener("click", numberButton);
  document.querySelector("#zero").addEventListener("click", numberButton);
  document.querySelector("#clear").addEventListener("click", clear);
}


function add(num1, num2){
  let newNum = num1 + num2;
  return newNum;
}

function sub(num1, num2){
  let newNum = num1 - num2;
  return newNum;
}

function divide(num1, num2){
  let newNum = num1 / num2;
  return newNum;
}

function multiply(num1, num2){
  let newNum = num1 * num2;
  return newNum;
}

function operate(operator, num1, num2){
  switch(operator){
    case "*":
    return multiply(num1,num2);
    case "+":
    return add(num1,num2);
    case "/":
    return divide(num1,num2);
    case "-":
    return sub(num1, num2);
    default:
    return "ERROR";
  }
}

function numberButton(e) {
  console.log(e);
    displayView += e.target.textContent;
    displayWindow.textContent = displayView;
}

function clear(e) {
  displayView = "";
  displayWindow.textContent = displayView;
}
