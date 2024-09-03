let salir = false;

while (!salir) {
    let fecha = prompt("Ingrese la fecha de la reserva:");
    let horaInicio = parseInt(prompt("Ingrese la hora de inicio de la reserva (0 - 24):"));
    let duracion = parseInt(prompt("Ingrese la duración de la reserva en horas:"));
    let nombre = prompt("Ingrese su nombre o el nombre del grupo:");
9
    if (horaInicio < 8 || horaInicio >= 20) {
        alert("La hora de inicio debe estar entre las 8:00 y las 20:00. No es posible realizar la reserva.");
    } else {
        let horaFin = horaInicio + duracion;
        if (horaFin > 20) {
            alert("La reserva no puede exceder las 20:00. Ajuste la duración o la hora de inicio.");
        } else {
            alert("Reserva confirmada para el salón 305.\n" +
                  "Fecha: " + fecha + "\n" +
                  "Hora de inicio: " + horaInicio + ":00\n" +
                  "Duración: " + duracion + " horas\n" +
                  "Reservado por: " + nombre);
        }
    }
    let opcion = prompt("¿Desea realizar otra reserva? (s para salir, cualquier otra tecla para continuar)");
    if (opcion === "s") {
        salir = true;
    }
}
alert("Gracias por usar el sistema de reservas.");