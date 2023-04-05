/* Buscando los valores de la URL con la propiedad  window.location.search de JavaScript */
const paramURL = window.location.search
/* console.log(paramURL); */

//Creamos una instancia de URLSearchParams
const parametrosURL = new URLSearchParams(paramURL);

/*
Para acceder a los parámetros de la URL crearemos un objeto de tipo URLSearchParams y 
usaremos el método get() para obtener cada uno de los valores
*/
//-----------DATOS EMPRESA----------------------
const empresa = parametrosURL.get('empresa');
const sucursal = parametrosURL.get('sucursal');
const telefono = parametrosURL.get('telefono');
const nit = parametrosURL.get('nit');
const direccion = parametrosURL.get('direccion');
/* Mostrando parametros en mi HTML */
document.querySelector("#empresa").innerHTML = (empresa);
document.querySelector("#sucursal").innerHTML = (sucursal);
document.querySelector("#telefono").innerHTML = (telefono);
document.querySelector("#nit").innerHTML = (nit);
document.querySelector("#direccion").innerHTML = (direccion);

//-----------DATOS CLIENTES----------------------
const codigoCliente = parametrosURL.get('codigoCliente');
const nombreCliente = parametrosURL.get('nombreCliente');
const telefonoCliente = parametrosURL.get('telefonoCliente');
/* Mostrando parametros en mi HTML */
document.querySelector("#codigoCliente").innerHTML = (codigoCliente);
document.querySelector("#nombreCliente").innerHTML = (nombreCliente);
document.querySelector("#telefonoCliente").innerHTML = (telefonoCliente);

//-----------DATOS REGISTRO----------------------
const numeroRegistro = parametrosURL.get('numeroRegistro');
const fechaRegistro = parametrosURL.get('fechaRegistro');
const usuario = parametrosURL.get('usuario');
const telefonoUsuario = parametrosURL.get('telefonoUsuario');
/* Mostrando parametros en mi HTML */
document.querySelector("#numeroRegistro").innerHTML = (numeroRegistro);
document.querySelector("#fechaRegistro").innerHTML = (fechaRegistro);
document.querySelector("#usuario").innerHTML = (usuario);
document.querySelector("#telefonoUsuario").innerHTML = (telefonoUsuario);

//-----------DATOS TABLA PRODUCTOS----------------------
const canProducto = parametrosURL.get('canProducto');
const codigoProducto = parametrosURL.get('codigoProducto');
const Producto = parametrosURL.get('Producto');
const productoDetalle = parametrosURL.get('productoDetalle');
const precioUnitario = parametrosURL.get('precioUnitario');
const precioTotal = parametrosURL.get('precioTotal');
/*FUNCION PARA UNIR ARRAYS*/
function arrayProductos(datos1, datos2, datos3, datos4, datos5, datos6) {
    let contenido = [datos1, datos2, datos3, datos4, datos5, datos6];

    return contenido.reduce(
        (a, v) => (v.forEach((e, i) => a[i].push(e)), a),
        Array.from({
            length: Math.max(...contenido.map(d => d.length))
        }).map(d => [])
    );
}
//Convertimos en array cantidad, item, precio
const cantidadProducto = canProducto.split(" , ");
const codProducto = codigoProducto.split(" , ");
const nombreProducto = Producto.split(" , ");
const detalleProducto = productoDetalle.split(" , ");
const precioU = precioUnitario.split(" , ");
const precioT = precioTotal.split(" , ");

const ventas = arrayProductos(cantidadProducto, codProducto, nombreProducto, detalleProducto, precioU, precioT);

/* Mostrando parametros en mi HTML */
/* URL YOUTUBE https://www.youtube.com/watch?v=dDy2krKujCY
 https://www.youtube.com/watch?v=DMGiOhH8jcQ */
const tabla = document.getElementById("tabla_producto");
const cuerpoTabla = document.createElement('tbody');

