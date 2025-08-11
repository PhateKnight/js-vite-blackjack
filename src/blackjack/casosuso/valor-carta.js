/**
 * Función encargada de obtener el valor de la carta, ademas de que valida si el As valdra 1 o 11 segun los puntos del jugador 
 * @param {String} carta Nombre de la carta
 * @param {Number} puntos Puntos del jugador o la computadora 
 * @returns {Number} Retorna el valor de la carta
 */
export const obtenerValorCarta = (carta = '', puntos) => {
    const valor = carta.substring(0, carta.length - 1);
    
    //Tomar en cuenta que J, K y Q tienen un valor de 10, a excepcion de A que vale 11
    if(!isNaN(valor)) return valor * 1;

    if(valor != 'A') return 10;
    
    //Decide si es más apropiado que el As valga 11 o 1 segun los puntos del jugador
    return (puntos + 11 <= 21) ? 11 : 1;
}