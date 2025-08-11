import _ from 'underscore';

/**
 * Con base a los array de tipos y especiales, genera cada nombre de carta y despues las desordena con ayuda de underscore y el metodo shuffle.
 * @returns {Array<string>} Regresa un Deck de cartas
 */
export const crearDeck = () => {
    const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['A', 'J', 'Q', 'K'];

    let deck = [];

    for(let tipo of tipos){
        
        for(let i = 2; i <= 10; i++){
            deck.push(i + tipo);
        }
        
        for(let especial of especiales){
            deck.push(especial + tipo)
        }
    }

    return _.shuffle(deck);
}