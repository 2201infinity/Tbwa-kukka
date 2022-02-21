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

    const $PopupCloseButton = document.createElement("button");
    $PopupCloseButton.className = "PopupCloseButton";
    $PopupCloseButton.innerText = "닫기";
    $PopupCloseButton.addEventListener("click", () =>
      this.onClosePopup().bind(this)
    );
    $InnerPopup.appendChild($PopupCloseButton);

    this.$container.appendChild($InnerPopup);
    this.$container.appendChild($PopupBackground);

    document.body.style.overflow = "hidden";
  }
}
