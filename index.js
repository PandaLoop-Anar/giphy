// import { base } from "./common/base.js";
import { gifItems } from "./modules/gifs.module.js";
import { shortcutBtnsBlock } from "./modules/shortcutBtns.module.js";
import { queryURL, params } from "./config/config.js";

const idOfshortcutBtnsContainer = document.getElementById("shortcut-btns");
const idOfGifItemsContainer = document.getElementById("gifs_container");
const trendingBtn = document.getElementById("trendingBtn");
const submitBtn=document.getElementById('submitBtn');

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

//
const gifData = [
  {
    url: "https://media2.giphy.com/media/13GIgrGdslD9oQ/200w.gif?cid=ecf05e471tts6w2vsl3dqeda3dswxd136oo40r161csxxeqo&amp;rid=200w.gif&amp;ct=g",
    title: "Jim Carrey Reaction GIF",
    rating: "g",
  },
  {
    url: "https://media4.giphy.com/media/yPRo73ILrGjny/200w.gif?cid=ecf05e47k3yy80za3h5inhi3px5dg9mvpui4q3l364nkh377&rid=200w.gif&ct=g",
    title: "3 gif",
    rating: "g",
  },
  {
    url: "https://media1.giphy.com/media/ule4vhcY1xEKQ/200w.gif?cid=ecf05e471tts6w2vsl3dqeda3dswxd136oo40r161csxxeqo&rid=200w.gif&ct=g",
    title: "Typing Gif",
    rating: "g",
  },
  {
    url: "https://media2.giphy.com/media/13GIgrGdslD9oQ/200w.gif?cid=ecf05e471tts6w2vsl3dqeda3dswxd136oo40r161csxxeqo&amp;rid=200w.gif&amp;ct=g",
    title: "Jim Carrey Reaction GIF",
    rating: "g",
  },
  {
    url: "https://media1.giphy.com/media/ule4vhcY1xEKQ/200w.gif?cid=ecf05e471tts6w2vsl3dqeda3dswxd136oo40r161csxxeqo&rid=200w.gif&ct=g",
    title: "Typing Gif",
    rating: "g",
  },
  {
    url: "https://media4.giphy.com/media/yPRo73ILrGjny/200w.gif?cid=ecf05e47k3yy80za3h5inhi3px5dg9mvpui4q3l364nkh377&rid=200w.gif&ct=g",
    title: "3 gif",
    rating: "g",
  },
  {
    url: "https://media1.giphy.com/media/ule4vhcY1xEKQ/200w.gif?cid=ecf05e471tts6w2vsl3dqeda3dswxd136oo40r161csxxeqo&rid=200w.gif&ct=g",
    title: "Typing Gif",
    rating: "g",
  },
  {
    url: "https://media2.giphy.com/media/13GIgrGdslD9oQ/200w.gif?cid=ecf05e471tts6w2vsl3dqeda3dswxd136oo40r161csxxeqo&amp;rid=200w.gif&amp;ct=g",
    title: "Jim Carrey Reaction GIF",
    rating: "g",
  },
  {
    url: "https://giphy.com/gifs/lfc-mane-sadio-RItkHp0JbHg6ZhkbHI",
    title: "3 gif",
    rating: "g",
  },
];

// Submit btn
submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const searchedValue = document.getElementById('searchedValue');
    if(searchedValue.value !== ''){
        shortcutBtnsData.push(searchedValue.value);
        if(shortcutBtnsData.length > 6){
           shortcutBtnsData.shift(); 
        }        
        mainShortcutBtnsBlock.render();
    }
})

// Trending btn
trendingBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const promiseOfGifs = fetch(`${queryURL}trending?`, {
    method: "GET",
    headers: params,
    // body: stringify(callData)
  });

  promiseOfGifs
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json);

      const mainGifItems = new gifItems(idOfGifItemsContainer, json);
      mainGifItems.render();
    });
});
