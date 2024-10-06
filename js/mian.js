import data from "./pokedex.json";
import shuffle from "array-shuffle";

const main = document.querySelector("main");
const cardsSection = document.querySelector(".cards");

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

const pokeType = document.querySelectorAll(".poke-type");

pokeType.forEach((type) => {
  if (type.textContent.includes("Grass")) {
    type.style.backgroundColor = "#87dd31";
  } else if (type.textContent.includes("Poison")) {
    type.style.backgroundColor = "#a63e9d";
  } else if (type.textContent.includes("Bug")) {
    type.style.backgroundColor = "#94bc4a";
  } else if (type.textContent.includes("Dark")) {
    type.style.backgroundColor = "#736c75";
  } else if (type.textContent.includes("Dragon")) {
    type.style.backgroundColor = "#6a7baf";
  } else if (type.textContent.includes("Electric")) {
    type.style.backgroundColor = "#e5c531";
  } else if (type.textContent.includes("Fairy")) {
    type.style.backgroundColor = "#e095b0";
  } else if (type.textContent.includes("Fighting")) {
    type.style.backgroundColor = "#f62d14";
  } else if (type.textContent.includes("Fire")) {
    type.style.backgroundColor = "#ff7f22";
  } else if (type.textContent.includes("Flying")) {
    type.style.backgroundColor = "#5ba1e1";
  } else if (type.textContent.includes("Ghost")) {
    type.style.backgroundColor = "#735797";
  } else if (type.textContent.includes("Ground")) {
    type.style.backgroundColor = "#927575";
  } else if (type.textContent.includes("Ice")) {
    type.style.backgroundColor = "#00bed8";
  } else if (type.textContent.includes("Normal")) {
    type.style.backgroundColor = "#a9a9a9";
  } else if (type.textContent.includes("Psychic")) {
    type.style.backgroundColor = "#f95587";
  } else if (type.textContent.includes("Rock")) {
    type.style.backgroundColor = "#5c5c5c";
  } else if (type.textContent.includes("Steel")) {
    type.style.backgroundColor = "#aec6c8";
  } else if (type.textContent.includes("Water")) {
    type.style.backgroundColor = "#0057ff";
  }
});

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
          <p class="pokemon-type">${pokemon.type[0]}</p>
          ${
            pokemon.type[1]
              ? `<p class="pokemon-type">${pokemon.type[1]}</p>`
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
        
      </div>`;
  cardsSection.appendChild(section);
}

const pokemonType = document.querySelectorAll(".pokemon-type");

pokemonType.forEach((type) => {
  if (type.textContent.includes("Grass")) {
    type.style.backgroundColor = "#87dd31";
  } else if (type.textContent.includes("Poison")) {
    type.style.backgroundColor = "#a63e9d";
  } else if (type.textContent.includes("Bug")) {
    type.style.backgroundColor = "#94bc4a";
  } else if (type.textContent.includes("Dark")) {
    type.style.backgroundColor = "#736c75";
  } else if (type.textContent.includes("Dragon")) {
    type.style.backgroundColor = "#6a7baf";
  } else if (type.textContent.includes("Electric")) {
    type.style.backgroundColor = "#e5c531";
  } else if (type.textContent.includes("Fairy")) {
    type.style.backgroundColor = "#e095b0";
  } else if (type.textContent.includes("Fighting")) {
    type.style.backgroundColor = "#f62d14";
  } else if (type.textContent.includes("Fire")) {
    type.style.backgroundColor = "#ff7f22";
  } else if (type.textContent.includes("Flying")) {
    type.style.backgroundColor = "#5ba1e1";
  } else if (type.textContent.includes("Ghost")) {
    type.style.backgroundColor = "#735797";
  } else if (type.textContent.includes("Ground")) {
    type.style.backgroundColor = "#927575";
  } else if (type.textContent.includes("Ice")) {
    type.style.backgroundColor = "#00bed8";
  } else if (type.textContent.includes("Normal")) {
    type.style.backgroundColor = "#a9a9a9";
  } else if (type.textContent.includes("Psychic")) {
    type.style.backgroundColor = "#f95587";
  } else if (type.textContent.includes("Rock")) {
    type.style.backgroundColor = "#5c5c5c";
  } else if (type.textContent.includes("Steel")) {
    type.style.backgroundColor = "#aec6c8";
  } else if (type.textContent.includes("Water")) {
    type.style.backgroundColor = "#0057ff";
  }
});

const card = document.querySelectorAll(".card");

card.forEach((type) => {
  if (type.textContent.includes("Grass")) {
    type.style.background =
      "radial-gradient(ellipse at top, rgba(135, 221, 49, 0.4), rgba(135, 221, 49, 0.3), rgba(135, 221, 49, 0.2), rgba(135, 221, 49, 0.1), rgba(135, 221, 49, 0.004))";
  } else if (type.textContent.includes("Poison")) {
    type.style.background =
      "radial-gradient(ellipse at top, rgba(204, 68, 253, 0.4), rgba(204, 68, 253, 0.3), rgba(204, 68, 253, 0.2), rgba(204, 68, 253, 0.1), rgba(204, 68, 253, 0.004))";
  } else if (type.textContent.includes("Bug")) {
    type.style.background =
      "radial-gradient(ellipse at top, rgba(148, 188, 74, 0.4), rgba(148, 188, 74, 0.3), rgba(148, 188, 74, 0.2), rgba(148, 188, 74, 0.1), rgba(148, 188, 74, 0.004))";
  } else if (type.textContent.includes("Dark")) {
    type.style.background =
      "radial-gradient(ellipse at top, rgba(115, 108, 117, 0.4), rgba(115, 108, 117, 0.3), rgba(115, 108, 117, 0.2), rgba(115, 108, 117, 0.1), rgba(115, 108, 117, 0.004))";
  } else if (type.textContent.includes("Dragon")) {
    type.style.background =
      "radial-gradient(ellipse at top, rgba(106, 123, 175, 0.4), rgba(106, 123, 175, 0.3), rgba(106, 123, 175, 0.2), rgba(106, 123, 175, 0.1), rgba(106, 123, 175, 0.004))";
  } else if (type.textContent.includes("Electric")) {
    type.style.background =
      "radial-gradient(ellipse at top, rgba(229, 196, 49, 0.4), rgba(229, 196, 49, 0.3), rgba(229, 196, 49, 0.2), rgba(229, 196, 49, 0.1), rgba(229, 196, 49, 0.004))";
  } else if (type.textContent.includes("Fairy")) {
    type.style.background =
      "radial-gradient(ellipse at top, rgba(224, 149, 176, 0.4), rgba(224, 149, 176, 0.3), rgba(224, 149, 176, 0.2), rgba(224, 149, 176, 0.1), rgba(224, 149, 176, 0.004))";
  } else if (type.textContent.includes("Fighting")) {
    type.style.background =
      "radial-gradient(ellipse at top, rgba(246, 46, 20, 0.4), rgba(246, 46, 20, 0.3), rgba(246, 46, 20, 0.2), rgba(246, 46, 20, 0.1), rgba(246, 46, 20, 0.004))";
  } else if (type.textContent.includes("Fire")) {
    type.style.background =
      "radial-gradient(ellipse at top, rgba(255, 126, 34, 0.4), rgba(255, 126, 34, 0.3), rgba(255, 126, 34, 0.2), rgba(255, 126, 34, 0.1), rgba(255, 126, 34, 0.004))";
  } else if (type.textContent.includes("Flying")) {
    type.style.background =
      "radial-gradient(ellipse at top, rgba(91, 160, 225, 0.4), rgba(91, 160, 225, 0.3), rgba(91, 160, 225, 0.2), rgba(91, 160, 225, 0.1), rgba(91, 160, 225, 0.004))";
  } else if (type.textContent.includes("Ghost")) {
    type.style.background =
      "radial-gradient(ellipse at top, rgba(115, 87, 151, 0.4), rgba(115, 87, 151, 0.3), rgba(115, 87, 151, 0.2), rgba(115, 87, 151, 0.1), rgba(115, 87, 151, 0.004))";
  } else if (type.textContent.includes("Ground")) {
    type.style.background =
      "radial-gradient(ellipse at top, rgba(146, 117, 117, 0.4), rgba(146, 117, 117, 0.3), rgba(146, 117, 117, 0.2), rgba(146, 117, 117, 0.1), rgba(146, 117, 117, 0.004))";
  } else if (type.textContent.includes("Ice")) {
    type.style.background =
      "radial-gradient(ellipse at top, rgba(0, 191, 216, 0.4), rgba(0, 191, 216, 0.3), rgba(0, 191, 216, 0.2), rgba(0, 191, 216, 0.1), rgba(0, 191, 216, 0.004))";
  } else if (type.textContent.includes("Normal")) {
    type.style.background =
      "radial-gradient(ellipse at top, rgba(169, 169, 169, 0.4), rgba(169, 169, 169, 0.3), rgba(169, 169, 169, 0.2), rgba(169, 169, 169, 0.1), rgba(169, 169, 169, 0.004))";
  } else if (type.textContent.includes("Psychic")) {
    type.style.background =
      "radial-gradient(ellipse at top, rgba(249, 85, 134, 0.4), rgba(249, 85, 134, 0.3), rgba(249, 85, 134, 0.2), rgba(249, 85, 134, 0.1), rgba(249, 85, 134, 0.004))";
  } else if (type.textContent.includes("Rock")) {
    type.style.background =
      "radial-gradient(ellipse at top, rgba(92, 92, 92, 0.4), rgba(92, 92, 92, 0.3), rgba(92, 92, 92, 0.2), rgba(92, 92, 92, 0.1), rgba(92, 92, 92, 0.004))";
  } else if (type.textContent.includes("Steel")) {
    type.style.background =
      "radial-gradient(ellipse at top, rgba(174, 198, 200, 0.4), rgba(174, 198, 200, 0.3), rgba(174, 198, 200, 0.2), rgba(174, 198, 200, 0.1), rgba(174, 198, 200, 0.004))";
  } else if (type.textContent.includes("Water")) {
    type.style.background =
      "radial-gradient(ellipse at top, rgba(0, 85, 255, 0.4), rgba(0, 85, 255, 0.3), rgba(0, 85, 255, 0.2), rgba(0, 85, 255, 0.1), rgba(0, 85, 255, 0.004))";
  }
});
