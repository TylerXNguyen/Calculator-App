let firstNum = "";

const output = document.querySelector(".iodisplay");
const nums = document.querySelectorAll(".nums-btn");
nums.forEach(num => {
    // Functionality for button numbers
    num.addEventListener("click", function() {
        if (num.id == "zero") {
            firstNum += "0";
        } else {
            firstNum += num.id;
        }
        output.textContent = firstNum;
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
    const operations = {
        "+" : add(a, b),
        "-" : minus(a, b),
        "*" : times(a, b),
        "/" : divide(a, b),
    }
    return operations.operator;
}

