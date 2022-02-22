import { POPUP_CONTENT_IMAGE } from "../../utils/constants.js";
import "./styles.css";

export default class Popup {
  constructor($target) {
    this.$container = document.createElement("div");
    this.$container.id = "Popup";
    $target.appendChild(this.$container);
    this.getCookiePopup() ? this.$container.remove() : this.render();
  }

  getCookiePopup() {
    const cookiePopup = document.cookie
      .split(";")
      .find((element) => element.includes("Popup="));
    return cookiePopup === undefined ? false : true;
  }

  onClosePopup() {
    document.body.style.overflow = "auto";
    this.$container.remove();
  }

  onCloseTodyPopup() {
    const date = new Date();
    date.setTime(date.getTime() + 1 * 60 * 60 * 24 * 1000);
    document.cookie = `Popup=${date.getTime()}; expires=${date.toUTCString()}; path=/`;
    this.onClosePopup();
  }

  render() {
    this.$container.innerHTML = ``;
    const $InnerPopup = document.createElement("div");
    $InnerPopup.className = "InnerPopup";

    const $PopupBackground = document.createElement("div");
    $PopupBackground.className = "PopupBackground";

    const $PopupImage = document.createElement("img");
    $PopupImage.className = "PopupImage";
    $PopupImage.src = POPUP_CONTENT_IMAGE;
    $PopupImage.alt = "Popup Image";
    $PopupImage.style.width = "100%";

    const $PopupFooter = document.createElement("div");
    $PopupFooter.className = "PopupFooter";

    const $PopupCloseButton = document.createElement("button");
    $PopupCloseButton.className = "PopupCloseButton";
    $PopupCloseButton.addEventListener("click", this.onClosePopup.bind(this));

    const $PopupTimeCloseButton = document.createElement("button");
    $PopupTimeCloseButton.className = "PopupTimeCloseButton";
    $PopupTimeCloseButton.addEventListener(
      "click",
      this.onCloseTodyPopup.bind(this)
    );

    $PopupFooter.appendChild($PopupCloseButton);
    $PopupFooter.appendChild($PopupTimeCloseButton);

    $InnerPopup.appendChild($PopupImage);
    $InnerPopup.appendChild($PopupFooter);

    this.$container.appendChild($InnerPopup);
    this.$container.appendChild($PopupBackground);

    document.body.style.overflow = "hidden";
  }
}
