import "./styles.css";

export default class Header {
  constructor($target) {
    this.$container = document.createElement("header");
    this.$container.className = "Header";
    $target.appendChild(this.$container);
    this.render();
  }

  onClick() {
    alert("안녕하세요");
  }

  render() {
    this.$container.innerHTML = ``;

    const $button = document.createElement("button");
    $button.innerText = "클릭";
    $button.addEventListener("click", this.onClick.bind(this));

    this.$container.appendChild($button);
  }
}