ventas.forEach(p => {
    let fila = document.createElement('tr');

    fila.innerHTML += `<td class="td">${p[0]}</td>`
    fila.innerHTML += `<td class="td">${p[1]}</td>`
    fila.innerHTML += `<td class="tdProducto">${p[2]}</td>`
    fila.innerHTML += `<td class="tdProductoD">${p[3]}</td>`
    fila.innerHTML += `<td class="td">${p[4]}</td>`
    fila.innerHTML += `<td class="td">${p[5]}</td>`

    cuerpoTabla.appendChild(fila);
});
tabla.appendChild(cuerpoTabla);

//-----------DATOS PRECIOS CAJA----------------------
const subTotal = parametrosURL.get('subTotal');
const impuesto = parametrosURL.get('impuesto');
const descuento = parametrosURL.get('descuento');
const total = parametrosURL.get('total');
// Mostrando parametros en mi HTML
document.querySelector("#subTotal").innerHTML = (subTotal);
document.querySelector("#impuesto").innerHTML = (impuesto);
document.querySelector("#descuento").innerHTML = (descuento);
document.querySelector("#total").innerHTML = (total);

//-----------DATOS PAGOS----------------------
const pagado = parametrosURL.get('pagado');
const pago = parametrosURL.get('pago');
const tipoPago = parametrosURL.get('tipoPago');
const fechaPago = parametrosURL.get('fechaPago');
/*FUNCION PARA UNIR ARRAYS*/
function arrayPagos(datos1, datos2, datos3, datos4) {
    let contenido = [datos1, datos2, datos3, datos4];

    return contenido.reduce(
        (a, v) => (v.forEach((e, i) => a[i].push(e)), a),
        Array.from({
            length: Math.max(...contenido.map(d => d.length))
        }).map(d => [])
    );
}
//Convertimos en array cantidad, item, precio
const pagadoP = pagado.split(" , ");
const pagoP = pago.split(" , ");
const tipoPagoP = tipoPago.split(" , ");
const fechaPagoP = fechaPago.split(" , ");

const tablaPagos = arrayPagos(pagadoP, pagoP, tipoPagoP, fechaPagoP);
console.log(tablaPagos)
// Mostrando parametros en mi HTML
/* URL YOUTUBE https://www.youtube.com/watch?v=dDy2krKujCY
 https://www.youtube.com/watch?v=DMGiOhH8jcQ */
 const tablaP = document.getElementById("tabla_pagos");
 const bodyPagos = document.createElement('tbody');
 
 tablaPagos.forEach(p => {
     let fila = document.createElement('tr');
 
     fila.innerHTML += `<td class="pagado">${p[0]}</td>`
     fila.innerHTML += `<td>${p[1]}</td>`
     fila.innerHTML += `<td>${p[2]}</td>`
     fila.innerHTML += `<td>${p[3]}</td>`
 
     bodyPagos.appendChild(fila);
 });
 tablaP.appendChild(bodyPagos);

 //-----------DATOS FALTANTE----------------------
 const faltante = parametrosURL.get('faltante');
 // Mostrando parametros en mi HTML
document.querySelector("#faltante").innerHTML = (faltante);

 //-----------DATOS ESTADO----------------------
 const estadoR = parametrosURL.get('estado');
 // Mostrando parametros en mi HTML
document.querySelector("#estadoRegistro").innerHTML = (estadoR);

//-----------DATOS FIRMAS----------------------
const firmaNombreCliente = parametrosURL.get('nombreCliente');
const firmaNombrePropietario = parametrosURL.get('firmaNombrePropietario');
 // Mostrando parametros en mi HTML
document.querySelector("#firmaNombreCliente").innerHTML = (firmaNombreCliente);
document.querySelector("#firmaNombrePropietario").innerHTML = (firmaNombrePropietario)

//-----------DATOS TENGA EN CUENTA----------------------
const tengaEnCuenta = parametrosURL.get('tengaEnCuenta');
 // Mostrando parametros en mi HTML
document.querySelector("#tengaEnCuenta").innerHTML = (tengaEnCuenta);

