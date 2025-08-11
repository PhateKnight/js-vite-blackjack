import {pedirCarta} from "./pedir-carta";
import {insertarCarta} from "./insertar-carta";
import {sumarPuntaje} from "./sumar-puntaje";

/**
 *Genera los turnos de la computadora tratando de obtener un numero mayor a puntosJugador (puntuacion del usuario), siempre y cuando este sea menor a 21.
 * @param {Number} puntosJugador Puntos  Minimos que la computadora necesita para ganar
 * @param {HTMLElement} divCartasComputadora Elemento HTML tipo div donde se colocan las cartas de la computadora
 * @param {HTMLElement} puntuacionHtmlComputadora elemento HTML donde se mostrara la puntuación de la computadora
 * @param {Array<String>} deck Deck que contiene las cartas del juego
 * @returns {Number} Puntuación de la computadora
 */
export const turnoComputadora = (puntosJugador, divCartasComputadora, puntuacionHtmlComputadora, deck) => {
    if(!puntosJugador) throw new Error("Puntos minimos son necesario");
    if(!deck.length) throw new Error("No quedan cartas en el deck");
    
    let puntosComputadora = 0;
    
    do {
        const carta = pedirCarta(deck);

        insertarCarta(carta, divCartasComputadora);
        puntosComputadora = sumarPuntaje(carta, puntosComputadora, puntuacionHtmlComputadora);

    } while ( (puntosComputadora < puntosJugador) && (puntosJugador <= 21) );

    return puntosComputadora;
}