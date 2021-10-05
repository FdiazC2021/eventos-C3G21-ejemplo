// Eventos

// let listasalones = ["Normal"];
// listasalones.push("Mediano");
// listasalones.push("Grande");
// listasalones[2]= "Otro";
// // Cambia el valor de la posicion 2
// listasalones.pop();
// // pop borra el ultimo registro añadido a la lista
// listasalones.splice(1);
// // elmina la posicion indicada y de ahi en adelante
// listasalones.splice(1,1);
// // se ubica en la posicion 1 y elimina 1 elemento

alert(`cantiad de salones ${listasalones.length}`)
alert(listaSalones[0]);

let cliente = prompt("Escriba su nombre");
let documento = prompt("Escriba su documento");
let salon = parseInt(prompt("Escoja el tipo de salón (1. Normal / 2. Grande)"));
let meseroExtra = confirm("Desea meseros extras??");
let cantidad = 0;
let cantidadComida= 0;
let total = 0;
let nombreSalon = ["Normal", "Grande"];
let precioSalon = [1000000, 2000000];

let salonNormal = {"nombre":"Normal", "precio": 1000000};
let salonGrande = {"nombre":"Grande", "precio": 2000000};

salonNormal['precio']=800000;
// Modifica el diccionario

let precioMesero = [150000, 100000];
let precioComida = [50000, 40000];

// BUCLES:

// for (let i = 0; index < 5; i=i+1) {
//     document.write(`Vuelta ${i}` );
//     document.write("</br>");
    
// }

// for (let salon in nombreSalon) {  
//     document.write(`Dato ${i}` );
//     document.write("</br>");
// }
// // Muestra las posiciones de los datos

// for (let salon of nombreSalon) {  
//     document.write(`Dato ${i}` );
//     document.write("</br>");
// }
// // Muestra los valores de cada posicion

// while (condition) {
//     break;
// }

// do {
    
// } while (condition);

if(meseroExtras){
    cantidad = parseInt(prompt("Escriba la cantidad de meseros...."));
}
let servicioComida = confirm("Desea incluir el servicio de comida??");

if(servicioComida){
    cantidadComida = parseInt(prompt("Escriba la cantidad de platos..."));
}

let valorMesero =0;
let valorComida = 0;
// if(salon == 1){
    
    total += precioSalon[salon-1];
    valorMesero = cantidad*precioMesero[salon-1];
    valorComida = cantidadComida*precioComida[salon-1];

// }else{
//     nombreSalon = "Grande";
//     total += 2000000;
//     valorMesero = cantidad*100000;
//     valorComida = cantidadComida*40000;
// }

total += valorComida + valorMesero;

document.write(`
<h3>Estimad@, ${cliente}</h3>
<h4>La cotización para su evento es:</h4>
<ul>
    <li><b>Salón:</b> ${nombreSalon[salon-1]}</li>
    <li><b>Cantidad Meseros:</b> ${cantidad}</li>
    <li><b>Cantidad Platos:</b> ${cantidadComida}</li>
</ul>
<h3>Total cotización evento: $${total}</h3>
`);
