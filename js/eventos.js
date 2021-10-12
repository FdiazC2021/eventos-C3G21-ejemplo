

let celdas = document.getElementsByTagName("th");

let texto_h2 = document.querySelector("h2");

let salonNormal = {"nombre":"Normal", 
                    "precio": 1000000, 
                    "extra_mesero":150000,
                    "cantidad_meseros":2, 
                    "plato":50000
                };
let salonGrande = {"nombre":"Grande", 
                    "precio": 2000000, 
                    "extra_mesero":100000,
                    "cantidad_meseros":4, 
                    "plato":40000
                };

let listaSalones = [salonNormal, salonGrande];

const limpiarFormulario = ()=>{
    let formulario = document.getElementById("formulario_evento");

    let ipCliente = formulario.cliente;
    ipCliente.value="";
    
    // formulario.reset();
    

}

const procesarInformacion = ()=>{
    
    let formulario = document.getElementById("formulario_evento");

    let evento = {};
    evento['cliente'] = formulario.cliente.value;
    evento['documento'] = formulario.documento.value;
    let salon = formualrio.salon.value;
    evento['salon'] = listaSalones[salon-1];
    let meseroExtra = formulario.meseros_extra.value;
    if(meseroExtra=="Si"){
        evento['meseros'] = formulario.cantidad.value;
    }else{
        evento['meseros']=0;
    }
    
    let servicioComida = formulario.servicio_comida.value;
    
    if(servicioComida=="Si"){
       evento['platos'] = formulario.platos.value;
   }else{
       evento['platos']=0;
   }

   let valorMesero = evento.meseros*evento.salon.extra_mesero;
   let valorComida = evento.platos*evento.salon.plato;

   evento['total'] = valorComida + valorMesero + evento.salon.precio;

   limpiarFormulario();

    // let input_cliente = formulario.cliente 
    // console.log(input_cliente)
    // alert("hice click........");


};


// document.write(formulario);
// alert(formulario);
// console.log(formulario);