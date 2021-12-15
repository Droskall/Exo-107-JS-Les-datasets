// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');

// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');

p1.innerHTML = p1.dataset.nombre = (parseInt(p1.dataset.nombre) + 10).toString();

p2.innerHTML = p2.dataset.chaine = (parseInt(p2.dataset.chaine.length)).toString();

p3.innerHTML = p3.dataset.liste.split('|');

let bool = p4.dataset.boolean;
bool.toLowerCase() === 'true';

if (bool){
    p4.innerHTML += ' La valeur est true'
}
else {
    p4.innerHTML += ' La valeur est false'
}

p5.dataset.nombre = '21';
p6.dataset.chaine = 'jette un sous';
p7.dataset.list = 'epee|hache|dague';
p8.dataset.boolean = 'false';

p5.innerHTML = p5.dataset.nombre = (parseInt(p5.dataset.nombre) + 10).toString();

p6.innerHTML = p6.dataset.chaine = (parseInt(p6.dataset.chaine.length)).toString();

p7.innerHTML = p7.dataset.liste.split('|');

let bool2 = p8.dataset.boolean;
bool2.toLowerCase() === 'true';

if (bool2){
    p8.innerHTML === ' La valeur est true';
}
else {
    p8.innerHTML === ' La valeur est false';
}