let estudiantes = ["12345", "67890"];
let deportes = { futbol: 10, baloncesto: 5, natacion: 2 };

let salir = false;

while (!salir) {
    let codigo = prompt("Ingrese su código de estudiante:");
    let carrera = prompt("Ingrese su carrera:");
    let actividad = prompt("Ingrese la actividad deportiva (futbol, baloncesto, natacion):");

    if (estudiantes.includes(codigo)) {
        if (deportes[actividad] > 0) {
            deportes[actividad]--;
            alert("Registro exitoso en " + actividad + " para la carrera de " + carrera + ".");
        } else {
            alert("No hay cupos disponibles para " + actividad + ".");
        }
    } else {
        alert("Código de estudiante no registrado.");
    }
    salir = prompt("¿Desea salir? (s para salir)") === "s";
}
alert("Gracias por usar el sistema.");