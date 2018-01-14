var displayView = "";
var displayWindow;
const screenMax = 18;

/* function sets all the listeners for the buttons*/
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
  document.querySelector("#addition").addEventListener("click", numberButton);
  document.querySelector("#subtract").addEventListener("click", numberButton);
  document.querySelector("#multiply").addEventListener("click", numberButton);
  document.querySelector("#divide").addEventListener("click", numberButton);
  document.querySelector("#equals").addEventListener("click", equalsButton);
}

/* This function adds two numbers together*/
function add(num1, num2){
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  console.log(num1, num2);
  let newNum = num1 + num2;
  return newNum;
}

/* This function adds two numbers together*/
function sub(num1, num2){
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  let newNum = num1 - num2;
  return newNum;
}

/* This function adds two numbers together*/
function divide(num1, num2){
  let newNum = num1 / num2;
  return newNum;
}

/* This function adds two numbers together*/
function multiply(num1, num2){
  let newNum = num1 * num2;
  return newNum;
}

/* This function takes an operator for a together*/
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

function equalsButton(e){
  if (displayView != ""){
  let newString = evaluateString(displayView);
  displayView = newString.toString();
  displayWindow.textContent = newString;
  }
}

// This will enforse the order of operations (simplified)
// to muliplication and division first then addition and subtraction
// input: string;
// output: number;
function evaluateString(testString){
  if (!isNaN(parseInt(testString))){
    console.log("evaluating string: " + testString);
    let firstSub = testString.indexOf("-");
    let firstAdd = testString.indexOf("+");
    let firstMultiply = testString.indexOf("*");
    let firstDivide = testString.indexOf("/");
    // splits based on the subtraction then addition
    if (firstSub >= 0 && firstAdd >= 0){  // the case where both addition and subtraction exist
      console.log("Both");
      if (firstSub < firstAdd){
        let leftSide = testString.substring(0,firstSub);
        let rightSide = testString.substring(firstSub + 1, testString.length);
        let leftVar = parseInt(evaluateString(leftSide));
        console.log(leftSide);
        let rightVar = checkMulti(rightSide);
        return operate("-",leftVar, rightVar);
      } else {
        let leftSide = testString.substring(0,firstAdd);
        let rightSide = testString.substring(firstAdd + 1, testString.length);
        let leftVar = parseInt(evaluateString(leftSide));
        console.log(leftSide);
        let rightVar = checkMulti(rightSide);
        return operate("+",leftVar, rightVar);
      }

    } else if (firstSub >= 0){ // case: There are no additions
        console.log("no Add");
        let leftSide = testString.substring(0,firstSub);
        let rightSide = testString.substring(firstSub + 1, testString.length);
        let leftVar = parseInt(evaluateString(leftSide));
        console.log(leftSide);
        let rightVar = checkMulti(rightSide);
        return operate("-",leftVar, rightVar);

    } else if(firstAdd >= 0) {  //case: There are no subtractions
        console.log("no Sub");
        let leftSide = testString.substring(0,firstAdd );
        let rightSide = testString.substring(firstAdd+ 1, testString.length);
        let leftVar = parseInt(evaluateString(leftSide));;
        console.log(leftSide);
        let rightVar = checkMulti(rightSide);
        return operate("+",leftVar, rightVar);
    } else {
        console.log("Neither");
        let leftVar = checkMulti(testString);
        return leftVar;
    }
  } else {
    return parseInt(testString);
  }
}

function checkAdd(testString){

}

function checkMulti(testString){
  if (!isNaN(parseInt(testString))){
    let firstMulti = testString.indexOf("*");
    let firstDiv = testString.indexOf("/");
    if (firstMulti >= 0 && firstDiv >= 0){  // the case where both addition and subtraction exist
      console.log("Both");
      if (firstMulti < firstDiv){
        let leftSide = testString.substring(0,firstMulti);
        let rightSide = testString.substring(firstMulti + 1, testString.length);
        let leftVar = parseInt(leftSide);
        console.log(leftVar);
        let rightVar = checkMulti(rightSide);
        console.log(rightVar);

        return operate("*",leftVar, rightVar);
      } else {  // case: both with a multi on the left
        let leftSide = testString.substring(0,firstDiv);
        let rightSide = testString.substring(firstDiv + 1, testString.length);
        let leftVar = parseInt(leftSide);
        console.log(leftVar);
        let rightVar = checkMulti(rightSide);
        console.log(rightVar);

        return operate("/",leftVar, rightVar);
      }

    } else if (firstMulti >= 0){ // case: There are no divisions
        console.log("no division");
        let leftSide = testString.substring(0,firstMulti);
        let rightSide = testString.substring(firstMulti + 1, testString.length);
        let leftVar = parseInt(leftSide);
        console.log(leftVar);
        let rightVar = checkMulti(rightSide);
        console.log(rightVar);

        return operate("*",leftVar, rightVar);

    } else if(firstDiv >= 0) {  //case: There are no multiplications
        console.log("no multi");
        let leftSide = testString.substring(0,firstDiv);
        let rightSide = testString.substring(firstDiv + 1, testString.length);
        let leftVar = parseInt(leftSide);
        console.log(leftVar);
        let rightVar = checkMulti(rightSide);
        console.log(rightVar);

        return operate("/",leftVar, rightVar);
    } else {
        console.log("Neither");
        console.log("returning " + testString +" from checkMulti");
        return testString;
      }

  } else {
    console.log("returning " + testString);
    return parseInt(testString);
  }
}


/* adds the indicated button pressed to the viewscreen and the string to be evaluated */
function numberButton(e) {
  if (displayView.length < screenMax){
    switch(e.target.textContent){
      case "*":
        if(isNaN(parseInt(displayView[displayView.length - 1]))){
          return;
        }
      case "-":
      if(isNaN(parseInt(displayView[displayView.length - 1]))){
        return;
      }
      case "+":
      if(isNaN(parseInt(displayView[displayView.length - 1]))){
        return;
      }
      case "/":
      if(isNaN(parseInt(displayView[displayView.length - 1]))){
        return;
      }
      default:
      displayView += e.target.textContent;
      displayWindow.textContent = displayView;
    }


  }
}

function clear(e) {
  displayView = "";
  displayWindow.textContent = displayView;
}
