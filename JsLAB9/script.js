
"use strict"

const modal = document.querySelectorAll('.modal');
const btn = document.querySelectorAll('.buttonForInputData');
const closerModalWindow = document.querySelectorAll('.closerModalWindow');

const textResponse = document.querySelectorAll('.textResponse');
const confirmer = document.querySelectorAll('.confirm');

const line1 = document.querySelectorAll('.field');

const borderModal = document.querySelectorAll('.modal');

btn[0].addEventListener('click',()=>{
    modal[0].style.cssText = "display: block;";
})

closerModalWindow[0].addEventListener('click',()=>{
    modal[0].style.cssText = "display: none;";
})

confirmer[0].addEventListener('click',()=>{
    if(line1[0].value!="" && line1[1].value!="" &&  line1[2].value!="")
    {
        let firstLine = line1[0].value;
        let secondLine = line1[1].value;
        let thirdLine = line1[2].value;
    
        console.log(firstLine);
        console.log(secondLine);
        console.log(thirdLine);
    
        textResponse[0].innerHTML = "Прізвище працівника : " + firstLine + "</br>" +
                                     "Нарахована зарплата : " + secondLine + "</br>"+
                                     "Знятий податок : " + thirdLine + "</br>";
    
        line1[0].value="";
        line1[1].value="";
        line1[2].value="";
        setTimeout(()=>{modal[0].style.cssText = "display: none;";},500)
        

    }
    else{
        alert("Дані незаповненні!!!");
    }

})
