import "./styles.css";

export default class ImageSlider {
  constructor($target) {
    this.$container = document.createElement("div");
    this.$container.id = "ImageSlider";
    $target.appendChild(this.$container);
    this.render();
  }

  render() {
    this.$container.innerHTML = ``;
    const $ImageBox = document.createElement("div");
    $ImageBox.className = "ImageBox";
    this.$container.appendChild($ImageBox);
  }
}
