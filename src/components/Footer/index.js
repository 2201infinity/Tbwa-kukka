import "./styles.css";

export default class Footer {
  constructor($target) {
    this.$container = document.createElement("footer");
    this.$container.id = "Footer";
    $target.appendChild(this.$container);
    this.render();
  }

  render() {
    this.$container.innerHTML = ``;

    const $InnerFooter = document.createElement("div");
    $InnerFooter.className = "InnerFooter";
    $InnerFooter.innerText = "난 푸터야";
    this.$container.appendChild($InnerFooter);
  }
}
