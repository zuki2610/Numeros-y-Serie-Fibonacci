let pokeones = 
[  
     {
        nombre: 'Pikachu',
        tipo: 'Electrico'
    },
    {
       nombre: 'Charmander',
       tipo: 'Fuego'
    }, 
    {
       nombre: 'Bulbasaur',
       tipo: 'Planta'
    }, 
    {
        nombre: 'Squirtle',
        tipo: 'Agua'
    },
    {
        nombre: 'Charmeleon',
        tipo: 'Fuego'
    },
    {
        nombre: 'Weedle',
        tipo: 'bicho'
    },
    { 
        nombre: 'Charizard',
        tipo: 'Fuego'
    }
]
console.log(pokeones);

const buscarPokeonesTipoFuego = (pokeones) => {
    return pokeones.filter((pokeone) => {
        return pokeone.tipo === 'Fuego'
    })
};

const pokeonesTipoFuego = buscarPokeonesTipoFuego(pokeones);
console.log(pokeonesTipoFuego);
