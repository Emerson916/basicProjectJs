const onOff = document.getElementById('onOff');
const lamp = document.getElementById('lamp');

function estaQuebrada (){
    return lamp.src.indexOf ('quebrada') > -1;
}

function lampOn (){
    if (!estaQuebrada()){
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff (){
    if (!estaQuebrada()){
        lamp.src = './img/desligada.jpg';
    }
}

function quebrada (){
    lamp.src = './img/quebrada.jpg';
}

function lampOnOff (){
    if(onOff.textContent == 'Ligar'){
        lampOn();
        onOff.textContent = 'Desligar';
    }else{
        lampOff();
        onOff.textContent = 'Ligar';
    }
}

onOff.addEventListener('click', lampOnOff);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick' , quebrada)