import "./styles.css";

export default class IFrameBox {
  constructor($target) {
    this.$container = document.createElement("div");
    this.$container.id = "IFrameBox";
    $target.appendChild(this.$container);
    this.render();
  }

  render() {
    this.$container.innerHTML = ` <iframe width="100%" height="400" src="https://www.youtube.com/embed/iDjQSdN_ig8?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
}
