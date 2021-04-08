'use strict'

const img = document.getElementById("img");

const buttons = document.getElementById("buttons");

let colorIndex = 0;

let intervaliD = null;

const luz = (event) => {
    parar();
    ligar[event.target.id]();
}

const proximaIndex = () => {
    if (colorIndex < 2){
        ++colorIndex
    }else{
        colorIndex = 0;
    }
}

const mudaCor = () => {
    const cores = ['red', 'yellow' , 'green'];
    const color = cores[colorIndex];
    ligar[color]();
    proximaIndex();
}

const parar = () => {
    clearInterval(intervaliD);
} 

const ligar = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
   'automatic': () => intervaliD = setInterval(mudaCor, 1000) 
}

buttons.addEventListener('click', luz);