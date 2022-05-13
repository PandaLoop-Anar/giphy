import { base } from "./common/base.js";

const idOfshortcutBtnsContainer=document.getElementById('shortcut-btns');
const idOfGifItemsContainer=document.getElementById('gifs_container');

const shortcutBtnsData=["Internet cats", "Meme's", "Typing", "Space", "Rick and Morty"];
class shortcutBtnsBlock extends base{
    constructor(id, data){
        super(id, data);
    }

    _renderBtnsList(list){
        return list.map((btnValue)=>{
        return `
        <div class="shortcut-btn">${btnValue}</div>
        `
        }).join("");
    }

    render(){
        const content= this._renderBtnsList(this.data);
        this.setHtmlContent(content);
    }
}

const mainShortcutBtnsBlock = new shortcutBtnsBlock(idOfshortcutBtnsContainer,shortcutBtnsData);
mainShortcutBtnsBlock.render();

class gifItems extends base{
    constructor(id, data){
        super(id, data);
    }

    _renderGifsList(list){
        return list.map((obj)=>{
        return `
        <div class="gif-item">
            <div class="gif">
            <img src="${obj.url}" alt="" srcset="">
            </div>
            <div class="gif-rating">
              <span>Rating: ${obj.rating}</span>
            </div>
        </div>
        `
        }).join("");
    }

    render(){
        const content= this._renderGifsList(this.data);
        this.setHtmlContent(content);
    }
}

// const mainGifItems = new gifItems(idOfGifItemsContainer,data);
// mainGifItems.render();
