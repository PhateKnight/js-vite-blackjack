/**
 * Función encargada de mostrar la carta en el div del jugador
 * @param {String} carta Nombre de la carta
 * @param {HTMLElement} divCartas Elemento HTML donde se mostraran las cartas como img
 */
export const insertarCarta = (carta, divCartas) => {
    const cartaNueva = document.createElement('img');
    cartaNueva.classList.add('carta');
    cartaNueva.src = `assets/cartas/${carta}.png`;
    divCartas.append(cartaNueva);
}