let origen = prompt("Origen del viaje:");
let destino = prompt("Destino del viaje (A, B, C):");
let fecha = prompt("Fecha del viaje (DD/MM/AAAA):");
let hora = prompt("Hora del viaje (ejemplo: 12:45):");
let tipoTiquete = prompt("Tipo de tiquete (ida / ida y vuelta):");

let costo = 50;
if (destino === "A") costo += 20;
if (destino === "B") costo += 30;
if (destino === "C") costo += 40;
if (tipoTiquete === "ida y vuelta") costo *= 1.5;

alert(`Resumen:
    Origen: ${origen}
    Destino: ${destino}
    Fecha: ${fecha}
    Hora: ${hora}
    Costo: $${costo}`);

if (prompt("Confirmar compra? (si/no):") === "si") {
    alert("Compra exitosa");
} else {
    alert("Compra cancelada");
}


