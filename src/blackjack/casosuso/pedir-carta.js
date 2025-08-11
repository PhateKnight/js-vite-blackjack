/**
 * Funcion para obtener una carta de la baraja
 * @param {Array<string>} deck Ejemplo ['AD', 'KH', 'KD', ... '3C', '3D', '2C']
 * @returns {String} Returna el nombre de la carta, en caso de que el deck este vacio, arroja un error.
 */
export const pedirCarta = (deck) => {
    if(!deck || deck.length === 0 )
        throw new Error("deck es obligatorio");

    if ( deck.length === 0 )
        throw new Error('El deck no cuenta con cartas');

    return deck.pop()
}