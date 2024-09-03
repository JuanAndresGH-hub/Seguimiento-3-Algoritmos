
let salir = false;

while (!salir) {
    let edad = parseInt(prompt("Ingrese su edad:"));
    if (edad < 18) {
        alert("Lo sentimos, no puede suscribirse al gimnasio si es menor de edad.");
        salir = true;
        continue;
    }
    let plan = prompt("Ingrese el tipo de plan de suscripción (mensual, trimestral, anual):");

    let costoTotal = 0;
    let cuotas = 1;

    switch (plan) {
        case "mensual":
            costoTotal = 50;
            break;
        case "trimestral":
            cuotas = parseInt(prompt("Ingrese el número de cuotas (1-3):"));
            costoTotal = cuotas * 45; 
            break;
        case "anual":
            cuotas = parseInt(prompt("Ingrese el número de cuotas (1-12):"));
            costoTotal = cuotas * 40;
            break;
        default:
            alert("Tipo de plan no válido. Inténtelo de nuevo.");
            continue;
    }
    alert(`Gracias por inscribirte al gimnasio, el costo total de tu suscripcion es ${costoTotal}, el numero de cuotas es ${cuotas}`)

    let opcion = prompt("¿Desea salir del programa? (s para salir, cualquier otra tecla para continuar)");
    if (opcion === "s") {
        salir = true;
    }
}
alert("Gracias por usar el programa de suscripción a un gimnasio.");