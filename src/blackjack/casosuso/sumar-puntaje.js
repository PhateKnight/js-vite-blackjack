import {obtenerValorCarta} from "./valor-carta"

/**
 * Función encargada de generar la suma de la puntuación obteniendo el valor de la carta, ademas de mostrarlo en el elemento HTML ingresado
 * @param {String} carta Nombre de la carta
 * @param {Number} puntuacion Puntuación del jugador o computadora
 * @param {HTMLElement} htmlPuntuacion Elemento HTML donde se muestra la puntuación
 * @returns Suma total de los puntos del jugador
 */
export const sumarPuntaje = (carta, puntuacion, htmlPuntuacion) => {
    puntuacion += obtenerValorCarta(carta, puntuacion);
    htmlPuntuacion.innerHTML = puntuacion;

    return puntuacion;
}