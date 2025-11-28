let colorActual = "Rojo";
let opcionMenu = 0;

opcionMenu = parseInt(prompt(
    "=== SISTEMA DE SEMÁFORO ===\n" +
    "1) Acción para vehículo\n" +
    "2) Acción para peatón\n" +
    "3) Cambiar color\n" +
    "4) Ver color actual\n" +
    "5) Terminar\n\n" +
    "Ingrese una opción:"
));

while (opcionMenu !== 5) {

    if (isNaN(opcionMenu) || opcionMenu < 1 || opcionMenu > 5) {
        console.log("Opción inválida. Intente nuevamente.");
    } else {

        console.log("Usted seleccionó: " + opcionMenu);

        switch (opcionMenu) {

            case 1:
                console.log("=== INDICACIÓN PARA VEHÍCULO ===");
                switch (colorActual) {
                    case "Rojo":
                        console.log("Debe DETENERSE.");
                        break;
                    case "Amarillo":
                        console.log("Precaución, reduzca la velocidad.");
                        break;
                    case "Verde":
                        console.log("Puede avanzar.");
                        break;
                }
                break;

            case 2:
                console.log("=== INDICACIÓN PARA PEATÓN ===");
                if (colorActual === "Rojo") {
                    console.log("Puede cruzar la calle");
                } else if (colorActual === "Amarillo") {
                    console.log("No inicie a cruzar");
                } else if (colorActual === "Verde") {
                    console.log("Espere, no cruce");
                }
                break;

            case 3:
                console.log("=== CAMBIO DE COLOR ===");
                if (colorActual === "Rojo") {
                    colorActual = "Verde";
                } else if (colorActual === "Verde") {
                    colorActual = "Amarillo";
                } else {
                    colorActual = "Rojo";
                }
                console.log("Nuevo estado del semáforo: " + colorActual);
                break;

            case 4:
                console.log("=== ESTADO ACTUAL ===");
                console.log("El semáforo está en: " + colorActual);
                break;
        }
    }

    opcionMenu = parseInt(prompt(
        "--- SEMÁFORO ---\n" +
        "1) Acción vehículo\n" +
        "2) Acción peatón\n" +
        "3) Avanzar\n" +
        "4) Mostrar estado\n" +
        "5) Salir\n\n" +
        "Seleccione otra opción:"
    ));
}

console.log("Sistema finalizado gracias por usar el semáforo inteligente.");
;








