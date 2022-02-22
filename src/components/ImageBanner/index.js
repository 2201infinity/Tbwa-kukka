import "./styles.css";

export default class ImageBanner {
  constructor($target) {
    this.$container = document.createElement("div");
    this.$container.id = "ImageBanner";
    $target.appendChild(this.$container);
    this.render();
  }

  render() {
    this.$container.innerHTML = ``;

    const $InnerBanner = document.createElement("div");
    $InnerBanner.className = "InnerBanner";
    this.$container.appendChild($InnerBanner);
  }
}
