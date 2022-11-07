let pokeones = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle'];
console.log(pokeones);

const pokeonesEnMayuscula = (pokeones) => { 
   let pokeonesMayucula = [];

    console.log('inicio de funcion pokeones en mayuscula')
    for (let pokeone of pokeones) {
        pokeone = pokeone.toUpperCase();
        console.log(pokeone);
        pokeonesMayucula.push(pokeone);
    }

    return pokeonesMayucula;
}


pokeones = pokeonesEnMayuscula(pokeones)

console.log(pokeones);