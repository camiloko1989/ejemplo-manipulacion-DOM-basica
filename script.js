/*const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo1 = document.getElementsByClassName('.parrafo1');
const parrafo2 = document.getElementById('parrafo2');
const input = document.querySelector('input')

console.log(h1)

console.log({
    h1,
    p,
    parrafo1,
    parrafo2,
    input,
});

//h1.innerHTML = 'Este es otro titulo <br> Con algo más'
h1.innerText = 'Este es otro titulo <br> Con algo más'
//console.log(h1.getAttribute('class')) //obtener el atributo class de la etiqueta H1
//h1.setAttribute('class','rojo') //Modifica la clase 
h1.classList.add('rojo') //añade una clase llamada rojo
h1.classList.remove('verde') //elimina la clase verde

input.value = "456" //añade un valor al input

//console.log(document.createElement('img')) //añade una imagen
console.log(document.createElement('span')) //añade una span

const img = document.createElement('img');
img.setAttribute('src', 'https://www.adobe.com/es/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpg');
parrafo2.append(img);*/


const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const result = document.querySelector('#result')
const form = document.querySelector('#form')

form.addEventListener('submit', sumarValues);

function sumarValues(event){ // convierte los resultados en INT antes de sumar
    console.log({event})
    event.preventDefault();
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);
    const suma = num1 + num2;
    result.innerText = "Resultado: " + suma;
    //console.log(input1.value + input2.value)

}