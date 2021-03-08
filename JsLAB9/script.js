"use strict";

const btns = document.querySelectorAll('.col');
const answer = document.querySelector('.answer');
const row = document.querySelector('.expression');
const ziro = document.querySelector('.col-6');

let result = 0;


let isDigitPress = false;
let laterOperation = "";

let expression = '';

btns[0].addEventListener('click',()=>{
    console.log("C");
    answer.innerHTML = "";
    expression='';
    row.innerHTML = '';
})

btns[1].addEventListener('click',()=>{
    console.log(laterOperation);
    answer.innerHTML = "";
    row.innerHTML = '';
})

btns[2].addEventListener('click',()=>{
    console.log("*");
    expression+='*';
    row.innerHTML = expression;
    answer.innerHTML = "=" + eval(expression);
})

btns[3].addEventListener('click',()=>{
    console.log("/");
    answer.innerHTML = "/";
    expression+='/';
    row.innerHTML = expression;
})

btns[4].addEventListener('click',()=>{
    console.log("7");
    answer.innerHTML = "7";
    expression+='7';
    row.innerHTML = expression;
    answer.innerHTML = "=" + eval(expression);

})

btns[5].addEventListener('click',()=>{
    console.log("8");
    answer.innerHTML = "8";
    expression+='8';
    row.innerHTML = expression;
    answer.innerHTML = "=" + eval(expression);
})

btns[6].addEventListener('click',()=>{
    console.log("9");
    expression+='9';
    row.innerHTML = expression;
    answer.innerHTML = eval(expression);
})

btns[7].addEventListener('click',()=>{
    console.log("-");
    expression+='-';
    row.innerHTML = expression;
    answer.innerHTML = "-";
})

btns[8].addEventListener('click',()=>{
    console.log("4");
    answer.innerHTML = "4";
    expression+='4';
    row.innerHTML = expression;
    answer.innerHTML = "=" + eval(expression);
})

btns[9].addEventListener('click',()=>{
    console.log("5");
    answer.innerHTML = "5";
    expression+='5';
    row.innerHTML = expression;
    answer.innerHTML = "=" + eval(expression);
})

btns[10].addEventListener('click',()=>{
    console.log("6");
    answer.innerHTML = "6";
    expression+='6';
    row.innerHTML = expression;
    answer.innerHTML = "=" + eval(expression);
})

btns[11].addEventListener('click',()=>{
    console.log("+");
    answer.innerHTML = "+";
    expression+='+';
    answer.innerHTML = "=" + eval(expression);
})

btns[12].addEventListener('click',()=>{
    console.log("1");
    answer.innerHTML = "1";
    expression+='1';
    row.innerHTML = expression;
    answer.innerHTML = "=" + eval(expression);
})

btns[13].addEventListener('click',()=>{
    console.log("2");
    answer.innerHTML = "2";
    expression+='2';
    row.innerHTML = expression;
    answer.innerHTML = "=" + eval(expression);
})

btns[14].addEventListener('click',()=>{
    console.log("3");
    answer.innerHTML = "3";
    expression+='3';
    row.innerHTML = expression;
    answer.innerHTML = "=" + eval(expression);
})

btns[15].addEventListener('click',()=>{
    console.log("=");
    console.log("Excpression="+expression);

    answer.innerHTML = "=" + eval(expression);

})

btns[16].addEventListener('click',()=>{
    console.log(".");
    answer.innerHTML = ".";
    expression+='.';
    row.innerHTML = expression;
    answer.innerHTML = "=" + eval(expression);
})

btns[17].addEventListener('click',()=>{
    console.log("√");
    answer.innerHTML = "√";
})

btns[18].addEventListener('click',()=>{
    console.log("e");
    answer.innerHTML = "e";
})

btns[19].addEventListener('click',()=>{
    console.log("^");
    answer.innerHTML = "^";
})

btns[20].addEventListener('click',()=>{
    console.log("sin");
    answer.innerHTML = "sin";
})

btns[21].addEventListener('click',()=>{
    console.log("cos");
    answer.innerHTML = "cos";
})

btns[22].addEventListener('click',()=>{
    console.log("(");
    answer.innerHTML = "(";
    expression+='(';
    row.innerHTML = expression;
    answer.innerHTML = "=" + eval(expression);
})

btns[23].addEventListener('click',()=>{
    console.log(")");
    answer.innerHTML = ")";
    expression+=')';
    row.innerHTML = expression;
    answer.innerHTML = "=" + eval(expression);
})

btns[24].addEventListener('click',()=>{
    console.log("ln");
    answer.innerHTML = "ln";
})

btns[25].addEventListener('click',()=>{
    console.log("^2");
    answer.innerHTML = "^2";
})

ziro.addEventListener('click',()=>{
    console.log("0");
    answer.innerHTML = "0";
    expression+='0';
    row.innerHTML = expression;
    answer.innerHTML = "=" + eval(expression);
})