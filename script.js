
function appendToDisplay(value) {
    let userInput = document.querySelector("#userInput");
    userInput.value += value;
}

function clearResult() {
    let userInput = document.querySelector("#userInput");
    userInput.value = "";
}

function calculateResult() {
    let userInput = document.querySelector("#userInput");
    let result = userInput.value
    try {
        userInput.value = eval(userInput.value)
        
    }
    catch (error) {
        userInput.value = "Error";
    }
}
