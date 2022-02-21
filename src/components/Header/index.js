import "./styles.css";

export default class Header {
  constructor($target) {
    this.$container = document.createElement("header");
    this.$container.id = "Header";
    $target.appendChild(this.$container);
    this.render();
  }

  render() {
    this.$container.innerHTML = ``;

    const $innerHeader = document.createElement("div");
    $innerHeader.className = "inner-header";
    $innerHeader.innerText = "난 헤더야";

    this.$container.appendChild($innerHeader);
  }
}
