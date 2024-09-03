function semaforo() {
    let estado = "rojo";

    while (true) {
        switch (estado) {
            case "verde":
                alert("Luz Verde: Avanza");
                estado = "amarillo";
                break;

            case "amarillo":
                alert("Luz Amarilla: Precaución");
                estado = "rojo";
                break;

            case "rojo":
                alert("Luz Roja: Detente");
                estado = "verde";
                break;

            default:
                alert("Estado desconocido");
                estado = "rojo";
                break;
        }
    }
}
semaforo();


