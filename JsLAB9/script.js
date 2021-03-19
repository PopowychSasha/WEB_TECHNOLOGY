
"use strict"

const fiel = document.querySelector('.fiel');
const btn = document.querySelector('.btn');
const answer = document.querySelector('.answer');

btn.addEventListener('click',()=>{
    let data = fiel.value;
    answer.innerHTML = data;
});
