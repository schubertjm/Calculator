//assigns functions to specific keypress ids
$(document).on("keypress", function (e) {
    if (e.which == 46) {press('.')}
    else if (e.which == 48) {press(0)}
    else if (e.which == 49) {press(1)}
    else if (e.which == 50) {press(2)}
    else if (e.which == 51) {press(3)}
    else if (e.which == 52) {press(4)}
    else if (e.which == 53) {press(5)}
    else if (e.which == 54) {press(6)}
    else if (e.which == 55) {press(7)}
    else if (e.which == 56) {press(8)}
    else if (e.which == 57) {press(9)}
    else if (e.which == 43) {setOP('+')}
    else if (e.which == 45) {setOP('-')}
    else if (e.which == 42) {setOP('*')}
    else if (e.which == 47) {setOP('/')}
    else if (e.which == 13) {calculate ()} //Enter
    else if (e.which == 61) {calculate ()}
    else if (e.which == 99) {clr ()} //c
});

//Pull in number entry
var numPressed = 0;
var numDisplay = 0;
var opPressed = "";
var opPrevious = "";
var runningTotal = 0;
var runningTotalDisplay = 0;
var equalCount = 0;

function press(element) {
    numPressed = element;
    numDisplay = document.querySelector("#display").innerHTML
    if (numDisplay == 0) {
        numDisplay = numPressed
    }
    else {
        numDisplay = numDisplay + numPressed;
    }
    document.querySelector("#display").innerHTML = numDisplay
    return numDisplay;
}

//document.addEventListener("keypress.7", press(7));
//object.onkeydown = press(7);

//clear
function clr() {
    document.querySelector("#display").innerHTML = 0
    document.querySelector("#displayRunningTotal").innerHTML = 0
    opPressed = "";
    opPrevious = "";
    runningTotal = 0;
    runningTotalDisplay = 0;
    numDisplay = 0;
    numPressed = 0;
    equalCount = 0;
    return opPressed, runningTotal, numDisplay, numPressed, equalCount;
}

//operator
function setOP (element) {
    opPressed = element;
    if (runningTotalDisplay == 0) {
        runningTotal = Number(numDisplay);
        runningTotalDisplay = numDisplay + " " + opPressed;
        console.log ("Initial Operator " + runningTotal)
    }
    else if (equalCount > 0) {
        runningTotalDisplay = runningTotalDisplay + " " + opPressed ;
        console.log ("Operator after equal " + runningTotal)
    }
    else {
        runningTotalDisplay = runningTotalDisplay + " " + numDisplay + " " + opPressed ;
        if (opPrevious == "+") {
            runningTotal = Number(runningTotal) + Number(numDisplay);
        }
        else if (opPrevious == "-") {
            runningTotal = Number(runningTotal) - Number(numDisplay);
        }
        else if (opPrevious == "*") {
            runningTotal = Number(runningTotal) * Number(numDisplay);
        }
        else if (opPrevious == "/") {
            runningTotal = Number(runningTotal) / Number(numDisplay);
        }
        else {
            alert ("Error in operator")
        }
        console.log ("Operator after operator " + runningTotal)
    }
    opPrevious = opPressed;
    document.querySelector("#display").innerHTML = 0
    document.querySelector("#displayRunningTotal").innerHTML = runningTotalDisplay
    return opPressed, runningTotal, runningTotalDisplay
}

//calculate the values
function calculate () {
    if (opPrevious == "") {
        if (opPressed == "+") {
            runningTotal = Number(runningTotal) + Number(numDisplay);
        }
        else if (opPressed == "-") {
            runningTotal = Number(runningTotal) - Number(numDisplay);
        }
        else if (opPressed == "*") {
            runningTotal = Number(runningTotal) * Number(numDisplay);
        }
        else if (opPressed == "/") {
            runningTotal = Number(runningTotal) / Number(numDisplay);
        }
        else {
            alert ("Error in operator")
        }
        console.log ("After equal " + runningTotal)
    }
    else {
        if (equalCount > 0) {
            if (opPressed == "+") {
                runningTotal = Number(runningTotal) + Number(numDisplay);
            }
            else if (opPressed == "-") {
                runningTotal = Number(runningTotal) - Number(numDisplay);
            }
            else if (opPressed == "*") {
                runningTotal = Number(runningTotal) * Number(numDisplay);
            }
            else if (opPressed == "/") {
                runningTotal = Number(runningTotal) / Number(numDisplay);
            }
            else {
                alert ("Error in operator")
            }
            console.log ("After multiple equals " + runningTotal)
        }
        else {
            if (opPressed == "+") {
                runningTotal = Number(runningTotal) + Number(numDisplay);
            }
            else if (opPressed == "-") {
                runningTotal = Number(runningTotal) - Number(numDisplay);
            }
            else if (opPressed == "*") {
                runningTotal = Number(runningTotal) * Number(numDisplay);
            }
            else if (opPressed == "/") {
                runningTotal = Number(runningTotal) / Number(numDisplay);
            }
            else {
                alert ("Error in operator")
            }
            console.log ("After multiple equals " + runningTotal)
        }
    }
    equalCount ++;
    runningTotalDisplay = runningTotalDisplay + " " + numDisplay + " = " + runningTotal
    document.querySelector("#display").innerHTML = runningTotal
    document.querySelector("#displayRunningTotal").innerHTML = runningTotalDisplay
    return numDisplay, runningTotal, runningTotalDisplay;
}