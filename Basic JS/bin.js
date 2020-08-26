let operand;
let left;
let right;
let opFlag;
let DISP;


document.addEventListener('DOMContentLoaded', start);


function one() {
    DISP.innerText = DISP.innerText + '1';
    if(opFlag){
        right += '1';
    }
    else{
        left += '1'
    }
}
function zero() {
    DISP.innerText = DISP.innerText + '0';
    if(opFlag){
        right += '0';
    }
    else{
        left += '0'
    }
}

function clearDisp() {
    console.log("Clear");
    operand = null;
    left = 0;
    right = 0;
    opFlag = false
    DISP.innerText = '';
}

function sum() {
    DISP.innerText = DISP.innerText + '+';
    operand = '+';
    opFlag = true;
}

function sub() {
    DISP.innerText = DISP.innerText + '-';
    operand = '-';
    opFlag = true;
}

function mul() {
    DISP.innerText = DISP.innerText + '*';
    operand = '*';
    opFlag = true;
}

function div() {
    DISP.innerText = DISP.innerText + '/';
    operand = '/';
    opFlag = true;
}

function equal() {
    let leftInt = parseInt(left, 2);
    let rightInt = parseInt(right, 2);
    let result;
    if(operand == '+'){
        result = leftInt + rightInt;
    }
    else if(operand == '-'){
        result = leftInt - rightInt;
    }
    else if(operand == '*'){
       result = leftInt * rightInt;
    }
    else if(operand == '/'){
       result = parseInt(leftInt / rightInt);
    }
    
    DISP.innerText = result.toString(2);
}


function start() {
    DISP = document.getElementById('res');
    clearDisp();
}