import "./styles.css";

export default class Popup {
  constructor($target) {
    this.$container = document.createElement("div");
    this.$container.id = "Popup";
    $target.appendChild(this.$container);
    this.render();
  }

  onClosePopup() {
    document.body.style.overflow = "auto";
    this.$container.remove();
  }

  render() {
    this.$container.innerHTML = ``;
    const $InnerPopup = document.createElement("div");
    $InnerPopup.className = "InnerPopup";

    const $PopupBackground = document.createElement("div");
    $PopupBackground.className = "PopupBackground";

    const $PopupImage = document.createElement("img");
    $PopupImage.className = "PopupImage";
    $PopupImage.src =
      "https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsPopups/11/20220221_%EB%B0%B0%EC%86%A1%EC%95%88%EB%82%B4_G6jZAMi.png";
    $PopupImage.alt = "Popup Image";
    $PopupImage.style.width = "100%";

    const $PopupFooter = document.createElement("div");
    $PopupFooter.className = "PopupFooter";

    const $PopupCloseButton = document.createElement("button");
    $PopupCloseButton.className = "PopupCloseButton";
    $PopupCloseButton.addEventListener("click", this.onClosePopup.bind(this));

    const $PopupTimeCloseButton = document.createElement("button");
    $PopupTimeCloseButton.className = "PopupTimeCloseButton";

    $PopupFooter.appendChild($PopupCloseButton);
    $PopupFooter.appendChild($PopupTimeCloseButton);

    $InnerPopup.appendChild($PopupImage);
    $InnerPopup.appendChild($PopupFooter);

    this.$container.appendChild($InnerPopup);
    this.$container.appendChild($PopupBackground);

    document.body.style.overflow = "hidden";
  }
}
