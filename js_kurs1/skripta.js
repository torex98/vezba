/*
let brend = document.getElementsByTagName('span');

for(let auto of brend) {
	console.log(auto.innerText);
}

console.log('------------------');

let modeli = document.getElementsByClassName('model');

for(let model of modeli) {
	console.log(model.innerText);
}

console.log('------------------');


let najbolji = document.getElementById('recenica'); //SAMO JEDAN ELEMENT!!!

console.log(najbolji.innerText);



//SLEKTOVANJE SPANOVA 

brend = document.querySelectorAll('span');
console.log(brend);

for(let auto of brend){
	console.log(auto.innerText);
}
console.log('------------------');


let modeli = document.querySelectorAll('.modeli');

for(let model of modeli){
	console.log(model.innerText);
}

let recenica = document.querySelector('#recenica'); //#recenica id kroz css

console.log(recenica.innerText);

*/
//Selektovanje elementa po ID-u i brisanje iz HTML-a

let recenica = document.querySelector('#recenica');
	recenica.remove();

//Kreiranje novog DIV elementa

let novi_el = document.createElement('div');

//dodavanje klase DIV elementu
novi_el.classList ='novi_element'

//dodavanje teksta elementu
//novi_el.innerText = 'Pozdrav!!!!';

novi_el.innerHTML = '<hr> POZDRAV!!!';

let body = document.querySelector('body');
body.appendChild(novi_el);





