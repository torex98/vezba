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
//BRISEMO RECENICU

let recenica = document.querySelector('#recenica');
	recenica.remove();