/* 
    * 2C = Two of Clubs
    * 2D = Two of Diamonds
    * 2H = Two of Hearts
    * 2S = Two of Spades
*/

import _ from 'underscore';
import {crearDeck, pedirCarta, insertarCarta, sumarPuntaje, turnoComputadora, validarGanador} from './casosuso';

const btnPedirCarta = document.querySelector('#btnPedirCarta'),
    btnPlantarse = document.querySelector('#btnPlantarse'),
    btnNuevoJuego = document.querySelector('#btnNuevoJuego'),
    smallPuntosJugador = document.querySelector('#puntosJugador small'),
    divCartasJugador = document.querySelector('#cartasJugador'),
    divCartasComputadora = document.querySelector('#cartasComputadora'),
    smallPuntosComputadora = document.querySelector('#puntosComputadora small');

btnPlantarse.disabled = true;
btnPedirCarta.disabled = true;
let deck = [],
    puntosJugador = 0;

export const inicializarJuego = () => {
    deck = crearDeck();

    puntosJugador = 0;

    smallPuntosJugador.textContent = '0';
    smallPuntosComputadora.textContent = '0';

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnNuevoJuego.disabled = true;
    btnPedirCarta.disabled = false;
    btnPlantarse.disabled = true;
}

const validacionGanador = () => {
    btnPedirCarta.disabled = true;
    btnPlantarse.disabled = true;
    
    let puntosComputadora = turnoComputadora(puntosJugador, divCartasComputadora, smallPuntosComputadora, deck);
    setTimeout(() => {
        validarGanador(puntosJugador, puntosComputadora);
    }, 800)
}

btnPedirCarta.addEventListener('click', () => {
    const carta = pedirCarta(deck);

    insertarCarta(carta, divCartasJugador);
    puntosJugador = sumarPuntaje(carta, puntosJugador, smallPuntosJugador);
    
    btnNuevoJuego.disabled = false;
    btnPlantarse.disabled = false;

    if(puntosJugador < 21) return 0; 

    validacionGanador();
})

btnPlantarse.addEventListener('click', () => {
    console.log("entra pa")
    validacionGanador();
})

btnNuevoJuego.addEventListener('click', () => {
    inicializarJuego();
})
