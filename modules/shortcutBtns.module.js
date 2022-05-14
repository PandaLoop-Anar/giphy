import { base } from "../common/base.js";

export class shortcutBtnsBlock extends base {
  constructor(id, data) {
    super(id, data);
  }

  _renderBtnsList(list) {
    return list
      .map((btnValue) => {
        return `
          <div class="shortcut-btn">${btnValue}</div>
          `;
      })
      .join("");
  }

  render() {
    const content = this._renderBtnsList(this.data);
    this.setHtmlContent(content);
  }
}
