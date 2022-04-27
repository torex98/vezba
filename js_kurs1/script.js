/*
 window.open() otvara novi tab
console.log("ispisivanje loga/teksta u konzooli")
console.warn('ispisivanje upozorenja u konzoli')
console.error('ispisivanje greske u konzoli')
document.getElementById('poruka').innerText = 'poruka u DIV kroz skriptu'
//etc 

console.log(5 + 5)
console.error(5 === 6)

let cysecor; //let je varijabla; 
//console.log(typeof(ime varijable)) u konzoli ispisuje tip promenljive (number,string,itd)

window.alert('OVAJ SAJT SADRZI NSFW')
let broj1 = 17
let broj2 = 13
let rez = broj1 + broj2
document.write(rez)

// sada broj1 pisemo kao string a zatim rezultat ispisujemo u konzolu
let broj11 = '17'
let broj22 = 13
let rezz = broj11 + broj22
console.log(rezz) // rezultat je 1713

// sada broj1 pisemo kao string,KONVERTUJEMO U INT i zatim rezultat ispisujemo u konzolu

let broj111 = '17'
let broj222 = 13
broj111 = parseInt(broj111)
console.log(typeof(broj111))
let rezzz = broj111 + broj222
console.log(rezzz)


//ZAMENA MESTA VARIJABLAMA

let br1 = 4;
let br2 = 6;
let br3;

br3 = br1;
br1 = br2;
br2 = br3;

console.log(`Prvi broj: ${br1},\nDrugi broj: ${br2}`);

console.log((br1 > br3) && (br3 < br2)); //oba moraju biti tacna da bi pisalo true
//logicki operater || je ili , stampa true ako jedan od iskaza tacan 


// if ; else if ; else


let time = 10;

if(time < 10) {
    console.log('Dobro jutro');
} else if(time < 20) {
    console.log('Dobar dan')
} else if {
    console.log('Dobro vece')
}


// MESECI


let month = 6;

if(month === 1) {
    console.loh('Januar');
}
else if(month === 2) {
    console.log('Februar');
}
else if(month === 6) {
    console.log('Jun');
}

//laksi nacin

let month = 1;

switch(month) {
    case 1:
        console.log('januar');
        break;
    case 2:
        console.log('februar');
        break;
    case 3:
        console.log('mart');
        break;
    case 4:
        console.log('april');
        break;
    case 5:
        console.log('maj');
        break;
}

// WHILE  PETLJA ; BROJAC NOVCANICA

let novcanice = 25;
let vrednostnovcanice = 10;
let brojac = 0;
let izbrojanenovcanice = 0;

while(izbrojanenovcanice < novcanice) {
    izbrojanenovcanice++;
}
console.log(izbrojanenovcanice * vrednostnovcanice);

//novi primer

let novcanice = [10, 5 , 20, 50, 100, 20, 50, 5]; //novcanice.length broji koliko clanova ima u nizu 
let brojnovcanica = novcanice.length;
let brojac = 0 ;

while(brojac < brojnovcanica){
   // brojac ++ ;
    console.log(novcanice[brojac]); //da ne bi pisao console.log(novcanice[10]);

  brojac ++ ;
     }

//jos laksi primer jer koristimo FOR petlju

let novcanice = [200, 10, 5, 20, 50, 10, 100];
let brojnovcanica = novcanice.length;
let ukupnonovca = 0;
for(let brojac = 0; brojac < brojnovcanica; brojac++){
    
//stampa novcanice onoliko puta koliko je brojac izbrojao,u suprotnom nece prekinuti sa stampom
    console.log(novcanice[brojac]); 
    ukupnonovca = ukupnonovca + novcanice[brojac]; //ukupnonovca += novcanice[brojac]
}
console.log(`###KRAJ PETLJE###\nUkupno imamo ${ukupnonovca} eura`);

//SAD JOS LAKSI NACIN

let novcanice = [200, 10, 5, 20, 50, 10, 100];


for(let brojac in novcanice){

//zatim jos laksi nacin

let novcanice = [200, 10, 5, 20, 50, 10, 100];
let ukupno_novca = 0;

for(let novcanica of novcanice){
        console.log(novcanica);
          ukupno_novca += novcanice[novcanica];

}
    console.log(`###KRAJ PETLJE###\nUkupno imamo ${ukupno_novca} eura`); //ne radi

//PRIMER SA AUTOMOBILIMA

let automobili = ['Audi', 'BMW', 'Porsche', 'Mercedes'];

automobili.forEach(function (automobil){
    console.log(automobil);
});

//Jos jedan primer sa objektima

let automobili = {
    audi: ['70000', '2017', 'Q7'],
    bmw: ['60000', '2018', '330D'],
    porsche: ['80000', '2016', 'Macan'],
    mercedes: ['100.000', '2019', 'S400']
};
for(automobil in automobili){
    let    naziv = automobil;
    let podaci_vozila = automobili[automobil];
    console.log(`${naziv} model: ${podaci_vozila[2]},
        godiste: ${podaci_vozila[1]},
        cena: ${podaci_vozila[0]} eura.`);
}

//RACUNANJE MESECNE RATE

let nekretnine = {
    stan: 70000,
    kuca: 150000,
    plac: 30000
};

racunanje_mesecne_rate(15, 'stan');

racunanje_mesecne_rate(5, 'plac');

racunanje_mesecne_rate(19, 'kuca');


function racunanje_mesecne_rate(godine, vrsta_nekretnine) {
    let meseci = godine * 12;
    let rata = nekretnine[vrsta_nekretnine] / meseci;
    rata = rata.toFixed(2);

    console.log(`#############\nMesecna rata za ${vrsta_nekretnine} iznosi ${rata} na ${godine} godina.`);
}
*/
let novcanice = [200, 10, 5, 20, 50, 10, 100];
let ukupno_novca = 0;

for(let novcanica of novcanice){
        console.log(novcanica);
          ukupno_novca += novcanica;

}
    console.log(`###KRAJ PETLJE###\nUkupno imamo ${ukupno_novca} eura`); 