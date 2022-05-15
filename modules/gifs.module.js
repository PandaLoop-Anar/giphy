import { base } from "../common/base.js";

export class gifItems extends base {
  constructor(id, data) {
    super(id, data);
  }

  _renderGifsList(list) {
    return list
      .map((obj) => {
        return `
        <div class="gif-item">
            <div class="gif">
            <img src="${obj.images.original.url}" alt="${obj.title}" >
            </div>
            <div class="gif-rating">
              <span>Rating: ${obj.rating}</span>
            </div>
        </div>
        `;
      })
      .join("");
  }

  render() {
    const content = this._renderGifsList(this.data);
    this.setHtmlContent(content);
  }
}
