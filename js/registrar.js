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

// alert(`cantiad de salones ${listasalones.length}`)
// alert(listaSalones[0]);

// let cliente = prompt("Escriba su nombre");
// let documento = prompt("Escriba su documento");
// let salon = parseInt(prompt("Escoja el tipo de salón (1. Normal / 2. Grande)"));
// let meseroExtra = confirm("Desea meseros extras??");
// let cantidad = 0;
// let cantidadComida= 0;
// let total = 0;
// let nombreSalon = ["Normal", "Grande"];
// let precioSalon = [1000000, 2000000];


// salonNormal['precio']=800000;
// // Modifica el diccionario

// document.write(`Precio: ${salonNormal.precio}`);
// console.log(salonNormal);

// let precioMesero = [150000, 100000];
// let precioComida = [50000, 40000];

// function saludar(nombre) {
//     // document.write(`Hola ${nombre} Mundo desde función`);
//     return `Hola ${nombre} Mundo desde función`;
// }

const saludar = (nombre, edad)=>{
    if (edad>=18) {
        document.write(`Hola ${nombre} mayor de edad..`)
    } else {
        document.write(`Hola ${nombre} menor de edad..`)
        
    }
};

const saludar_abreviado = (nombre)=> `Hola ${nombre}, con funcion flecha abreviada`;

// funcion de flecha

let mensaje = saludar("Juan", 15);
document.write(mensaje);


// let salonNormal = {"nombre":"Normal", 
//                     "precio": 1000000, 
//                     "extra_mesero":150000,
//                     "cantidad_meseros":2, 
//                     "plato":50000
//                 };
// let salonGrande = {"nombre":"Grande", 
//                     "precio": 2000000, 
//                     "extra_mesero":100000,
//                     "cantidad_meseros":4, 
//                     "plato":40000
//                 };

// let listaSalones = [salonNormal, salonGrande];
// let listaEventos = [];

// let continuar;

// do {
    
//     let evento = {};
//     evento['cliente'] = prompt("Escriba su nombre");
//     evento['documento'] = prompt("Escriba su documento");
//     let salon = parseInt(prompt("Escoja el tipo de salón (1. Normal / 2. Grande)"));
//     evento['salon'] = listaSalones[salon-1];
//     let meseroExtra = confirm("Desea meseros extras??");
//     if(meseroExtra){
//         evento['meseros'] = parseInt(prompt("Escriba la cantidad de meseros...."));
//     }else{
//         evento['meseros']=0;
//     }
    
//     let servicioComida = confirm("Desea incluir el servicio de comida??");
    
//     if(servicioComida){
//         evento['platos'] = parseInt(prompt("Escriba la cantidad de platos..."));
//     }else{
//         evento['platos']=0;
//     }

    
//     let valorMesero = evento.meseros*evento.salon.extra_mesero;
//     let valorComida = evento.platos*evento.salon.plato;

//     evento['total'] = valorComida + valorMesero + evento.salon.precio;

//     listaEventos.push(evento);
//     continuar = confirm("Registrar un nuevo evento?");

// } while (continuar);

// let xhtml = `<table>
//                 <thead>
//                     <tr>
//                         <th>CLIENTE</th>
//                         <th>SALON</th>
//                         <th>MESEROS</th>
//                         <th>PLATOS</th>
//                         <th>TOTAL</th>
//                     </tr>
//                 </thead>
//                 <tbody>`;

// for (let evento of listaEventos) {
    
//     let meseros = parseInt(evento.meseros) + parseInt(evento.salon.cantidad_meseros);
//     xhtml += `<tr>
//                 <td>${evento.cliente} - ${evento.documento}</td>
//                 <td>${evento.salon.nombre}</td>
//                 <td>${meseros}</td>
//                 <td>${evento.platos}</td>
//                 <td>$${evento.total}</td>
//             </tr>`;

// }

// xhtml +=  `</tbody>
//         </table>`;


// document.write(xhtml);

// let evento = {
//     "cliente": "Juan",
//     "documento": 123456,
//     "salon": salonNormal,
//     "meseros": 0,
//     "platos":0,
//     "descuento":0,
//     "total":0

// }


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

// if(meseroExtras){
//     cantidad = parseInt(prompt("Escriba la cantidad de meseros...."));
// }
// let servicioComida = confirm("Desea incluir el servicio de comida??");

// if(servicioComida){
//     cantidadComida = parseInt(prompt("Escriba la cantidad de platos..."));
// }

// let valorMesero =0;
// let valorComida = 0;
// // if(salon == 1){
    
//     total += precioSalon[salon-1];
//     valorMesero = cantidad*precioMesero[salon-1];
//     valorComida = cantidadComida*precioComida[salon-1];

// }else{
//     nombreSalon = "Grande";
//     total += 2000000;
//     valorMesero = cantidad*100000;
//     valorComida = cantidadComida*40000;
// }

// total += valorComida + valorMesero;

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
