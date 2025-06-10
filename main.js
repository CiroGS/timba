let plata=10000;
let cont = 0;
let intervalId = null;
let chance = 0;
let random = 0;
let num = 0;
function handleSubmit(event){
    event.preventDefault();
    num=document.querySelector('#apuesta').value;
    if(plata-num>0){
        if(intervalId !== null){
            clearInterval(intervalId);
        }
        chance = document.querySelector('#numero').value
        let n =3; 
        document.querySelector('#salida').innerHTML=''
        num = document.querySelector('#apuesta').value;
        intervalId = setInterval(tick, 75);
    }else{
        document.querySelector('#salida').textContent="SALDO INSUFICIENTE POBRE"
    }
    
    
}
function tick(){
    document.querySelector('#ale_num').textContent=Math.floor(Math.random()*10);
    cont++;
    if(cont==10){
        clearInterval(intervalId);
        intervalId = null;
        cont = 0;
        intervalId = setInterval(final, 75);
    }
}
function final(){
    clearInterval(intervalId);
    random = Math.floor(Math.random()*10);
    document.querySelector('#ale_num').textContent=random
    if(chance==random){
        plata = plata + num*10;
        document.querySelector('#saldo').textContent=plata;
        document.querySelector('#salida').textContent="Ganaste $" + num*10;
    }
    else{
        plata = plata - num;
        document.querySelector('#saldo').textContent=plata;
        document.querySelector('#salida').textContent="perdiste $" + num;
    }
    console.log(chance, random, typeof chance, typeof random);
}
