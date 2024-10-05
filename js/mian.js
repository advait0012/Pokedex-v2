import data from "./pokedex.json";
import shuffle from "array-shuffle";

const shuffledData = shuffle(data);
const pokemon = shuffledData[0];

const types = pokemon.type; // Assuming pokemon.type is an array

let typeHtml = '';
if (types.length === 2) {
    typeHtml = `<p class="poke-type">${types[0]}</p>
                <p class="poke-type">${types[1]}</p>`;
} else if (types.length === 1) {
    typeHtml = `<p class="poke-type">${types[0]}</p>`;
}

const main = document.querySelector("main");

const section = document.createElement("section");
section.classList.add("hero");
section.innerHTML = `<div class="info">
          <p class="poke-num">#${pokemon.id}</p>
         ${typeHtml}
          <p class="poke-name">${pokemon.name["english"]}</p>
          <p class="poke-text">${pokemon.description}</p>
        </div>
        <div class="pokemonimg">
          <img class="pokeimg" src="${pokemon.image.hires}" alt="${pokemon.name.english}" />
        </div>`;

main.appendChild(section);
