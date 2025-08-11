/**
 * Función encarga de elegir un ganador segun la puntuación de la computadora y el jugador
 * @param {Number} puntosJugador 
 * @param {Number} puntosComputadora 
 */
export const validarGanador = (puntosJugador, puntosComputadora) => {
    let mensaje = '';

    if(puntosComputadora === puntosJugador){
        mensaje = 'Empate, nadie gana. Intenta de nuevo!';
    }else if(puntosComputadora > puntosJugador && puntosComputadora <= 21){
        mensaje = 'Perdiste, intenta de nuevo!';
    }else if(puntosJugador <= 21){
        mensaje = 'Ganaste, felicidades!';
    }else{
        mensaje = 'Perdiste, intenta de nuevo!';
    }

    alert(mensaje);
}