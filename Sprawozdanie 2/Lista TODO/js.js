const button_dod = document.querySelector('.button_dod');
var input = document.querySelector('.input');
const kontener = document.querySelector('.kontener');

class wpis{

    constructor(wpis_n){
        this.createDiv(wpis_n);
    }


createDiv(wpis_n){
    let input = document.createElement('input');
    input.value = wpis_n;
    input.disabled = true;
    input.classList.add('input_wpis');
    input.type = "text";

    let wpis_p = document.createElement('div');
    wpis_p.classList.add('wpis');

    let button_ed = document.createElement('button');
    button_ed.classList.add('button_ed');
    button_ed.innerHTML="Edytuj";

    let button_us = document.createElement('button');
    button_us.classList.add('button_us');
    button_us.innerHTML="Usuń";

    kontener.appendChild(wpis_p);
    wpis_p.appendChild(input);
    wpis_p.appendChild(button_ed);
    wpis_p.appendChild(button_us);

    button_ed.addEventListener('click', () => this.edit(input));
    button_us.addEventListener('click', () => this.remove(wpis_p));

    }
    edit(input){
        input.disabled = ! input.disabled;
    }

    remove(wpis_p){
        kontener.removeChild(wpis_p);
    }
}
function check(){
    if(input.value !=""){
        new wpis(input.value);
    }
}
button_dod.addEventListener('click', check);
