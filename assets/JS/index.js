
function convertPokemonToLi(pokemon) {
  return `
      <li class="pokemon ${pokemon.type}">
          <span class="number">#${pokemon.number}</span>
          <span class="name">${pokemon.name}</span>

          <div class="detail">
              <ul class="types">
                  ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
              </ul>

              <img src="${pokemon.photo}"
                   alt="${pokemon.name}">
          </div>
      </li>
  `
}

const pokemonList = document.getElementById('pokemonList') //ligar o JS ao HTML

//consumo de API

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})

