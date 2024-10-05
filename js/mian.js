import data from "./pokedex.json";
import shuffle from "array-shuffle";

const main = document.querySelector("main");
const cardsSection = document.querySelector(".cards");
const input = document.querySelector("input[type=text]")

const shuffledData = shuffle(data);
const pokemon = shuffledData[0];

const types = pokemon.type;
let typeHtml = "";
if (types.length === 2) {
  typeHtml = `<p class="poke-type">${types[0]}</p>
                <p class="poke-type">${types[1]}</p>`;
} else if (types.length === 1) {
  typeHtml = `<p class="poke-type">${types[0]}</p>`;
}

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

for (let pokemon of data) {
  const section = document.createElement("section");
  section.classList.add("cards");
  section.innerHTML = `<div class="card">
        <img
          class="pokemoncardimg"
          src="${pokemon.image.hires}"
          alt=""
        />
        <p class="pokemon-no">#${pokemon.id}</p>
        <p class="pokemon-name">${pokemon.name["english"]}</p>
        <div class="type flex">
          <p>${pokemon.type[0]}</p>
          ${
            pokemon.type[1]
              ? `<p>${pokemon.type[1]}</p>`
              : ""
          }
        </div>
        <div class="height-weight flex">
          <div class="height">
            <p>Height</p>
            <p>${pokemon.profile.height}</p>
          </div>
          <div class="weight">
            <p>Weight</p>
            <p>${pokemon.profile.weight}</p>
          </div>
        </div>
        <button>More Details</button>
      </div>`;
  cardsSection.appendChild(section);
}


