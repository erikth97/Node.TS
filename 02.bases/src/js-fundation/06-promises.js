

const getPokemonById = (id, callback) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

    fetch(url).then((Response) => {

        Response.json().then((pokemon) => {


            callback(pokemon.name);
        });

    });

    //return 'Pokemon';
}



module.exports = getPokemonById;