let firstNum = "";
let secondNum = "";
let selOperator = "";
let secondDisplay = "";

const subOutput = document.querySelector(".second-display");
const output = document.querySelector(".iodisplay");
const testF = document.querySelector(".first"); // testing
const testO = document.querySelector(".op"); // testing
const testS = document.querySelector(".second"); // testing
const opTable = {
    plus : "+",
    minus : "−",
    times : "×",
    divide : "÷",
}

const acBtn = document.getElementById("AC");
acBtn.addEventListener("click", function() {
    // All Clear, resets everything
    firstNum = 0;
    secondNum = 0;
    selOperator = "";
    secondDisplay = "";
    output.textContent = firstNum;
    subOutput.textContent = secondDisplay;
    testF.textContent = "_"; //testing
    testO.textContent = "_"; //testing
    testS.textContent = "_"; //testing
});

const numsButtons = document.querySelectorAll(".nums-btn");
numsButtons.forEach(num => {
    // Functionality for button numbers
    num.addEventListener("click", function() {
        if (subOutput.textContent == "") {
            // When first number hasn't been submitted
            if (firstNum == "") {
                // populating first entry under right conditions
                if (num.id != "zero") {
                    firstNum = num.id;
                }
            } else {
                // populating second+ entries
                if (num.id == "zero") {
                    firstNum += "0";
                } else {
                    firstNum += num.id;
                }
            }
            output.textContent = firstNum;
        } else {
            // Inputting for second number
            if (secondNum == "") {
                // populating first entry under right conditions
                if (num.id != "zero") {
                    secondNum = num.id;
                }
            } else {
                // populating second+ entries
                if (num.id == "zero") {
                    secondNum += "0";
                } else {
                    secondNum += num.id;
                }
            }
            output.textContent = secondNum;
        }
        testF.textContent = firstNum; //testing
        testS.textContent = secondNum; //testing
    });
});

const operationsButtons = document.querySelectorAll(".operators button");
operationsButtons.forEach(operation => {
    operation.addEventListener("click", function() {
        // Functionality for operators buttons
        if (operation.id == "equals") {
            // When user evaluates expression
            output.textContent = operate(selOperator, firstNum, secondNum);
            firstNum = operate(selOperator, firstNum, secondNum);
            secondNum = "";
        } else {
            if (secondNum == "") {
                // first operation
                output.textContent = "0";
                subOutput.textContent = firstNum + "  " + operation.textContent;
            } else {
                // multiple operations
                subOutput.textContent = firstNum + "  " + opTable[selOperator] + 
                        " " + secondNum + " =";
                output.textContent = operate(selOperator, firstNum, secondNum);
                firstNum = operate(selOperator, firstNum, secondNum);
                secondNum = "";
            }
            selOperator = operation.id;
        }
        testF.textContent = firstNum; //testing
        testO.textContent = selOperator; //testing
        testS.textContent = secondNum; //testing
    });
});



function add(a, b) {
    // adds two numbers a and b
    return a + b;
}

function minus(a, b) {
    // minus two numbers a and b
    return a - b;
}

function times(a, b) {
    // times two numbers a and b
    return a * b;
}

function divide(a, b) {
    // divides two numbers a and b
    return a / b;
}

function operate(operator, a, b) {
    // based on the operator,
    // performs operation with two numbers a and b
    a = Number(a);
    b = Number(b);
    const operations = {
        plus : add(a, b),
        minus : minus(a, b),
        times : times(a, b),
        divide : divide(a, b),
    }
    return operations[operator];
}