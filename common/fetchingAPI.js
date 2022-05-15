import { gifItems } from "../modules/gifs.module.js";

export const fetchingGifsFromAPI = (idOfContainer, API) => {
  const promiseOfGifs = fetch(API);

  promiseOfGifs
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const mainGifItems = new gifItems(idOfContainer, json.data);
      mainGifItems.render();
    });
};
