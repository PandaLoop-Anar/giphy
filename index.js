import { shortcutBtnsBlock } from "./modules/shortcutBtns.module.js";
import { queryURL, params } from "./config/config.js";
import { fetchingGifsFromAPI } from "./common/fetchingAPI.js";

const idOfshortcutBtnsContainer = document.getElementById("shortcut-btns");
const idOfGifItemsContainer = document.getElementById("gifs_container");
const shortcutBtns = document.querySelectorAll("div.shortcut-btns");
const trendingBtn = document.getElementById("trendingBtn");
const submitBtn = document.getElementById("submitBtn");

// shortcut btns
const shortcutBtnsData = [
  "Internet cats",
  "Meme's",
  "Typing",
  "Space",
  "Rick and Morty",
];

const mainShortcutBtnsBlock = new shortcutBtnsBlock(
  idOfshortcutBtnsContainer,
  shortcutBtnsData
);
mainShortcutBtnsBlock.render();

const activatingShortcutBtns = () => {
  for (let shortcutBtn of shortcutBtns[0].children) {
    shortcutBtn.addEventListener("click", (e) => {
      // Fetching
      fetchingGifsFromAPI(
        idOfGifItemsContainer,
        `${queryURL}search?q=${shortcutBtn.textContent}&limit=${params.limit}&api_key=${params.api_key}&fmt=${params.fmt}`
      );
    });
  }
};
activatingShortcutBtns();

// Submit btn
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchedValue = document.getElementById("searchedValue");
  let existsBtn = false;
  if (searchedValue.value !== "") {
    // Adding only new values to shortcutBtnsData array
    for (let shortcutBtnValue of shortcutBtnsData) {
      if (shortcutBtnValue === searchedValue.value) {
        existsBtn = true;
      }
    }
    if (existsBtn === false) {
      shortcutBtnsData.push(searchedValue.value);
    }
    // Fetching
    fetchingGifsFromAPI(
      idOfGifItemsContainer,
      `${queryURL}search?q=${searchedValue.value}&limit=${params.limit}&api_key=${params.api_key}&fmt=${params.fmt}`
    );
    // Deleting first value of shortcutBtnsData array
    if (shortcutBtnsData.length > 6) {
      shortcutBtnsData.shift();
    }
    // Rendering shortcutBtnsBlock, activating them
    mainShortcutBtnsBlock.render();
    activatingShortcutBtns();
    // Cleaning input value
    searchedValue.value = "";
  }
});

// Trending btn
trendingBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // Fetching
  fetchingGifsFromAPI(
    idOfGifItemsContainer,
    `${queryURL}trending?limit=${params.limit}&api_key=${params.api_key}&fmt=${params.fmt}`
  );
});
