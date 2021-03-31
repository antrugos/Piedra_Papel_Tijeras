var mano1 = "Piedra";
var mano2 = "Papel";
var mano3 = "Tijeras";

var resultado = function (persona, sistema) {
    if (persona != sistema) {
        if (persona == mano1 && sistema == mano3) {
            console.log("Ganó con " + mano1);
        } else if (persona == mano2 && sistema == mano1) {
            console.log("Ganó con " + mano2);
        } else if (persona == mano3 && sistema == mano2) {
            console.log("Ganó con " + mano3);
        } else {
            console.log("Ganó el sistema");
        }
    } else if (persona == sistema) {
        console.log("Empató con el sistema");
    }
}

// OTRA FORMA DE GENERAR EL ALGORITMO
var resultado = function (persona, sistema) {
    if (persona != sistema) {
        if ((persona == mano1 && sistema == mano3) || (persona == mano2 && sistema == mano1) || (persona == mano3 && sistema == mano2)) {
            console.log("Has ganado ¡felicitaciones!");
        } else {
            console.log("El sistema ha ganado ¡Mala juegada!!");
        }
    } else if (persona == sistema) {
        console.log("Has empatado contra el sistema");
    }
}