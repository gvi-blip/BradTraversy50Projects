const pokeContainer = document.querySelector(".poke-container");
const pokeCount = 100;
(async () => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=1`;
    let results = await fetch(url);
    let check = await results.json();
    console.log(check.results);

    url = `https://pokeapi.co/api/v2/pokemon/`;
    check.results.forEach(async (pokemon) => {
      results = await fetch(url + pokemon.name);
      check = await results.json();
      renderPokemon(check);
    });
  } catch (e) {
    console.log(e);
  }
})();

function renderPokemon(check) {}
