const pokemonList = document.getElementById('pokemonList') //ligar o JS ao HTML
const loadMoreButton = document.getElementById('more') 
const limitePokemons = 151;
const limit = 10;
let offset = 0; 


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

function loadPokemonItens(offset , limit){
pokeApi.getPokemons(offset , limit).then((pokemons = []) => {
  const newHtml = pokemons.map(convertPokemonToLi).join('')
  pokemonList.innerHTML += newHtml
})
}

loadPokemonItens(offset , limit)

loadMoreButton.addEventListener('click', ()=> {
  offset += limit;

  const quantidadeRegistros = offset + limit;

  if (quantidadeRegistros >= limitePokemons){
    const newLimit = quantidadeRegistros - offset;
    loadPokemonItens(offset , newLimit)

    loadMoreButton.parentElement.removeChild(loadMoreButton)
  }else{
    loadPokemonItens(offset , limit)
  }

})

