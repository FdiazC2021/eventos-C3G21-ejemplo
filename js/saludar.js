// alert("Hola mundo segunda forma");


console.log("Mensaje por consola");

document.write("<h1>Mensaje HTML</h1>");

var nombre = "Juan";
let correo = "pachodiaz@gmail.com";
const mayor = 18;
let edad = 28;
let altura = 1.84;
let = extranjero = true;

let mensaje = "Mi nombre es "+nombre+", mi correo es "+correo+", "+
"mi edad es "+edad;

nombre = prompt("Escriba su nombre...");
correo = prompt("Escriba su correo...");
edad = parseInt(prompt("Escriba su edad..."));
altura = parseFloat(prompt("Escriba su altura....."));

let mensaje2 = `Mi nombre es ${nombre}, mi correo es ${correo}, mi edad es ${edad}`

document.write("<h2>"+mensaje+"</h2>");

if (edad>mayor){
    mensaje2 += `, Soy mayor de edad`
    
}else{
    mensaje2 += `, Soy menor de edad`
}

document.write(`<h2>${mensaje}</h2>`);